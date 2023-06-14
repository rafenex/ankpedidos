package com.ank.pedidos.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.stream.Collectors;

@RestControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(SQLIntegrityConstraintViolationException.class)
    public ApiErrorMessage handleSQLIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException ex) {
        return new ApiErrorMessage(HttpStatus.CONFLICT, ex.getMessage());
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ApiErrorMessage handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        return new ApiErrorMessage(HttpStatus.BAD_REQUEST, ex.getAllErrors().stream().map(r -> r.getDefaultMessage()).collect(Collectors.toList()));
    }

}