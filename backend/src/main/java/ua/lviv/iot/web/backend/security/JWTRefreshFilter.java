package ua.lviv.iot.web.backend.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.stereotype.Component;
import ua.lviv.iot.web.backend.service.impl.UserDetailsServiceImpl;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.Objects;

@Component
public class JWTRefreshFilter extends BasicAuthenticationFilter {

    private static final String TOKEN_PREFIX = "Bearer ";
    private final String secret;
    private final JWTUtil jwtUtil;

    public JWTRefreshFilter(AuthenticationManager authenticationManager,
                                  @Value("${jwt.secret}") String secret, JWTUtil jwtUtil) {
        super(authenticationManager);
        this.secret = secret;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        if (Objects.equals(request.getRequestURI(), "/api/auth/refresh")) {
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                String token = Arrays.stream(cookies)
                        .filter(cookie -> Objects.equals(cookie.getName(), "refreshToken"))
                        .findFirst()
                        .map(Cookie::getValue)
                        .orElse(null);
                if (token != null) {
                    try {
                        String email = JWT.require(Algorithm.HMAC256(secret.getBytes()))
                                .build()
                                .verify(token)
                                .getSubject();
                        String accessToken = jwtUtil.createJWT(email);
                        response.getWriter().write("{\"token\": \"" + accessToken + "\"}");
                        } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                } else {
                    response.setStatus(401);
                }
            } else {
                response.setStatus(401);
            }
        }
        if (Objects.equals(request.getRequestURI(), "/api/auth/signout")) {
            if (request.getCookies() != null) {
                Cookie[] cookies = request.getCookies();
                if (Arrays.stream(cookies).anyMatch(cookie -> Objects.equals(cookie.getName(), "refreshToken"))) {
                    Cookie cookie = new Cookie("refreshToken", null);
                    cookie.setHttpOnly(true);
                    cookie.setPath("/api/auth/refresh");
                    cookie.setMaxAge(0);
                    response.addCookie(cookie);
                    response.setStatus(200);
                } else {
                    response.setStatus(401);
                }
            } else {
                response.setStatus(401);
            }
        }
        chain.doFilter(request, response);
    }

}

