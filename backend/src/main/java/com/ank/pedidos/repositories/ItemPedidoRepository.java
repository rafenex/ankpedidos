package com.ank.pedidos.repositories;

import com.ank.pedidos.entities.ItemPedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemPedidoRepository extends JpaRepository <ItemPedido, Long> {
}
