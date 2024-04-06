package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.controllers.spec.Filter;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.services.ClienteService;
import jakarta.validation.Valid;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    private ResponseEntity<Page<ClienteResponse>> findAll (
            @ParameterObject @PageableDefault(size = 5, page = 0) Pageable pageable,
            @ParameterObject Filter filter){
        return new ResponseEntity<>(clienteService.findAll(pageable,filter),HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Cliente> saveCliente(@RequestBody @Valid ClienteRequest cliente) {
        return new ResponseEntity<>(clienteService.saveCliente(cliente), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    private ResponseEntity<ClienteResponse> findById(@PathVariable Long id){
        return new ResponseEntity<>(clienteService.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    private ResponseEntity<ClienteResponse> updateCliente(@RequestBody @Valid  ClienteRequest request, @PathVariable Long id){
        return new ResponseEntity<>(clienteService.updateCliente(request, id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> deleteCliente(@PathVariable Long id){
        clienteService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
