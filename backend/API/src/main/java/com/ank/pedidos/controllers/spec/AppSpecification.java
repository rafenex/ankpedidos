package com.ank.pedidos.controllers.spec;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;

public class AppSpecification<T> implements Specification<T> {

    @Autowired
    private Filter criteria;

    @Override
    public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        if (criteria.getOperator() == (SearchOperator.GREATER_THAN)) {
            return builder.greaterThanOrEqualTo(
                    root.<String> get(criteria.getField()), criteria.getValue().toString());

        }
        else if (criteria.getOperator() == (SearchOperator.LESS_THAN)) {
            return builder.lessThanOrEqualTo(
                    root.<String> get(criteria.getField()), criteria.getValue().toString());
        }
        else if (criteria.getOperator() == (SearchOperator.LIKE)) {
            if (root.get(criteria.getField()).getJavaType() == String.class) {
                return builder.like(
                        root.<String>get(criteria.getField()), "%" + criteria.getValue() + "%");
            } else {
                return builder.equal(root.get(criteria.getField()), criteria.getValue());
            }
        }
        return null;
    }
}
