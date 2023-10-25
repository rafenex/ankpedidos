package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.entities.Cliente;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-24T08:42:56-0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
public class ClienteMapperImpl implements ClienteMapper {

    @Override
    public ClienteResponse toResponse(Cliente cliente) {
        if ( cliente == null ) {
            return null;
        }

        ClienteResponse clienteResponse = new ClienteResponse();

        clienteResponse.setId( cliente.getId() );
        clienteResponse.setNome( cliente.getNome() );
        clienteResponse.setCpf( cliente.getCpf() );
        clienteResponse.setEndereco( cliente.getEndereco() );
        List<String> list = cliente.getTelefones();
        if ( list != null ) {
            clienteResponse.setTelefones( new ArrayList<String>( list ) );
        }

        return clienteResponse;
    }

    @Override
    public Cliente toEntity(ClienteRequest request) {
        if ( request == null ) {
            return null;
        }

        Cliente cliente = new Cliente();

        cliente.setNome( request.getNome() );
        cliente.setCpf( request.getCpf() );
        cliente.setEndereco( request.getEndereco() );
        List<String> list = request.getTelefones();
        if ( list != null ) {
            cliente.setTelefones( new ArrayList<String>( list ) );
        }

        return cliente;
    }

    @Override
    public List<ClienteResponse> toResponse(List<Cliente> cliente) {
        if ( cliente == null ) {
            return null;
        }

        List<ClienteResponse> list = new ArrayList<ClienteResponse>( cliente.size() );
        for ( Cliente cliente1 : cliente ) {
            list.add( toResponse( cliente1 ) );
        }

        return list;
    }
}
