package com.pedidos.email.consumers;

import com.pedidos.email.dtos.EmailRecordDto;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
public class EmailConsumer {
    @RabbitListener(queues = "${broker.queue.email.name}")
    public void listenEmailQueue(@Payload EmailRecordDto email){
        System.out.println(email.emailTo());
    }
}
