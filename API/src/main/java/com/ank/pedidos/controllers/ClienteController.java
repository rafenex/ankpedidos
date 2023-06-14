package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.services.ClienteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    private Cliente saveCliente(@RequestBody @Valid ClienteRequest cliente){
        return clienteService.saveCliente(cliente);
    }
}
