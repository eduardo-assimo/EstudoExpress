const { request } = require("express");
const express = require ("express");
const app = express();

let usuarios = [
    {nome: "Eduardo", sobrenome: "Assimo"}
];

app.get("/inicio", (request, response) => {
    return response.send("Olá mundo!");
})

app.get("/usuarios", (request, response) => {
    return response.json(usuarios);
})

app.listen(3000, () => {
    console.log("Servidor rodando!!!!!!!")
})