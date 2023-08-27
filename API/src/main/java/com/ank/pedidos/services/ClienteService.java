package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.controllers.dto.mapper.ClienteMapper;
import com.ank.pedidos.controllers.spec.ClienteSpec;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public List<ClienteResponse> findAll(String nome, String cpf, String endereco, String telefone){
        return ClienteMapper.INSTANCE.toResponse(clienteRepository.findAll(ClienteSpec.toSpec(nome, cpf, endereco, telefone)));
    }

    public Cliente saveCliente(ClienteRequest clienteRequest){
        return clienteRepository.save(ClienteMapper.INSTANCE.toEntity(clienteRequest));
    }

    public ClienteResponse findById(Long id) {
        return ClienteMapper.INSTANCE.toResponse(clienteRepository.findById(id).orElseThrow());
    }

    public ClienteResponse updateCliente(ClienteRequest request, Long id) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow();
        cliente.setCpf(request.getCpf());
        cliente.setEndereco(request.getEndereco());
        cliente.setNome(request.getNome());
        return ClienteMapper.INSTANCE.toResponse(clienteRepository.save(cliente));
    }

    public void delete(Long id) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow();
        clienteRepository.delete(cliente);
    }
}
