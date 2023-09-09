package com.ank.pedidos.repositories;

import com.ank.pedidos.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ProdutoRepository extends JpaRepository <Produto, Long> , JpaSpecificationExecutor<Produto> {
}
