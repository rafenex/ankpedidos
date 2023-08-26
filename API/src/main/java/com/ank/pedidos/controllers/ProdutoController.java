package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.services.ProdutoService;
import jakarta.validation.Valid;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    private ResponseEntity<Page<ProdutoResponse>> findAll(@ParameterObject Pageable pageable){
        return new ResponseEntity<>(produtoService.findAll(pageable), HttpStatus.OK) ;
    }
    @PostMapping
    private ResponseEntity<Produto> save(@RequestBody @Valid ProdutoRequest produtoRequest){
        return new ResponseEntity<>(produtoService.save(produtoRequest), HttpStatus.CREATED);
    }
    
    @GetMapping("/{id}")
    private ResponseEntity<ProdutoResponse> findById(@PathVariable Long id){
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
