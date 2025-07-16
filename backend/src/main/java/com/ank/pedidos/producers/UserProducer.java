package com.ank.pedidos.producers;

import com.ank.pedidos.controllers.dto.EmailDto;
import com.ank.pedidos.controllers.dto.UserResponse;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class UserProducer {
    final RabbitTemplate rabbitTemplate;

    public UserProducer(RabbitTemplate rabbitTemplate){
        this.rabbitTemplate = rabbitTemplate;
    }

    @Value(value = "${broker.queue.email.name}")
    private String routingKey;


    public void publishMessageEmail(UserResponse usuario){
        EmailDto emailDto = new EmailDto();
        emailDto.setUserId(usuario.id());
        emailDto.setEmailTo(usuario.email());
        emailDto.setSubject("Cadastro realizado com sucesso!");
        emailDto.setText(usuario.firstname() + ", seja bem vindo(a)! \nAgradecemos o seu cadastro.");

        rabbitTemplate.convertAndSend("", routingKey, emailDto);
    }

}
