package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.FiltroPedidoDto;
import com.ank.pedidos.controllers.dto.PedidoRequest;
import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.controllers.mapper.PedidoMapper;
import com.ank.pedidos.controllers.spec.PedidoSpec;
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

    public Page<PedidoResponse> listarPedidos(FiltroPedidoDto filtro, Pageable pageable){
        return PedidoMapper.INSTANCE.toResponse(pedidoRepository.findAll(PedidoSpec.toSpec(filtro), pageable));
    }

    public void delete(Long id) {
        pedidoRepository.deleteById(id);
    }

    public PedidoResponse findById(Long id) {
        Pedido pedido = pedidoRepository.findById(id).orElseThrow();
        return PedidoMapper.INSTANCE.toResponse(pedido);
    }
}
