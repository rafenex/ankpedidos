package com.ank.pedidos.services;

import com.ank.pedidos.configuration.JwtService;
import com.ank.pedidos.controllers.dto.AuthenticationRequest;
import com.ank.pedidos.controllers.dto.AuthenticationResponse;
import com.ank.pedidos.controllers.dto.RegisterRequest;
import com.ank.pedidos.controllers.dto.UserResponse;
import com.ank.pedidos.controllers.mapper.UserMapper;
import com.ank.pedidos.entities.Role;
import com.ank.pedidos.entities.User;
import com.ank.pedidos.exception.exceptions.EmailJaCadastradoException;
import com.ank.pedidos.producers.UserProducer;
import com.ank.pedidos.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    UserProducer userProducer;

    public UserResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new EmailJaCadastradoException("E-mail já está em uso");
        }
        User user = new User();
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        UserResponse response = UserMapper.INSTANCE.toResponse(userRepository.save(user));
        userProducer.publishMessageEmail(response);
        return  response;

    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        AuthenticationResponse response = new AuthenticationResponse();
        response.setToken(jwtToken);
        return response;
    }
}
