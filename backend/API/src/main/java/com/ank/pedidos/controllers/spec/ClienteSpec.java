package com.ank.pedidos.controllers.spec;

import com.ank.pedidos.controllers.dto.FiltroClienteDto;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.entities.Produto;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ClienteSpec{
    public static Specification<Cliente> toSpec(FiltroClienteDto filter) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (filter.getNome() != null) {
                Path<String> camppoNome = root.get("nome");
                Predicate predicade = builder.like(camppoNome, "%" + filter.getNome() + "%");
                predicates.add(predicade);
            }
            if (filter.getCpfcnpj() != null) {
                Path<String> campoCpf = root.get("cpfcnpj");
                Predicate predicade = builder.like(campoCpf, "%" + filter.getCpfcnpj() + "%");
                predicates.add(predicade);
            }
            if (filter.getEndereco() != null) {
                Path<String> campoEndereco = root.get("endereco");
                Predicate predicade = builder.like(campoEndereco, "%" + filter.getEndereco() + "%");
                predicates.add(predicade);
            }
            if (filter.getTelefone() != null) {
                Path<String> campoTelefone = root.get("telefone");
                Predicate predicade = builder.like(campoTelefone, "%" + filter.getTelefone() + "%");
                predicates.add(predicade);
            }
            if (filter.getTipo() != null) {
                Path<Enum> campoTipo = root.get("tipo");
                Predicate predicade = builder.equal(campoTipo, filter.getTipo());
                predicates.add(predicade);
            }

            return builder.and(predicates.toArray(new Predicate[0]));

        };
    }
}
