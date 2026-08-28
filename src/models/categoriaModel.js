const pool = require("../config/database");

async function listarCategorias() {
    const resultado = await pool.query("SELECT * FROM categorias ORDER BY id");
    return resultado.rows;
}

async function buscarCategoriaPorId(id) {
    const resultado = await pool.query("SELECT * FROM categorias WHERE id = $1", [id]);
    return resultado.rows[0];
}

async function criarCategoria(nome, descricao) {
    const resultado = await pool.query(
        `INSERT INTO categorias (nome, descricao)
         VALUES ($1, $2)
         RETURNING *`,
        [nome, descricao]
    );
    return resultado.rows[0];
}

module.exports = { listarCategorias, buscarCategoriaPorId, criarCategoria };
