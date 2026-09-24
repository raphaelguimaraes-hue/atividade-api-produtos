const express = require('express');
const cors = require('cors'); // 1. Importar o CORS

const app = express();
app.use(cors()); // 2. Liberar requisições do frontend

// Mantenha o restante do seu código igual abaixo...
const produtos = [
    { nome: "Mochila Escolar", preco: 89.9, categoria: "Acessórios" },
    { nome: "Fone Bluetooth", preco: 199.9, categoria: "Eletrônicos" },
    { nome: "Garrafa Térmica", preco: 59.9, categoria: "Utilidades" }
];

app.get("/", (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});401+