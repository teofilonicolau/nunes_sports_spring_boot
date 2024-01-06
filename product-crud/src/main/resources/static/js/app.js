window.criarProduto = function () {
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;


    fetch('http://localhost:8080/api/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, codigo, descricao, preco })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Produto criado:', data);
        exibirFeedback('Produto criado com sucesso', 'green');
    })
    .catch(error => {
        console.error('Erro ao criar produto:', error);
        exibirFeedback('Erro ao criar produto', 'red');
    });
};
