package team3.backend.Team3BackEnd.security.dto;



import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginUserDto {
	@NotBlank(message = "username is mandatory")
	//@Indexed(unique = true)
	private String username;
	@NotBlank(message = "password is mandatory")
	private String password;	
	
}
