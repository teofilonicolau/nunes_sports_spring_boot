package com.nunessports.services;

import com.nunessports.models.Produto;
import com.nunessports.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> getProdutoById(String id) {
        return produtoRepository.findById(id);
    }

    public Produto createProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto updateProduto(String id, Produto produto) {
        if (produtoRepository.existsById(id)) {
            return produtoRepository.save(produto);
        }
        return null; // Produto não encontrado
    }

    public void deleteProduto(String id) {
        produtoRepository.deleteById(id);
    }
}
