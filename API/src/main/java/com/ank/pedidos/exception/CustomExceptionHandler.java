package com.ank.pedidos.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

@RestControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ApiErrorMessage handleResourceNotFoundException(SQLIntegrityConstraintViolationException ex) {
        return new ApiErrorMessage(HttpStatus.CONFLICT, ex.getMessage());
    }

}