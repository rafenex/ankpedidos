package com.ank.pedidos.services;

import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.repositories.CategoriaRepository;
import com.ank.pedidos.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    ProdutoRepository produtoRepository;

    @Autowired
    CategoriaRepository categoriaRepository;
        

    public Produto save(Produto produto){
        return produtoRepository.save(produto);
    }

    public List<Produto> findAll(){
        return produtoRepository.findAll();
    }

    public void delete(Long id){
        produtoRepository.deleteById(id);
    }

    public Produto update(Produto produto, Long id){
        Produto produtoToUpdate = produtoRepository.findById(id).orElseThrow();
        produtoToUpdate.setNome(produto.getNome());
        produtoToUpdate.setCategoria(categoriaRepository.findById(produto.getCategoria().getId()).orElseThrow());
        produtoToUpdate.setValorPadrao(produto.getValorPadrao());
        return produtoRepository.save(produtoToUpdate);
    }

    public Produto findById(Long id) {
        return produtoRepository.findById(id).orElseThrow();
    }
}
