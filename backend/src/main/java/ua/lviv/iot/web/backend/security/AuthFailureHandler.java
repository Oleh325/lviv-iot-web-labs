package ua.lviv.iot.web.backend.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        if (exception.getMessage().contains("Could not find 'user' with email=")) {
            response.setStatus(401);
            response.getWriter().write("{\"error\": \"Invalid username!\"}");
        } else {
            response.setStatus(401);
            response.getWriter().write("{\"error\": \"Invalid password!\"}");
        }
    }

}
