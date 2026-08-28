const pool = require("../config/database");

async function listarProdutos() {
    const resultado = await pool.query(`
        SELECT p.id, p.nome, p.descricao, p.preco, p.quantidade,
               c.id AS categoria_id, c.nome AS categoria
        FROM produtos p
        INNER JOIN categorias c ON p.categoria_id = c.id
        ORDER BY p.id
    `);
    return resultado.rows;
}

async function buscarProdutoPorId(id) {
    const resultado = await pool.query(`
        SELECT p.id, p.nome, p.descricao, p.preco, p.quantidade,
               c.id AS categoria_id, c.nome AS categoria
        FROM produtos p
        INNER JOIN categorias c ON p.categoria_id = c.id
        WHERE p.id = $1
    `, [id]);
    return resultado.rows[0];
}

async function criarProduto(nome, descricao, preco, quantidade, categoriaId) {
    const resultado = await pool.query(`
        INSERT INTO produtos (nome, descricao, preco, quantidade, categoria_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [nome, descricao, preco, quantidade, categoriaId]);
    return resultado.rows[0];
}

async function atualizarProduto(id, nome, descricao, preco, quantidade, categoriaId) {
    const resultado = await pool.query(`
        UPDATE produtos
        SET nome = $1, descricao = $2, preco = $3,
            quantidade = $4, categoria_id = $5
        WHERE id = $6
        RETURNING *
    `, [nome, descricao, preco, quantidade, categoriaId, id]);
    return resultado.rows[0];
}

async function deletarProduto(id) {
    const resultado = await pool.query(
        "DELETE FROM produtos WHERE id = $1 RETURNING *",
        [id]
    );
    return resultado.rows[0];
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    deletarProduto
};
