package team3.backend.Team3BackEnd.controller;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team3.backend.Team3BackEnd.model.out.AuthenticationResponse;
import team3.backend.Team3BackEnd.model.out.LoginDto;
import team3.backend.Team3BackEnd.model.out.RegisterDto;
import team3.backend.Team3BackEnd.service.AuthenticationService;

//Aquesta classe es l'encarregada de fer el registre i el login dels usuaris
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationService service;
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterDto request
    ) {
           if (service.register(request) != null){
               return new  ResponseEntity<>(service.register(request), HttpStatus.OK);
           } else {
                return new  ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
           }

    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody LoginDto request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
