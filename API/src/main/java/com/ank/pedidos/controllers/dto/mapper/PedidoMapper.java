package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.entities.Pedido;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface PedidoMapper {
    PedidoMapper INSTANCE = Mappers.getMapper(PedidoMapper.class);

    @Mapping(target="clienteNome", source="cliente.nome")
    @Mapping(target="clienteEndereco", source="cliente.endereco")
    PedidoResponse toResponse(Pedido pedido);

    List<PedidoResponse> toResponse(List<Pedido> pedidos);
}
