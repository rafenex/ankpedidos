package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.entities.Pedido;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.List;

@Mapper
public interface ClienteMapper {
    ClienteMapper INSTANCE = Mappers.getMapper(ClienteMapper.class);
    ClienteResponse toResponse(Cliente cliente);
    Cliente toEntity(ClienteRequest request);

    List<ClienteResponse> toResponse(List<Cliente> cliente);
    default Page<ClienteResponse> toResponse(Page<Cliente> clientes) {
        List<ClienteResponse> clienteResponses = toResponse(clientes.getContent());
        return new PageImpl<>(clienteResponses, clientes.getPageable(), clientes.getTotalElements());
    }
}
