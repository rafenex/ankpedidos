package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.ClienteResponse;
import com.ank.pedidos.controllers.dto.PedidoRequest;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.controllers.dto.mapper.PedidoMapper;
import com.ank.pedidos.entities.ItemPedido;
import com.ank.pedidos.entities.Pedido;
import com.ank.pedidos.repositories.ClienteRepository;
import com.ank.pedidos.repositories.ItemPedidoRepository;
import com.ank.pedidos.repositories.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
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


    public List<Pedido> findAll(){
        return pedidoRepository.findAll(Sort.by(Sort.Direction.DESC, "data"));
    }

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

    public List<PedidoResponse> listarPedidos(){
        return PedidoMapper.INSTANCE.toResponse(findAll());
    }

    public void delete() {
        pedidoRepository.deleteAll();
    }
}
