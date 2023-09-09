package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.ItemPedido;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.br.CPF;

import java.math.BigDecimal;
import java.util.List;

public class ProdutoRequest {
    @NotBlank(message = "Um nome precisa ser inserido")
    private String nome;
    @NotBlank(message = "Um valor precisa ser inserido")
    private BigDecimal valorPadrao;
    @NotBlank(message = "Uma categoria precisa ser inserida")
    private Long categoria;

    public ProdutoRequest(String nome, BigDecimal valorPadrao, Long categoria) {
        this.nome = nome;
        this.valorPadrao = valorPadrao;
        this.categoria = categoria;
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

    public Long getCategoria() {
        return categoria;
    }

    public void setCategoria(Long categoria) {
        this.categoria = categoria;
    }
}
