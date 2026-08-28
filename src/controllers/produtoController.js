const produtoModel = require("../models/produtoModel");
const categoriaModel = require("../models/categoriaModel");

function dadosValidos(body) {
    const { nome, preco, quantidade, categoria_id } = body;
    return nome && preco !== undefined && quantidade !== undefined && categoria_id;
}

async function listar(req, res) {
    try {
        const produtos = await produtoModel.listarProdutos();
        res.status(200).json(produtos);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao buscar produtos" });
    }
}

async function buscarPorId(req, res) {
    try {
        const produto = await produtoModel.buscarProdutoPorId(req.params.id);
        if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
        res.status(200).json(produto);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao buscar produto" });
    }
}

async function criar(req, res) {
    try {
        const {
            nome,
            descricao,
            preco,
            quantidade,
            categoria_id
        } = req.body;

        // Validação do nome
        if (!nome || nome.trim() === "") {
            return res.status(400).json({
                mensagem: "O nome do produto é obrigatório"
            });
        }

        // Validação do preço
        if (preco === undefined || preco === null || preco <= 0) {
            return res.status(400).json({
                mensagem: "O preço deve ser informado e maior que zero"
            });
        }

        // Validação da quantidade
        if (
            quantidade === undefined ||
            quantidade === null ||
            quantidade < 0
        ) {
            return res.status(400).json({
                mensagem: "A quantidade deve ser informada e não pode ser negativa"
            });
        }

        // Validação da categoria
        if (!categoria_id) {
            return res.status(400).json({
                mensagem: "A categoria do produto é obrigatória"
            });
        }

        const produto = await produtoModel.criarProduto(
            nome,
            descricao,
            preco,
            quantidade,
            categoria_id
        );

        res.status(201).json({
            mensagem: "Produto criado com sucesso",
            produto
        });

    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao criar produto"
        });
    }
}

async function atualizar(req, res) {
    try {
        if (!dadosValidos(req.body)) {
            return res.status(400).json({ mensagem: "Envie nome, preço, quantidade e categoria_id" });
        }
        const { nome, descricao, preco, quantidade, categoria_id } = req.body;
        const categoria = await categoriaModel.buscarCategoriaPorId(categoria_id);
        if (!categoria) return res.status(400).json({ mensagem: "Categoria informada não existe" });
        const produto = await produtoModel.atualizarProduto(req.params.id, nome, descricao || null, preco, quantidade, categoria_id);
        if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
        res.status(200).json({ mensagem: "Produto atualizado com sucesso", produto });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao atualizar produto" });
    }
}

async function deletar(req, res) {
    try {
        const produto = await produtoModel.deletarProduto(req.params.id);
        if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
        res.status(200).json({ mensagem: "Produto removido com sucesso" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao remover produto" });
    }
}

module.exports = { listar, buscarPorId, criar, atualizar, deletar };
