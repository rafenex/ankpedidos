package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.controllers.mapper.ClienteMapper;
import com.ank.pedidos.controllers.spec.ClienteSpec;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;


@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public Page<ClienteResponse> findAll(Pageable pageable, String nome, String cpf, String endereco, String telefone){
        Specification<Cliente> spec = ClienteSpec.toSpec(nome, cpf, endereco, telefone);
        return ClienteMapper.INSTANCE.toResponse(clienteRepository.findAll(spec,pageable));
    }

    public Cliente saveCliente(ClienteRequest clienteRequest){
        return clienteRepository.save(ClienteMapper.INSTANCE.toEntity(clienteRequest));
    }

    public ClienteResponse findById(Long id) {
        return ClienteMapper.INSTANCE.toResponse(clienteRepository.findById(id).orElseThrow());
    }

    public ClienteResponse updateCliente(ClienteRequest request, Long id) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow();
        ClienteMapper.INSTANCE.updateClienteFromDto(request, cliente);

        return ClienteMapper.INSTANCE.toResponse(clienteRepository.save(cliente));
    }

    public void delete(Long id) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow();
        clienteRepository.delete(cliente);
    }
}
