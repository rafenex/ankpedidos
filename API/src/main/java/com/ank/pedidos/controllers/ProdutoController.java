package com.ank.pedidos.controllers;

import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    private ResponseEntity<List<Produto>> findAll(){
        return new ResponseEntity<>(produtoService.findAll(), HttpStatus.OK) ;
    }
    @PostMapping
    private ResponseEntity<Produto> save(@RequestBody Produto produto){
        return new ResponseEntity<>(produtoService.save(produto), HttpStatus.CREATED);
    }
    
    @GetMapping("/{id}")
    private ResponseEntity<Produto> findById(@PathVariable Long id){
        return new ResponseEntity<>(produtoService.findById(id),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        produtoService.delete(id);
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    private ResponseEntity<Produto> update(@PathVariable Long id, @RequestBody  Produto produto){
        return new ResponseEntity<>(produtoService.update(produto, id),HttpStatus.OK);
    }
    
}
