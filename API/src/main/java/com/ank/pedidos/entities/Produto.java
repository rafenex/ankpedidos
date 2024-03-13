package com.ank.pedidos.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

@Entity
public class Produto implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private BigDecimal valorPadrao;
    @ManyToOne
    @JoinColumn(name = "categoria_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "FK_PRODUTO_CATEGORIA"))
    private Categoria categoria;
    @JsonIgnore
    @OneToMany(mappedBy = "produto", cascade = CascadeType.ALL)
    private List<ImageData> imagens;

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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<ImageData> getImagens() {
        return imagens;
    }

    public void setImagens(List<ImageData> imagens) {
        this.imagens = imagens;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Produto produto = (Produto) o;
        return Objects.equals(id, produto.id) && Objects.equals(nome, produto.nome) && Objects.equals(valorPadrao, produto.valorPadrao) && Objects.equals(categoria, produto.categoria) && Objects.equals(imagens, produto.imagens);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, valorPadrao, categoria, imagens);
    }

    @Override
    public String toString() {
        return "Produto{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", valorPadrao=" + valorPadrao +
                ", categoria=" + categoria +
                ", imagens=" + imagens +
                '}';
    }
}
