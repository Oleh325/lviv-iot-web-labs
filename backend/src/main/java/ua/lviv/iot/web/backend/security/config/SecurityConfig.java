package ua.lviv.iot.web.backend.security.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import ua.lviv.iot.web.backend.security.AuthSuccessHandler;
import ua.lviv.iot.web.backend.security.JWTAuthorizationFilter;
import ua.lviv.iot.web.backend.security.JsonObjectAuthenticationFilter;
import ua.lviv.iot.web.backend.service.impl.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig implements WebMvcConfigurer {

    @Lazy
    @Autowired
    private AuthenticationManager authenticationManager;
    private final AuthSuccessHandler authSuccessHandler;
    private final UserDetailsServiceImpl userDetailsService;
    private final String secret;

    public SecurityConfig(AuthSuccessHandler authSuccessHandler, UserDetailsServiceImpl userDetailsService, @Value("${jwt.secret}") String secret) {
        this.authSuccessHandler = authSuccessHandler;
        this.userDetailsService = userDetailsService;
        this.secret = secret;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors().and().csrf().disable()
                .authorizeHttpRequests(auth -> {
                    try {
                        auth.antMatchers("/api/cats/**").hasRole("USER")
                            .antMatchers(HttpMethod.POST, "/api/cats/").hasRole("ADMIN")
                            .antMatchers(HttpMethod.PUT, "/api/cats/{^[\\d]+$}").hasRole("ADMIN")
                            .antMatchers(HttpMethod.DELETE, "/api/cats/{^[\\d]+$}").hasRole("ADMIN")
                            .anyRequest().permitAll()
                            .and()
                            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                            .and()
                            .addFilter(authenticationFilter())
                            .addFilter(new JWTAuthorizationFilter(authenticationManager, userDetailsService, secret))
                            .exceptionHandling()
                            .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                })
                .httpBasic(Customizer.withDefaults());
        return http.build();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("*");
    }

    @Bean
    public JsonObjectAuthenticationFilter authenticationFilter() throws Exception {
        JsonObjectAuthenticationFilter filter = new JsonObjectAuthenticationFilter();
        filter.setAuthenticationSuccessHandler(authSuccessHandler);
        filter.setAuthenticationManager(authenticationManager);
        return filter;
    }
}
