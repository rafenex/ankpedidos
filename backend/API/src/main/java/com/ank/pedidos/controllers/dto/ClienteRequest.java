package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.Cliente;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.br.CNPJ;
import org.hibernate.validator.constraints.br.CPF;

import java.util.List;

public class ClienteRequest{
    @NotBlank(message = "Um nome precisa ser inserido")
    private String nome;

    @CPF(message = "Formato do CPF inválido")
    private String cpf;

    @CNPJ(message = "Formato do CNPJ inválido")
    private String cnpj;

    @NotBlank(message = "Um endereço precisa ser inserido")
    private String endereco;

    @NotBlank(message = "Um telefone precisa ser inserido")
    private String telefone;

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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}
