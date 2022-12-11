package ua.lviv.iot.web.backend.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Component
@RequiredArgsConstructor
public class JWTUtil {

    @Value("${jwt.expiration}")
    private int expirationTime;

    @Value("${jwt.refreshToken.expiration}")
    private int expirationTimeRefresh;

    @Value("${jwt.secret}")
    private String secret;

    public String createJWT(String email) {
        return JWT.create()
                .withSubject(email)
                .withExpiresAt(Instant.ofEpochMilli(ZonedDateTime.now(ZoneId.systemDefault()).toInstant().toEpochMilli() + expirationTime))
                .sign(Algorithm.HMAC256(secret));
    }

    public String createJWTRefresh(String email) {
        return JWT.create()
                .withSubject(email)
                .withExpiresAt(Instant.ofEpochMilli(ZonedDateTime.now(ZoneId.systemDefault()).toInstant().toEpochMilli() + expirationTimeRefresh))
                .sign(Algorithm.HMAC256(secret));
    }

}
