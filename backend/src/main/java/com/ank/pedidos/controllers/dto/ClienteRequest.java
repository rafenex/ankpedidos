package com.ank.pedidos.controllers.dto;

import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.entities.TipoClienteEnum;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import org.hibernate.validator.constraints.br.CNPJ;
import org.hibernate.validator.constraints.br.CPF;

import java.util.List;

public class ClienteRequest{
    @NotBlank(message = "Um nome precisa ser inserido")
    private String nome;

    @NotBlank(message = "Um cpf ou cnpj precisa ser inserido")
    private String cpfcnpj;

    @NotBlank(message = "Um endereço precisa ser inserido")
    private String endereco;

    @NotBlank(message = "Um telefone precisa ser inserido")
    private String telefone;

    private TipoClienteEnum tipo;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public String getCpfcnpj() {
        return cpfcnpj;
    }

    public void setCpfcnpj(String cpfcnpj) {
        this.cpfcnpj = cpfcnpj;
    }

    public TipoClienteEnum getTipo() {
        return tipo;
    }

    public void setTipo(TipoClienteEnum tipo) {
        this.tipo = tipo;
    }
}
