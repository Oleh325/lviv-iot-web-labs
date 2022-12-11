package ua.lviv.iot.web.backend.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import ua.lviv.iot.web.backend.security.domain.LoginCredentials;
import ua.lviv.iot.web.backend.service.impl.UserDetailsServiceImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;

@Component
public class JsonObjectAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final UserDetailsServiceImpl userDetailsService;

    public JsonObjectAuthenticationFilter(AuthenticationManager authenticationManager, UserDetailsServiceImpl userDetailsService) {
        super(authenticationManager);
        this.userDetailsService = userDetailsService;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            BufferedReader reader = request.getReader();
            StringBuilder stringBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuilder.append(line);
            }
            LoginCredentials authRequest = objectMapper.readValue(stringBuilder.toString(), LoginCredentials.class);
            try {
                userDetailsService.loadUserByUsername(authRequest.getEmail());
                UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword());
                setDetails(request, token);
                return this.getAuthenticationManager().authenticate(token);
            } catch (Exception e) {
                throw new AuthenticationServiceException(e.getMessage());
            }
        } catch (Exception e) {
            if (e.getMessage().contains("Could not find 'user' with email=")) {
                response.setStatus(HttpStatus.FORBIDDEN.value());
                throw new AuthenticationServiceException(e.getMessage());
            } else {
                throw new AuthenticationServiceException("Authentication failed", e);
            }
        }
    }

}
