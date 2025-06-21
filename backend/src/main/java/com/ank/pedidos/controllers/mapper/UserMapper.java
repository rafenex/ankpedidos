package com.ank.pedidos.controllers.mapper;

import com.ank.pedidos.controllers.dto.PedidoResponse;
import com.ank.pedidos.controllers.dto.UserResponse;
import com.ank.pedidos.entities.Pedido;
import com.ank.pedidos.entities.Role;
import com.ank.pedidos.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;

import java.util.List;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserResponse toResponse(User user);

    List<UserResponse> toResponse(List<User> users);


    default Page<UserResponse> toResponse(Page<User> users) {
        List<UserResponse> userResponses = toResponse(users.getContent());
        return new PageImpl<>(userResponses, users.getPageable(), users.getTotalElements());
    }

    default String map(Role role) {
        return role == null ? null : role.name();
    }

}
