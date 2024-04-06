package com.ank.pedidos.controllers.spec;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;

public class AppSpecification<T> implements Specification<T> {

    @Autowired
    private Filter filter;


    public AppSpecification(Filter filter) {
        this.filter = filter;
    }

    @Override
    public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
        if (filter.getOperator() == (SearchOperator.GREATER_THAN)) {
            return builder.greaterThanOrEqualTo(
                    root.<String> get(filter.getField()), filter.getValue().toString());

        }
        else if (filter.getOperator() == (SearchOperator.LESS_THAN)) {
            return builder.lessThanOrEqualTo(
                    root.<String> get(filter.getField()), filter.getValue().toString());
        }
        else if (filter.getOperator() == (SearchOperator.LIKE)) {
            if (root.get(filter.getField()).getJavaType() == String.class) {
                System.out.println(filter.getValue());
                return builder.like(
                        root.<String>get(filter.getField()), "%" + filter.getValue() + "%");
            } else {
                return builder.equal(root.get(filter.getField()), filter.getValue());
            }
        }
        return null;
    }
}
