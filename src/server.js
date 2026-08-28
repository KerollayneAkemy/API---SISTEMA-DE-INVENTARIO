require("dotenv").config();
const express = require("express");
const pool = require("./config/database");
const categoriaRoutes = require("./routes/categoriaRoutes");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mensagem: "API de Inventário funcionando!" });
});

app.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({ status: "ok", banco: "conectado" });
    } catch (erro) {
        res.status(500).json({ status: "erro", banco: "desconectado" });
    }
});

app.use("/categorias", categoriaRoutes);
app.use("/produtos", produtoRoutes);

app.use((req, res) => {
    res.status(404).json({ mensagem: "Rota não encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
