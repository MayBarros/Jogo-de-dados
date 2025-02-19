const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

function rollDice(sides) {                              //função que rola os dados e da o resultado de acordo com o numero de lados escolhido do dado
    return Math.floor(Math.random() * sides) + 1;
}

app.get("/roll/:diceType", (req, res) => {    //rota da url - requisição do lançamento do dado, dicyType recebe a escolha do lado de dados , /roll/6
    const { diceType } = req.params;
    const validDice = [4, 6, 8, 10, 12, 20, 100]; //array com os valores validos aceito

    const sides = parseInt(diceType);

    if (!validDice.includes(sides)) {               //verifica se o dado é valido
        return res.status(400).json({ error: "Dado inválido" });
    }

    const result = rollDice(sides);
    res.json({ dice: `D${sides}`, result });
});

app.listen(PORT, () => {          //inicia o servidor
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});