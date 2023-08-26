package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.entities.Produto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import java.util.List;

@Mapper
public interface ProdutoMapper {
    ProdutoMapper INSTANCE = Mappers.getMapper(ProdutoMapper.class);

    @Mapping(target="categoria", source="categoria.nome")
    ProdutoResponse toResponse(Produto produto);

    @Mapping(target="categoria.id", source="categoria")
    Produto toEntity(ProdutoRequest request);

    List<ProdutoResponse> toResponse(List<Produto> produtos);
}
