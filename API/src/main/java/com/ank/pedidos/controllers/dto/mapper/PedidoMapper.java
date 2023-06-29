package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.entities.Pedido;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.List;
import java.util.stream.Collectors;

@Mapper
public interface PedidoMapper {
    PedidoMapper INSTANCE = Mappers.getMapper(PedidoMapper.class);

    @Mapping(target="clienteNome", source="cliente.nome")
    @Mapping(target="clienteEndereco", source="cliente.endereco")
    PedidoResponse toResponse(Pedido pedido);

    List<PedidoResponse> toResponse(List<Pedido> pedidos);


    default Page<PedidoResponse> toResponse(Page<Pedido> pedidos) {
        List<PedidoResponse> pedidoResponses = toResponse(pedidos.getContent());
        return new PageImpl<>(pedidoResponses, pedidos.getPageable(), pedidos.getTotalElements());
    }

}
