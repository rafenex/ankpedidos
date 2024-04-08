package com.ank.pedidos.controllers.spec;

import com.ank.pedidos.controllers.dto.Filtro.FiltroCategoriaDto;
import com.ank.pedidos.entities.Categoria;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class CategoriaSpec {
    public static Specification<Categoria> toSpec(FiltroCategoriaDto filtro) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (filtro.getNome() != null) {
                Path<String> campoNome = root.get("nome");
                Predicate predicade = builder.like(campoNome, "%" + filtro.getNome() + "%");
                predicates.add(predicade);
            }
            if (filtro.getId() != null) {
                Path<Long> campoId = root.get("id");
                Predicate predicade = builder.equal(campoId, filtro.getId());
                predicates.add(predicade);
            }

            return builder.and(predicates.toArray(new Predicate[0]));

        };
    }
}
