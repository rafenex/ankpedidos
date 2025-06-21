package com.ank.pedidos.controllers.dto;



public record UserResponse (Long id,
                            String firstname,
                            String lastname,
                            String email,
                            String role){}

