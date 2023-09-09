package com.ank.pedidos.services;

import com.ank.pedidos.controllers.dto.ImageUploadResponse;
import com.ank.pedidos.entities.ImageData;

import com.ank.pedidos.entities.Produto;
import com.ank.pedidos.repositories.ImageDataRepository;
import com.ank.pedidos.util.ImageUtil;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ImageDataService {

    @Autowired
    private ImageDataRepository imageDataRepository;

    public ImageUploadResponse uploadImage(MultipartFile file, Produto produto) throws IOException {
        ImageData data = new ImageData(file.getOriginalFilename(), file.getContentType(),produto, ImageUtil.compressImage(file.getBytes()));
        imageDataRepository.save(data);

        return new ImageUploadResponse("Image uploaded successfully: " +
                file.getOriginalFilename());

    }

    @Transactional
    public ImageData getInfoByImageByName(String name) {
        Optional<ImageData> dbImage = imageDataRepository.findByName(name);

        return dbImage.orElseThrow();

    }

    @Transactional
    public byte[] getImage(String name) {
        Optional<ImageData> dbImage = imageDataRepository.findByName(name);
        byte[] image = ImageUtil.decompressImage(dbImage.get().getImageData());
        return image;
    }

    @Transactional
    public List<ImageData> getImagesByProdutoId(Long idProduto) {
        List<ImageData> images = imageDataRepository.findByProdutoId(idProduto);
        return images;
    }


}