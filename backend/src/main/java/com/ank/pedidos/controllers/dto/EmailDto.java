package com.ank.pedidos.controllers.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmailDto {
    private Long userId;
    private String emailTo;
    private String subject;
    private String text;

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setEmailTo(String emailTo) {
        this.emailTo = emailTo;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getUserId() {
        return userId;
    }

    public String getEmailTo() {
        return emailTo;
    }

    public String getSubject() {
        return subject;
    }

    public String getText() {
        return text;
    }
}
