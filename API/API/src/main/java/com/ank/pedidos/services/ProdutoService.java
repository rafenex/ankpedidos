package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.ImageUploadResponse;
import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.controllers.dto.mapper.ProdutoMapper;
import com.ank.pedidos.controllers.spec.ProdutoSpec;
import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.repositories.CategoriaRepository;
import com.ank.pedidos.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {
    @Autowired
    ProdutoRepository produtoRepository;

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    ImageDataService imageDataService;

    @CacheEvict(value = "produto", allEntries = true)
    public Produto save(ProdutoRequest produtoRequest) {
        return produtoRepository.save(ProdutoMapper.INSTANCE.toEntity(produtoRequest));
    }

    @Cacheable(value = "produto")
    public Page<ProdutoResponse> findAll(
            String nome,
            BigDecimal valor,
            String categoria,
            Pageable pageable
    ) {
        Page<Produto> entityPage = produtoRepository.findAll(ProdutoSpec.toSpec(nome, valor , categoria), pageable);

        List<ProdutoResponse> dtoList = entityPage
                .stream()
                .map(ProdutoMapper.INSTANCE::toResponse)
                .collect(Collectors.toList());

        return new PageImpl<>(dtoList, pageable, entityPage.getTotalElements());
    }

    @CacheEvict(value = "produto", allEntries = true)
    public void delete(Long id) {
        produtoRepository.deleteById(id);
    }

    @CacheEvict(value = "produto", allEntries = true)
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

    @CacheEvict(value = "produto", allEntries = true)
    public ImageUploadResponse setProdutoImage(MultipartFile imagem, Long idProduto) throws IOException {
        Produto produto = produtoRepository.findById(idProduto).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        return imageDataService.uploadImage(imagem, produto);

    }
}
