package team3.backend.Team3BackEnd.service;


import lombok.RequiredArgsConstructor;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import team3.backend.Team3BackEnd.model.in.Role;
import team3.backend.Team3BackEnd.model.in.User;
import team3.backend.Team3BackEnd.model.out.AuthenticationResponse;
import team3.backend.Team3BackEnd.model.out.RegisterDto;
import team3.backend.Team3BackEnd.repository.UserRepository;
import team3.backend.Team3BackEnd.model.out.LoginDto;

//fa la logica de el registre i l'autentificació
@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterDto request) {
        if (EmailValidator.getInstance().isValid(request.getEmail())) {
            if (!repository.existsByEmail(request.getEmail())){
                var user = User.builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .build();
                repository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                        .token(jwtToken)
                        .build();
            }
        }
        return null;

    }
    public AuthenticationResponse authenticate(LoginDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
