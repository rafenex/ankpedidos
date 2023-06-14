package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.ClienteRequest;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public List<Cliente> findAll(){
        return clienteRepository.findAll();
    }

    public Cliente saveCliente(ClienteRequest clienteRequest){
        return clienteRepository.save(clienteRequest.toEntity());
    }
}
