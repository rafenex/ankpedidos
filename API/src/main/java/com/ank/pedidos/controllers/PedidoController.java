package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.PedidoRequest;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.entities.Pedido;
import com.ank.pedidos.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("pedidos")
public class PedidoController {
    @Autowired
    PedidoService pedidoService;

    @GetMapping
    private ResponseEntity<List<PedidoResponse>> findAll(){
        return new ResponseEntity<>(pedidoService.listarPedidos(), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Pedido> save(@RequestBody PedidoRequest pedidoRequest){
        return new ResponseEntity<>(pedidoService.save(pedidoRequest), HttpStatus.CREATED);
    }

    @DeleteMapping
    private void delete(){
        pedidoService.delete();
    }

}
