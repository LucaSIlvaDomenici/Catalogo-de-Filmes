// Trabalho Interdisciplinar 1 - Aplicações Web
//
// Esse módulo realiza as operações de CRUD a partir de uma API baseada no JSONServer
// O servidor JSONServer fica hospedado na seguinte URL
// https://jsonserver.rommelpuc.repl.co/contatos
//
// Para fazer o seu servidor, acesse o projeto do JSONServer no Replit, faça o 
// fork do projeto e altere o arquivo db.json para incluir os dados do seu projeto.
// URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
//

// URL da API JSONServer - Substitua pela URL correta da sua API
const apiUrl = 'http://localhost:3000/filmes';

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="mt-3 mb-1 alert alert-warning">' + mensagem + '</div>';
}

function readFilme(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler filmes via API JSONServer:', error);
            displayMessage("Erro ao ler filmes");
        });
}

function createFilme(filme, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Filme inserido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir filme via API JSONServer:', error);
            displayMessage("Erro ao inserir filmes");
        });
}

function updateFilme(id, filme, refreshFunction) {
    console.log(filme, id, refreshFunction)
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme),
        
    })
        .then(response => response.json())
        .then(data => {
            console.log(filme)
            displayMessage("Filme alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar filme via API JSONServer:', error);
            displayMessage("Erro ao atualizar filme");
        });
}

function deleteFilme(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Filme removido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover filme via API JSONServer:', error);
            displayMessage("Erro ao remover filme");
        });
}
