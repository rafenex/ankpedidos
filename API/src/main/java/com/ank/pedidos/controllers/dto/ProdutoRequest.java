package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.ItemPedido;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.br.CPF;

import java.math.BigDecimal;
import java.util.List;

public class ProdutoRequest {

    @NotBlank(message = "Um nome precisa ser inserido")
    private String nome;

    @NotNull(message = "Um valor precisa ser inserido")
    private BigDecimal valorPadrao;

    @NotNull(message = "Uma categoria precisa ser inserida")
    private Long categoria;

    @NotNull(message = "Uma categoria precisa ser inserida")
    private String referencia;

    public ProdutoRequest() {
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

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    @Override
    public String toString() {
        return "ProdutoRequest{" +
                "nome='" + nome + '\'' +
                ", valorPadrao=" + valorPadrao +
                ", categoria=" + categoria +
                '}';
    }
}
