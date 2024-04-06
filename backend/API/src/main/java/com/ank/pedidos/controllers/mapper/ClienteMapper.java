package com.ank.pedidos.controllers.mapper;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.entities.Cliente;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.List;

@Mapper
public interface ClienteMapper {
    ClienteMapper INSTANCE = Mappers.getMapper(ClienteMapper.class);
    ClienteResponse toResponse(Cliente cliente);
    Cliente toEntity(ClienteRequest request);

    void updateClienteFromDto(ClienteRequest clienteDto, @MappingTarget Cliente cliente);

    List<ClienteResponse> toResponse(List<Cliente> cliente);
    default Page<ClienteResponse> toResponse(Page<Cliente> clientes) {
        List<ClienteResponse> clienteResponses = toResponse(clientes.getContent());
        return new PageImpl<>(clienteResponses, clientes.getPageable(), clientes.getTotalElements());
    }
}
