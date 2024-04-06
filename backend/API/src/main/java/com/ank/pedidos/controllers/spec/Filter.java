package com.ank.pedidos.controllers.spec;

import java.util.List;

public class Filter {
    private String field;
    private SearchOperator operator;
    private Object  value;


    public Filter(String field, SearchOperator operator, Object  value) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public SearchOperator getOperator() {
        return operator;
    }

    public void setOperator(SearchOperator operator) {
        this.operator = operator;
    }

    public Object  getValue() {
        return value;
    }

    public void setValue(Object  value) {
        this.value = value;
    }

}
