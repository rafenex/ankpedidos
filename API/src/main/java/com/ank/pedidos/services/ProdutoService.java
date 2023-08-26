package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.controllers.dto.mapper.ProdutoMapper;
import com.ank.pedidos.controllers.spec.Filter;
import com.ank.pedidos.controllers.spec.ProdutoSpec;
import com.ank.pedidos.controllers.spec.QueryOperator;
import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.repositories.CategoriaRepository;
import com.ank.pedidos.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {
    @Autowired
    ProdutoRepository produtoRepository;

    @Autowired
    CategoriaRepository categoriaRepository;

    public Produto save(ProdutoRequest produtoRequest) {
        return produtoRepository.save(ProdutoMapper.INSTANCE.toEntity(produtoRequest));
    }

    public Page<ProdutoResponse> findAll(
            String nome,
            BigDecimal valor,
            String categoria,
            Pageable pageable
    ) {
        List<Filter> filters = new ArrayList<>();
        Filter categorias = new Filter();
        categorias.setField("categoria.nome");
        categorias.setOperator(QueryOperator.LIKE);
        System.out.println(nome);
        categorias.setValue(nome);
        filters.add(categorias);
        Page<Produto> entityPage = produtoRepository.findAll(ProdutoSpec.getSpecificationFromFilters(filters), pageable);
        List<ProdutoResponse> dtoList = entityPage
                .stream()
                .map(ProdutoMapper.INSTANCE::toResponse)
                .collect(Collectors.toList());

        return new PageImpl<>(dtoList, pageable, entityPage.getTotalElements());
    }

    public void delete(Long id) {
        produtoRepository.deleteById(id);
    }

    public Produto update(Produto produto, Long id) {
        Produto produtoToUpdate = produtoRepository.findById(id).orElseThrow();
        produtoToUpdate.setNome(produto.getNome());
        produtoToUpdate.setCategoria(categoriaRepository.findById(produto.getCategoria().getId()).orElseThrow());
        produtoToUpdate.setValorPadrao(produto.getValorPadrao());
        return produtoRepository.save(produtoToUpdate);
    }

    public ProdutoResponse findById(Long id) {
        return ProdutoMapper.INSTANCE.toResponse(produtoRepository.findById(id).orElseThrow());
    }
}
