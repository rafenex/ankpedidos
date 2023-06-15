package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.Cliente;
import jakarta.validation.constraints.NotBlank;

public class ClienteResponse{
    String nome;
    String cpf;
    String endereco;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
}
