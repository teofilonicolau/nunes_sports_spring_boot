
function criarProduto() {
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    fetch('/api/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, codigo, descricao, preco })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Produto criado:', data);
        // Adicione feedback visual ou ações adicionais conforme necessário
    })
    .catch(error => console.error('Erro ao criar produto:', error));
}


function lerProdutos() {
    fetch('/api/produtos')
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Erro ao ler produtos:', error));
}


function atualizarProduto() {
    const id = obterIdProduto();
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const descricao = document.getElementById('descricao').value;
    const preco = document.getElementById('preco').value;

    const dadosDoProduto = { nome, codigo, descricao, preco };

    fetch(`/api/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosDoProduto)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Produto atualizado:', data);
        // Adicione feedback visual ou ações adicionais conforme necessário
    })
    .catch(error => console.error('Erro ao atualizar produto:', error));
}


function excluirProduto() {
    const id = obterIdProduto();

    fetch(`/api/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Produto excluído com sucesso');
        // Adicione feedback visual ou ações adicionais conforme necessário
    })
    .catch(error => console.error('Erro ao excluir produto:', error));
}

// Função auxiliar para obter o ID do produto
function obterIdProduto() {
    return document.getElementById('id').value;
}

