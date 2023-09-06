require("dotenv").config();
const express = require("express");
const knex = require("./conexao");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const racas = await knex("racas");
    return res.json(racas);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro do servidor" });
  }
});

// const port = process.env.PORT || 3000; dá pra se fazer assim, o .ENV deve estar próximo ao packge.json

app.listen(process.env.PORT, () => {
  console.log(`servidor na porta ${process.env.PORT}`);
});
