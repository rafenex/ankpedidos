package com.ank.pedidos.controllers.spec;


import com.ank.pedidos.entities.Produto;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ProdutoSpec {
    public static Specification<Produto> toSpec(String nome, String referencia, BigDecimal valor, String categoria) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (nome != null) {
                Path<String> camppoNome = root.get("nome");
                Predicate predicade = builder.like(camppoNome, "%" + nome + "%");
                predicates.add(predicade);
            }
            if (referencia != null) {
                Path<String> camppoNome = root.get("referencia");
                Predicate predicade = builder.like(camppoNome, "%" + referencia + "%");
                predicates.add(predicade);
            }
            if (categoria != null) {
                Path<String> campoCategoria = root.get("categoria").get("nome");
                Predicate predicade = builder.like(campoCategoria, "%" + categoria + "%");
                predicates.add(predicade);
            }
            if (valor != null) {
                Path<BigDecimal> campoValor = root.<BigDecimal>get("valorPadrao");
                Predicate predicade = builder.lessThanOrEqualTo(campoValor, valor);
                predicates.add(predicade);
            }
            return builder.and(predicates.toArray(new Predicate[0]));

        };
    }
}