package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.ItemPedido;

import java.util.List;

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
}
