require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("API está ok!");
});

// const port = process.env.PORT || 3000; dá pra se fazer assim, o .ENV deve estar próximo ao packge.json

app.listen(process.env.PORT, () => {
  console.log(`servidor na porta ${process.env.PORT}`);
});
