package com.ank.pedidos.controllers.spec;


import com.ank.pedidos.controllers.dto.Filtro.FiltroProdutoDto;
import com.ank.pedidos.entities.Produto;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ProdutoSpec {
    public static Specification<Produto> toSpec(FiltroProdutoDto filtro) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (filtro.getNome() != null) {
                Path<String> camppoNome = root.get("nome");
                Predicate predicade = builder.like(camppoNome, "%" + filtro.getNome() + "%");
                predicates.add(predicade);
            }
            if (filtro.getReferencia() != null) {
                Path<String> camppoNome = root.get("referencia");
                Predicate predicade = builder.like(camppoNome, "%" + filtro.getReferencia() + "%");
                predicates.add(predicade);
            }
            if (filtro.getCategoria() != null) {
                Path<String> campoCategoria = root.get("categoria").get("nome");
                Predicate predicade = builder.like(campoCategoria, "%" + filtro.getCategoria() + "%");
                predicates.add(predicade);
            }
            if (filtro.getValor() != null) {
                Path<BigDecimal> campoValor = root.<BigDecimal>get("valorPadrao");
                Predicate predicade = builder.lessThanOrEqualTo(campoValor, filtro.getValor());
                predicates.add(predicade);
            }
            return builder.and(predicates.toArray(new Predicate[0]));

        };
    }
}


//    Join<Cliente, String> telefoneJoin = root.join("telefones");
//    Predicate predicade = builder.like(telefoneJoin, "%" + filter.getTelefone() + "%");
//                    predicates.add(predicade);