package com.ank.pedidos.controllers;

import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    private Cliente saveCliente(Cliente cliente){
        return clienteService.saveCliente(cliente);
    }
}
