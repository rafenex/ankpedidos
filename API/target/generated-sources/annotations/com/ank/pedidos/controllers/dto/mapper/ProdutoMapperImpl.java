package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.ImageDataResponse;
import com.ank.pedidos.controllers.dto.ProdutoRequest;
import com.ank.pedidos.controllers.dto.ProdutoResponse;
import com.ank.pedidos.entities.Categoria;
import com.ank.pedidos.entities.ImageData;
import com.ank.pedidos.entities.Produto;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-24T08:42:57-0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
public class ProdutoMapperImpl implements ProdutoMapper {

    @Override
    public ProdutoResponse toResponse(Produto produto) {
        if ( produto == null ) {
            return null;
        }

        String categoria = null;
        Long id = null;
        String nome = null;
        BigDecimal valorPadrao = null;

        categoria = produtoCategoriaNome( produto );
        id = produto.getId();
        nome = produto.getNome();
        valorPadrao = produto.getValorPadrao();

        List<ImageDataResponse> imagens = mapImageDataList(produto.getImagens());

        ProdutoResponse produtoResponse = new ProdutoResponse( id, nome, valorPadrao, categoria, imagens );

        return produtoResponse;
    }

    @Override
    public Produto toEntity(ProdutoRequest request) {
        if ( request == null ) {
            return null;
        }

        Produto produto = new Produto();

        produto.setCategoria( produtoRequestToCategoria( request ) );
        produto.setNome( request.getNome() );
        produto.setValorPadrao( request.getValorPadrao() );

        return produto;
    }

    @Override
    public ImageDataResponse mapImageDataToResponse(ImageData imageData) {
        if ( imageData == null ) {
            return null;
        }

        Long id = null;
        String name = null;
        String type = null;
        byte[] imageData1 = null;

        id = imageData.getId();
        name = imageData.getName();
        type = imageData.getType();
        byte[] imageData2 = imageData.getImageData();
        if ( imageData2 != null ) {
            imageData1 = Arrays.copyOf( imageData2, imageData2.length );
        }

        ImageDataResponse imageDataResponse = new ImageDataResponse( id, name, type, imageData1 );

        return imageDataResponse;
    }

    @Override
    public List<ProdutoResponse> toResponse(List<Produto> produtos) {
        if ( produtos == null ) {
            return null;
        }

        List<ProdutoResponse> list = new ArrayList<ProdutoResponse>( produtos.size() );
        for ( Produto produto : produtos ) {
            list.add( toResponse( produto ) );
        }

        return list;
    }

    private String produtoCategoriaNome(Produto produto) {
        if ( produto == null ) {
            return null;
        }
        Categoria categoria = produto.getCategoria();
        if ( categoria == null ) {
            return null;
        }
        String nome = categoria.getNome();
        if ( nome == null ) {
            return null;
        }
        return nome;
    }

    protected Categoria produtoRequestToCategoria(ProdutoRequest produtoRequest) {
        if ( produtoRequest == null ) {
            return null;
        }

        Categoria categoria = new Categoria();

        categoria.setId( produtoRequest.getCategoria() );

        return categoria;
    }
}
