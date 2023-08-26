package com.ank.pedidos.controllers.dto;

import jakarta.validation.constraints.NotBlank;

import java.math.BigDecimal;

public class ProdutoResponse {
    private Long id;
    private String nome;
    private BigDecimal valorPadrao;
    private String categoria;

    public ProdutoResponse(Long id, String nome, BigDecimal valorPadrao, String categoria) {
        this.id = id;
        this.nome = nome;
        this.valorPadrao = valorPadrao;
        this.categoria = categoria;
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
}
