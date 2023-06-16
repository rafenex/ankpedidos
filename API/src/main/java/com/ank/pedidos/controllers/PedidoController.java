package com.ank.pedidos.controllers;

import com.ank.pedidos.entities.Pedido;
import com.ank.pedidos.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("pedidos")
public class PedidoController {
    @Autowired
    PedidoService pedidoService;

    @GetMapping
    private ResponseEntity<List<Pedido>> findAll(){
        return new ResponseEntity<>(pedidoService.findAll(), HttpStatus.OK);

    }

}
