package ua.lviv.iot.web.backend.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import ua.lviv.iot.web.backend.domain.Role;
import ua.lviv.iot.web.backend.domain.User;
import ua.lviv.iot.web.backend.service.UserService;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Component
@RequiredArgsConstructor
public class AuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final UserService userService;
    private final JWTUtil jwtUtil;
    @Value("${jwt.refreshToken.expiration}")
    private int expirationTimeRefresh;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        UserDetails principal = (UserDetails) authentication.getPrincipal();
        String token = jwtUtil.createJWT(principal.getUsername());
        String refreshToken = jwtUtil.createJWTRefresh(principal.getUsername());
        String tokenPrefix = "Bearer ";
        response.addHeader("Authorization", tokenPrefix + token);
        response.addHeader("Content-Type", "application/json");
        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setHttpOnly(true);
        cookie.setPath("/api/auth/");
        cookie.setMaxAge(expirationTimeRefresh);
        response.addCookie(cookie);
        response.getWriter().write("{\"username\": \"" + userService.findByEmail(principal.getUsername()).getUsernameUser()
                + "\", \"roles\": " + getRoles(principal.getUsername()) + ", \"accessToken\": \"" + token + "\"}");
    }

    private String getRoles(String email) {
        User user = userService.findByEmail(email);
        final StringBuilder roles = new StringBuilder();
        roles.append("[");
        for (Role role : user.getRoles()) {
            roles.append("\"").append(role.getName()).append("\"").append(", ");
        }
        roles.delete(roles.length() - 2, roles.length());
        roles.append("]");
        return roles.toString();
    }

}
