package team3.backend.Team3BackEnd.security.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import team3.backend.Team3BackEnd.exceptions.AttributeException;
import team3.backend.Team3BackEnd.security.domain.Usuario;
import team3.backend.Team3BackEnd.security.dto.CreateUserDto;
import team3.backend.Team3BackEnd.security.dto.JwtTokenDto;
import team3.backend.Team3BackEnd.security.dto.LoginUserDto;
import team3.backend.Team3BackEnd.security.dto.Rol;
import team3.backend.Team3BackEnd.security.jwt.JwtProvider;
import team3.backend.Team3BackEnd.security.repository.UserRepository;



@Service
public class UserService {
	
	@Autowired
	UserRepository userRepo;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	JwtProvider jwtProvider;

	@Autowired
	AuthenticationManager authenticationManager;
	

	public Usuario create(CreateUserDto dto) throws AttributeException {
		if (userRepo.existsByUsername(dto.getUsername()))
			throw new AttributeException("username already in use");

		return userRepo.save(mapUserFromDto(dto));
	}
	
	private Usuario mapUserFromDto(CreateUserDto dto) {

		String password = passwordEncoder.encode(dto.getPassword());
		List<Rol> roles = dto.getRoles().stream().map(rol -> Rol.valueOf(rol)).collect(Collectors.toList());
		return new Usuario(dto.getUsername(), password, roles);
	}
	
	
	public JwtTokenDto login(LoginUserDto dto) {
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String token = jwtProvider.generateToken(authentication);
		return new JwtTokenDto(token);
	}

	public Optional<Usuario> getUser(String name) {
		return userRepo.findByUsername(name);
	}
	public Usuario saveUser(Usuario usuario) {
		return userRepo.save(usuario);
	}
	public List<Usuario> getAllUsers(){
		return userRepo.findAll();
	}
	public List<Usuario> getClientes(){
		return userRepo.findByRoles(Rol.ROLE_USER);
	}
}