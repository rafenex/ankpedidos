package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.PedidoRequest;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.entities.Pedido;
import com.ank.pedidos.services.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("pedidos")
public class PedidoController {
    @Autowired
    PedidoService pedidoService;

    @GetMapping
    private ResponseEntity<Page<PedidoResponse>> findAll(@RequestParam(defaultValue = "0") int page,
                                                         @RequestParam(defaultValue = "5") int size,
                                                         @RequestParam (required = false) String nomeCliente) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("data").descending());
        return new ResponseEntity<>(pedidoService.listarPedidos(nomeCliente, pageable), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<PedidoResponse> findById(@PathVariable Long id) {
        return new ResponseEntity<>(pedidoService.findById(id), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Pedido> save(@RequestBody PedidoRequest pedidoRequest){
        return new ResponseEntity<>(pedidoService.save(pedidoRequest), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> delete(@PathVariable Long id){
        pedidoService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
