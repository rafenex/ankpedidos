package com.ank.pedidos.controllers.spec;

import com.ank.pedidos.controllers.dto.FiltroPedidoDto;
import com.ank.pedidos.entities.Pedido;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


public class PedidoSpec {
    public static Specification<Pedido> toSpec(FiltroPedidoDto filtro) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (filtro.getCliente() != null) {
                Path<String> campoNome = root.get("cliente").get("nome");
                Predicate predicade = builder.like(campoNome, "%" + filtro.getCliente() + "%");
                predicates.add(predicade);
            }
            if (filtro.getDataInicial() != null) {
                Path<LocalDate> campoData = root.get("data");
                Predicate predicade = builder.greaterThanOrEqualTo(campoData, filtro.getDataInicial());
                predicates.add(predicade);
            }
            if (filtro.getDataFinal() != null) {
                Path<LocalDate> campoData = root.get("data");
                Predicate predicade = builder.lessThanOrEqualTo(campoData, filtro.getDataFinal());
                predicates.add(predicade);
            }
            return builder.and(predicates.toArray(new Predicate[0]));

        };
    }
}
