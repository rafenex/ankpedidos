package com.ank.pedidos.controllers.dto.mapper;

import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.entities.Cliente;
import com.ank.pedidos.entities.ItemPedido;
import com.ank.pedidos.entities.Pedido;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoField;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeConstants;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-10-24T08:42:56-0300",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 19.0.2 (Oracle Corporation)"
)
public class PedidoMapperImpl implements PedidoMapper {

    private final DatatypeFactory datatypeFactory;

    public PedidoMapperImpl() {
        try {
            datatypeFactory = DatatypeFactory.newInstance();
        }
        catch ( DatatypeConfigurationException ex ) {
            throw new RuntimeException( ex );
        }
    }

    @Override
    public PedidoResponse toResponse(Pedido pedido) {
        if ( pedido == null ) {
            return null;
        }

        PedidoResponse pedidoResponse = new PedidoResponse();

        pedidoResponse.setClienteNome( pedidoClienteNome( pedido ) );
        pedidoResponse.setClienteEndereco( pedidoClienteEndereco( pedido ) );
        pedidoResponse.setId( pedido.getId() );
        List<ItemPedido> list = pedido.getItemPedido();
        if ( list != null ) {
            pedidoResponse.setItemPedido( new ArrayList<ItemPedido>( list ) );
        }
        pedidoResponse.setData( xmlGregorianCalendarToLocalDate( localDateTimeToXmlGregorianCalendar( pedido.getData() ) ) );
        pedidoResponse.setTotal( pedido.getTotal() );

        return pedidoResponse;
    }

    @Override
    public List<PedidoResponse> toResponse(List<Pedido> pedidos) {
        if ( pedidos == null ) {
            return null;
        }

        List<PedidoResponse> list = new ArrayList<PedidoResponse>( pedidos.size() );
        for ( Pedido pedido : pedidos ) {
            list.add( toResponse( pedido ) );
        }

        return list;
    }

    private XMLGregorianCalendar localDateTimeToXmlGregorianCalendar( LocalDateTime localDateTime ) {
        if ( localDateTime == null ) {
            return null;
        }

        return datatypeFactory.newXMLGregorianCalendar(
            localDateTime.getYear(),
            localDateTime.getMonthValue(),
            localDateTime.getDayOfMonth(),
            localDateTime.getHour(),
            localDateTime.getMinute(),
            localDateTime.getSecond(),
            localDateTime.get( ChronoField.MILLI_OF_SECOND ),
            DatatypeConstants.FIELD_UNDEFINED );
    }

    private static LocalDate xmlGregorianCalendarToLocalDate( XMLGregorianCalendar xcal ) {
        if ( xcal == null ) {
            return null;
        }

        return LocalDate.of( xcal.getYear(), xcal.getMonth(), xcal.getDay() );
    }

    private String pedidoClienteNome(Pedido pedido) {
        if ( pedido == null ) {
            return null;
        }
        Cliente cliente = pedido.getCliente();
        if ( cliente == null ) {
            return null;
        }
        String nome = cliente.getNome();
        if ( nome == null ) {
            return null;
        }
        return nome;
    }

    private String pedidoClienteEndereco(Pedido pedido) {
        if ( pedido == null ) {
            return null;
        }
        Cliente cliente = pedido.getCliente();
        if ( cliente == null ) {
            return null;
        }
        String endereco = cliente.getEndereco();
        if ( endereco == null ) {
            return null;
        }
        return endereco;
    }
}
