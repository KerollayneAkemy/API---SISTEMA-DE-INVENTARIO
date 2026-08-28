const categoriaModel = require("../models/categoriaModel");

async function listar(req, res) {
    try {
        const categorias = await categoriaModel.listarCategorias();
        res.status(200).json(categorias);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao buscar categorias" });
    }
}

async function buscarPorId(req, res) {
    try {
        const categoria = await categoriaModel.buscarCategoriaPorId(req.params.id);
        if (!categoria) return res.status(404).json({ mensagem: "Categoria não encontrada" });
        res.status(200).json(categoria);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao buscar categoria" });
    }
}

async function criar(req, res) {
    try {
        const { nome, descricao } = req.body;
        if (!nome) return res.status(400).json({ mensagem: "O nome da categoria é obrigatório" });
        const categoria = await categoriaModel.criarCategoria(nome, descricao || null);
        res.status(201).json({ mensagem: "Categoria criada com sucesso", categoria });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao criar categoria" });
    }
}

module.exports = { listar, buscarPorId, criar };
