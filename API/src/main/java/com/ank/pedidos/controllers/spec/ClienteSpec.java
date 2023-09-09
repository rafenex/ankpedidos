package com.ank.pedidos.controllers.spec;

import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.entities.Produto;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ClienteSpec{
    public static Specification<Cliente> toSpec(String nome, String cpf, String endereco, String telefone) {
        return (root, query, builder) -> {
            List<Predicate> predicates = new ArrayList<>();
            if (nome != null) {
                Path<String> camppoNome = root.get("nome");
                Predicate predicade = builder.like(camppoNome, "%" + nome + "%");
                predicates.add(predicade);
            }
            if (cpf != null) {
                Path<String> campoCpf = root.get("cpf");
                Predicate predicade = builder.like(campoCpf, "%" + cpf + "%");
                predicates.add(predicade);
            }
            if (endereco != null) {
                Path<String> campoEndereco = root.get("endereco");
                Predicate predicade = builder.like(campoEndereco, "%" + endereco + "%");
                predicates.add(predicade);
            }
            if (telefone != null) {
                if (telefone != null) {
                    Join<Cliente, String> telefoneJoin = root.join("telefones");
                    Predicate predicade = builder.like(telefoneJoin, "%" + telefone + "%");
                    predicates.add(predicade);
                }
            }
            return builder.and(predicates.toArray(new Predicate[0]));

        };
    }
}
