package team3.backend.Team3BackEnd.security.dto;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Mensaje {
	private HttpStatus httpStatus;
	private String mensaje;

}
