package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
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
    private ResponseEntity<List<ClienteResponse>> findAll (){
        return ResponseEntity.ok(clienteService.findAll());
    }

    @PostMapping
    private ResponseEntity<Cliente> saveCliente(@RequestBody @Valid ClienteRequest cliente) {
        return ResponseEntity.created(null).body(clienteService.saveCliente(cliente));
    }

    @GetMapping("/{id}")
    private ResponseEntity<ClienteResponse> findById(@PathVariable Long id){
        return ResponseEntity.ok(clienteService.findById(id));
    }

    @PutMapping("/{id}")
    private ResponseEntity<ClienteResponse> updateCliente(@RequestBody @Valid  ClienteRequest request, @PathVariable Long id){
        return ResponseEntity.ok(clienteService.updateCliente(request, id));
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> deleteCliente(@PathVariable Long id){
        clienteService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
