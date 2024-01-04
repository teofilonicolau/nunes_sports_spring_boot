package com.nunessports.controllers;

import com.nunessports.models.Produto;
import com.nunessports.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> getAllProdutos() {
        return produtoService.getAllProdutos();
    }

    @GetMapping("/{id}")
    public Optional<Produto> getProdutoById(@PathVariable String id) {
        return produtoService.getProdutoById(id);
    }

    @PostMapping
    public Produto createProduto(@RequestBody Produto produto) {
        return produtoService.createProduto(produto);
    }

    @PutMapping("/{id}")
    public Produto updateProduto(@PathVariable String id, @RequestBody Produto produto) {
        return produtoService.updateProduto(id, produto);
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable String id) {
        produtoService.deleteProduto(id);
    }
}