package com.ank.pedidos.controllers;

import com.ank.pedidos.entities.Categoria;
import com.ank.pedidos.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    CategoriaService categoriaService;

    @PostMapping
    private ResponseEntity<Categoria> save(@RequestBody Categoria categoria){
        return new ResponseEntity<>(categoriaService.save(categoria), HttpStatus.CREATED) ;
    }

    @GetMapping
    private ResponseEntity<List<Categoria>> findAll(){
        return new ResponseEntity<>(categoriaService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Categoria> findById(@PathVariable Long id){
        return new ResponseEntity<>(categoriaService.findById(id),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        categoriaService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    private ResponseEntity<Categoria> update(@PathVariable Long id, @RequestBody  Categoria categoria){
        return new ResponseEntity<>(categoriaService.update(categoria, id),HttpStatus.OK);
    }
}
