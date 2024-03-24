package com.ank.pedidos.repositories;

import com.ank.pedidos.entities.ImageData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ImageDataRepository extends JpaRepository<ImageData, Long> {
    Optional<ImageData> findByName(String name);

    List<ImageData> findByProdutoId(Long idProduto);
}
