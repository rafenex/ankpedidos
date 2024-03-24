package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ImageDataResponse;
import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.entities.ImageData;
import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.util.ImageUtil;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import java.util.Base64;
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
                .map(imageData -> {
                    ImageDataResponse response = mapImageDataToResponse(imageData);
                    byte[] imageBytes = ImageUtil.decompressImage(imageData.getImageData());
                    String base64Image = Base64.getEncoder().encodeToString(imageBytes);
                    response.setImageData(base64Image);
                    return response;
                })
                .collect(Collectors.toList());
    }

    @Mapping(target="categoria.id", source="categoria")
    Produto toEntity(ProdutoRequest request);

    @Mapping(target = "imageData", ignore = true)
    ImageDataResponse mapImageDataToResponse(ImageData imageData);

    List<ProdutoResponse> toResponse(List<Produto> produtos);


}
