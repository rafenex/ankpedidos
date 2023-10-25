package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ImageDataResponse;
import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.entities.ImageData;
import com.ank.pedidos.entities.Produto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import java.util.List;
import java.util.stream.Collectors;

@Mapper
public interface ProdutoMapper {
    ProdutoMapper INSTANCE = Mappers.getMapper(ProdutoMapper.class);

    @Mapping(target = "categoria", source = "categoria.nome")
    @Mapping(target = "imagens", expression = "java(mapImageDataList(produto.getImagens()))")
    ProdutoResponse toResponse(Produto produto);

    default List<ImageDataResponse> mapImageDataList(List<ImageData> imageDataList) {
        return imageDataList.stream()
                .map(this::mapImageDataToResponse)
                .collect(Collectors.toList());
    }

    @Mapping(target="categoria.id", source="categoria")
    Produto toEntity(ProdutoRequest request);


    ImageDataResponse mapImageDataToResponse(ImageData imageData);

    List<ProdutoResponse> toResponse(List<Produto> produtos);
}
