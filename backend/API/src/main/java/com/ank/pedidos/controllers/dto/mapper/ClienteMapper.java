package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.entities.Cliente;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface ClienteMapper {
    ClienteMapper INSTANCE = Mappers.getMapper(ClienteMapper.class);
    ClienteResponse toResponse(Cliente cliente);
    Cliente toEntity(ClienteRequest request);

    List<ClienteResponse> toResponse(List<Cliente> cliente);
}
