package com.ank.pedidos.controllers.spec;

import com.ank.pedidos.entities.Categoria;
import com.ank.pedidos.entities.Cliente;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class CategoriaSpec {
    public static Specification<Categoria> toSpec(Long id, String nome) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (nome != null) {
                Path<String> campoNome = root.get("nome");
                Predicate predicade = builder.like(campoNome, "%" + nome + "%");
                predicates.add(predicade);
            }
            if (id != null) {
                Path<Long> campoId = root.get("id");
                Predicate predicade = builder.equal(campoId, id);
                predicates.add(predicade);
            }

            return builder.and(predicates.toArray(new Predicate[0]));

        };
    }
}
