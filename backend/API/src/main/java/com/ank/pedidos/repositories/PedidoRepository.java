package com.ank.pedidos.repositories;

import com.ank.pedidos.entities.Pedido;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PedidoRepository extends JpaRepository <Pedido, Long> {

    @Query("SELECT p FROM Pedido p WHERE (:nomeCliente IS NULL OR LOWER(p.cliente.nome) LIKE LOWER(CONCAT('%', :nomeCliente, '%')))")
    Page<Pedido> findByNomeClienteContainingIgnoreCase(@Param("nomeCliente") String nomeCliente, Pageable pageable);
}
