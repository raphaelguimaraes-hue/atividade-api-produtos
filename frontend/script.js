async function carregarDados() {
    try {
        const resposta = await fetch('https://automatic-space-fishstick-xrv6q67qp6xj26qwx-3000.app.github.dev/');
        const produtos = await resposta.json();

        const listaProdutos = document.getElementById("lista-produtos");

        listaProdutos.innerHTML = produtos.map(produto => `
            <div class="card-produto">
                <h2>${produto.nome}</h2>
                <p><strong>Categoria:</strong> ${produto.categoria}</p>
                <p class="preco">
                    R$ ${produto.preco.toFixed(2).replace(".", ",")}
                </p>
            </div>
        `).join("");

    } catch (erro) {
        console.error("Erro ao carregar os produtos:", erro);
    }
}

carregarDados();