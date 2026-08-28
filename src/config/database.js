require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect()
    .then(() => {
        console.log("Banco conectado com sucesso!");
    })
    .catch((erro) => {
        console.error("ERRO AO CONECTAR NO BANCO:");
        console.error(erro.message);
    });

module.exports = pool;