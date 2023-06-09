package com.ank.pedidos.entities;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime data;
    @ManyToOne
    private Cliente cliente;
    @OneToMany
    private List<ItemPedido> itemPedido;

    private BigDecimal total;

    public Pedido() {
        this.data = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<ItemPedido> getItemPedido() {
        return itemPedido;
    }

    public void setItemPedido(List<ItemPedido> itemPedido) {
        this.itemPedido = itemPedido;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal() {
        BigDecimal somaTotal = itemPedido.stream()
                .map(ItemPedido::getTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        this.total =somaTotal;

    }
}
