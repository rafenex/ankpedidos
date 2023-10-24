package com.ank.pedidos.services;

import com.ank.pedidos.entities.Categoria;
import com.ank.pedidos.repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {
    @Autowired
    private CategoriaRepository categoriaRepository;

    public Categoria save(Categoria categoria){
        return categoriaRepository.save(categoria);
    }

    @Cacheable("categoria")
    public List<Categoria> findAll(){
        return categoriaRepository.findAll();
    }

    public void delete(Long id){
        categoriaRepository.deleteById(id);
    }

    public Categoria update(Categoria categoria, Long id){
        Categoria categoriaToUpdate = categoriaRepository.findById(id).orElseThrow();
        categoriaToUpdate.setNome(categoria.getNome());
        return categoriaRepository.save(categoriaToUpdate);
    }

    public Categoria findById(Long id) {
        return categoriaRepository.findById(id).orElseThrow();
    }
}
