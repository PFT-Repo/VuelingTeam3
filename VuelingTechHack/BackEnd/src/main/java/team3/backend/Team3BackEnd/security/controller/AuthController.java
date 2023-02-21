package team3.backend.Team3BackEnd.security.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import team3.backend.Team3BackEnd.exceptions.AttributeException;
import team3.backend.Team3BackEnd.security.domain.Usuario;
import team3.backend.Team3BackEnd.security.dto.CreateUserDto;
import team3.backend.Team3BackEnd.security.dto.JwtTokenDto;
import team3.backend.Team3BackEnd.security.dto.LoginUserDto;
import team3.backend.Team3BackEnd.security.dto.Mensaje;
import team3.backend.Team3BackEnd.security.service.UserService;


@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	UserService userService;
	
    @PostMapping("/create")
    public ResponseEntity<Mensaje> create(@Valid @RequestBody CreateUserDto dto) throws AttributeException {
        Usuario usuario = userService.create(dto);
        return ResponseEntity.ok(new Mensaje(HttpStatus.OK, "user " + usuario.getUsername() + " have been created"));
    }

    @PostMapping("/login")
    public ResponseEntity<JwtTokenDto> login(@Valid @RequestBody LoginUserDto dto) throws AttributeException {
        JwtTokenDto jwtTokenDto = userService.login(dto);
        return ResponseEntity.ok(jwtTokenDto);
    }
}
