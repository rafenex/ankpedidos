package com.ank.pedidos.controllers;

import com.ank.pedidos.controllers.dto.ImageUploadResponse;
import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.services.ImageDataService;
import com.ank.pedidos.services.ProdutoService;
import jakarta.validation.Valid;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private ImageDataService imageDataService;

    @GetMapping
    private ResponseEntity<Page<ProdutoResponse>> findAll(
            Pageable pageable,
            @RequestParam (required = false) String nome,
            @RequestParam (required = false) String referencia,
            @RequestParam (required = false) BigDecimal valor,
            @RequestParam (required = false) String categoria
            ){
        return new ResponseEntity<>(produtoService.findAll(nome, referencia, valor, categoria, pageable), HttpStatus.OK) ;
    }
    @PostMapping
    private ResponseEntity<Produto> save(@RequestBody @Valid ProdutoRequest produtoRequest){
        return new ResponseEntity<>(produtoService.save(produtoRequest), HttpStatus.CREATED);
    }

    @PostMapping(value = "/{idProduto}/imagem", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    private ImageUploadResponse newImage(@RequestParam("imagem")  MultipartFile imagem,
                                         @PathVariable Long idProduto) throws IOException {
        return produtoService.setProdutoImage(imagem, idProduto);
    }


    @GetMapping("/{id}")
    private ResponseEntity<ProdutoResponse> findById(@PathVariable Long id){
        return new ResponseEntity<>(produtoService.findById(id),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        produtoService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{idProduto}/{idImage}")
    private ResponseEntity<Void> deleteImgFromProduto(@PathVariable Long idProduto, @PathVariable Long idImage) {
        produtoService.deleteImgFromProduto(idProduto, idImage);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    private ResponseEntity<Produto> update(@PathVariable Long id, @RequestBody  ProdutoRequest produto){
        return new ResponseEntity<>(produtoService.update(produto, id),HttpStatus.OK);
    }

    
}
