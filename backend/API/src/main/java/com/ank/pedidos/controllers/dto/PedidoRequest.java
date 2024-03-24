package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.ItemPedido;

import java.util.List;
import java.util.Objects;

public class PedidoRequest {
    private Long clienteId;
    private List<ItemPedido>itemPedido;

    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    public List<ItemPedido> getItemPedido() {
        return itemPedido;
    }

    public void setItemPedido(List<ItemPedido> itemPedido) {
        this.itemPedido = itemPedido;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PedidoRequest that = (PedidoRequest) o;
        return Objects.equals(clienteId, that.clienteId) && Objects.equals(itemPedido, that.itemPedido);
    }

    @Override
    public int hashCode() {
        return Objects.hash(clienteId, itemPedido);
    }

    @Override
    public String toString() {
        return "PedidoRequest{" +
                "clienteId=" + clienteId +
                ", itemPedido=" + itemPedido +
                '}';
    }
}
