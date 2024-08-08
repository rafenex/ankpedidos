package com.ank.pedidos.controllers.dto;

import java.io.Serializable;

public class ImageUploadResponse implements Serializable {
    String message;

    public ImageUploadResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
