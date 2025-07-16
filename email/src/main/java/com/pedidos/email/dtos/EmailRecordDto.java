package com.pedidos.email.dtos;

public record EmailRecordDto(Long userId,
                             String emailTo,
                             String subject,
                             String text) {
}
