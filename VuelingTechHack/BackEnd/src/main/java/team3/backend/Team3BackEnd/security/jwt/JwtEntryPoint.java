package team3.backend.Team3BackEnd.security.jwt;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

/**
 * Comprueba si existe un token si no devuelve un 401 no autorizado
 */
@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {
	// Implementamos un logger para ver cual metodo da error en caso de falla
	private static final Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

	//Metodo implementado de AuthenticationEntryPoint
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		logger.error("token not found or invalid");
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "unauthoized");
	}

	@Override
	public void commence(jakarta.servlet.http.HttpServletRequest request,
			jakarta.servlet.http.HttpServletResponse response, AuthenticationException authException)
			throws IOException, jakarta.servlet.ServletException {
		// TODO Auto-generated method stub
		
	}
}

