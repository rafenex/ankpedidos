package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.ImageData;
import jakarta.validation.constraints.NotBlank;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

public class ProdutoResponse implements Serializable {
    private Long id;
    private String nome;
    private String referencia;
    private BigDecimal valorPadrao;
    private String categoria;
    private List<ImageDataResponse> imagens;

    public ProdutoResponse(Long id, String nome, String referencia, BigDecimal valorPadrao, String categoria, List<ImageDataResponse> imagens) {
        this.id = id;
        this.nome = nome;
        this.referencia = referencia;
        this.valorPadrao = valorPadrao;
        this.categoria = categoria;
        this.imagens = imagens;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public BigDecimal getValorPadrao() {
        return valorPadrao;
    }

    public void setValorPadrao(BigDecimal valorPadrao) {
        this.valorPadrao = valorPadrao;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public List<ImageDataResponse> getImagens() {
        return imagens;
    }

    public void setImagens(List<ImageDataResponse> imagens) {
        this.imagens = imagens;
    }

}
