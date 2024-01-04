package com.nunessports.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "produtos")
public class Produto {

    @Id
    private String id;
    private String nome;
    private String codigo;
    private String descricao;
    private double preco;


}
