package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.Cliente;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record ClienteRequest(
        @NotBlank(message = "Um nome precisa ser inserido")
        String nome,
        @NotBlank(message = "Um cpf precisa ser inserido")
        String cpf,
        @NotBlank(message = "Um endereço precisa ser inserido")
        String endereco) {

    public Cliente toEntity(){
        return new Cliente(this.nome, this.cpf, this.endereco);
    }

}
