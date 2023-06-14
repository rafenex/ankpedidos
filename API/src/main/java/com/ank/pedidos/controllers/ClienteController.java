package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.services.ClienteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("clientes")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping
    private List<Cliente> findAll (){
        return clienteService.findAll();
    }

    @PostMapping
    private ResponseEntity<Void> saveCliente(@RequestBody @Valid ClienteRequest cliente, UriComponentsBuilder uriBuilder) {
        URI location = uriBuilder.path("/clientes/{id}").buildAndExpand(clienteService.saveCliente(cliente).getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{id}")
    private Cliente findById(@PathVariable Long id){
        return clienteService.findById(id);
    }
}
