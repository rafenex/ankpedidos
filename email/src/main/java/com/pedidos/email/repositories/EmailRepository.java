package com.pedidos.email.repositories;

import com.pedidos.email.models.EmailModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EmailRepository extends JpaRepository <EmailModel, UUID> {
}
