package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.PedidoRequest;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.controllers.dto.mapper.PedidoMapper;
import com.ank.pedidos.entities.ItemPedido;
import com.ank.pedidos.entities.Pedido;
import com.ank.pedidos.repositories.ClienteRepository;
import com.ank.pedidos.repositories.ItemPedidoRepository;
import com.ank.pedidos.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PedidoService {
    @Autowired
    PedidoRepository pedidoRepository;

    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    ItemPedidoRepository itemPedidoRepository;


    @Transactional
    public Pedido save(PedidoRequest pedidoRequest) {
        Pedido pedido = new Pedido();
        List<ItemPedido> itemPedidos = itemPedidoRepository.saveAll(pedidoRequest.getItemPedido());

        pedido.setCliente(clienteRepository.findById(pedidoRequest.getClienteId()).orElseThrow());
        itemPedidos.forEach(i -> i.setTotal());
        pedido.setItemPedido(itemPedidos);
        pedido.setTotal();
        return pedidoRepository.save(pedido);
    }

    public Page<PedidoResponse> listarPedidos(String nomeCliente, Pageable pageable){
        return PedidoMapper.INSTANCE.toResponse(pedidoRepository.findByNomeClienteContainingIgnoreCase(nomeCliente, pageable));
    }

    public void delete(Long id) {
        pedidoRepository.deleteById(id);
    }

}
