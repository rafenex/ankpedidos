package com.ank.pedidos.entities;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "imageData")
public class ImageData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    @ManyToOne
    @JoinColumn(name = "produto_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "FK_IMAGEM_DATA_PRODUTO"))
    private Produto produto;

    @Lob
    @Column(name = "imagedata", length = 1000)
    private byte[] imageData;

    public ImageData(String name, String type, byte[] imageData) {
        this.name = name;
        this.type = type;
        this.imageData = imageData;
    }

    public ImageData(String name, String type, Produto produto, byte[] imageData) {
        this.name = name;
        this.type = type;
        this.produto = produto;
        this.imageData = imageData;
    }

    public ImageData() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getImageData() {
        return imageData;
    }

    public void setImageData(byte[] imageData) {
        this.imageData = imageData;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }
}