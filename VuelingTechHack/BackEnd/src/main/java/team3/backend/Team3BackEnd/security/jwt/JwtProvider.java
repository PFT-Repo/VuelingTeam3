package team3.backend.Team3BackEnd.security.jwt;

import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;


import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

import team3.backend.Team3BackEnd.security.service.UsuarioPrincipal;
/**
 * Clase que genera el token y valida que este bien formado y no este expirado
 */
@Component
public class JwtProvider {
    
	private static final  Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

    public String generateToken(Authentication authentication){
        UsuarioPrincipal usuarioPrincipal = (UsuarioPrincipal) authentication.getPrincipal();
        return Jwts.builder()
                .signWith(getKey(secret))
        		.setSubject(usuarioPrincipal.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 1000))
                .claim("roles",getRoles(usuarioPrincipal))
                //.claim("it", "academy")
                .compact();
    }

    public String getUsernameFromToken(String token){
        return Jwts.parserBuilder().setSigningKey(getKey(secret))
        		.build().parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token){
        try {
            Jwts.parserBuilder().setSigningKey(getKey(secret))
            .build().parseClaimsJws(token).getBody();
            return true;
        }catch (MalformedJwtException e){
            logger.error("token mal formado");
        }catch (UnsupportedJwtException e){
            logger.error("token no soportado");
        }catch (ExpiredJwtException e){
            logger.error("token expirado");
        }catch (IllegalArgumentException e){
            logger.error("token vacío");
        }catch (SignatureException e){
            logger.error("fail en la firma");
        }catch (Exception e) {
            logger.error("fail token");
		}
        return false;
    }
    private List<String> getRoles(UsuarioPrincipal user){
    	return user.getAuthorities().stream()
    			.map(GrantedAuthority::getAuthority)
    			.collect(Collectors.toList());
    }
    private Key getKey(String secret) {
    	byte [] secretBytes = Decoders.BASE64URL.decode(secret);
    	return Keys.hmacShaKeyFor(secretBytes);
    }
}
