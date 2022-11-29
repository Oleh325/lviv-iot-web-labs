package ua.lviv.iot.web.backend.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import ua.lviv.iot.web.backend.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Component
public class AuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final int expirationTime;
    private final String secret;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final UserService userService;


    public AuthSuccessHandler(@Value("${jwt.expiration}") int expirationTime, @Value("${jwt.secret}") String secret, UserService userService) {
        this.expirationTime = expirationTime;
        this.secret = secret;
        this.userService = userService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        String token = JWT.create()
                .withSubject(userService.findByUsername(principal.getUsername()).getEmail())
                .withExpiresAt(Instant.ofEpochMilli(ZonedDateTime.now(ZoneId.systemDefault()).toInstant().toEpochMilli() + expirationTime))
                .sign(Algorithm.HMAC256(secret.getBytes()));
        String tokenPrefix = "Bearer ";
        response.addHeader("Authorization", tokenPrefix + token);
        response.addHeader("Content-Type", "application/json");
        response.getWriter().write("{\"token\": \"" + token + "\"}");
    }

}
