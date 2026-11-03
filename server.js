const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_retrogames"
})

db.connect((erro) => {
    if (erro) {
        console.error("Erro ao conectar o mysql:", erro)
    } else {
        console.log("Conectado ao BD com sucesso!")
    }
})

const mostrarJogos = (req, res) => {
    const sql = "SELECT id, titulo, plataforma, desenvolvedora, imagem_url, preco, data_cadastro FROM jogos"

    db.query(sql, (erro, resultados) => {
        if (erro) {
            console.error(erro)
            return res.status(500).send("Erro ao consultar o BD")
        }

        res.send(resultados)
    })
}

const novoJogo = (req, res) => {
    console.log("Dados recebidos:", req.body)

    const { titulo, plataforma, desenvolvedora, imagem_url, preco } = req.body

    if (titulo && plataforma && desenvolvedora && imagem_url && preco !== undefined && preco !== null && preco !== "") {

        const sql = "INSERT INTO jogos (titulo, plataforma, desenvolvedora, imagem_url, preco) VALUES (?, ?, ?, ?, ?)"

        const valores = [titulo, plataforma, desenvolvedora, imagem_url, preco]

        db.query(sql, valores, (erro, resultado) => {
            if (erro) {
                console.error("Erro ao cadastrar jogo:", erro)
                return res.status(500).send("Erro ao cadastrar jogo")
            }

            res.status(201).send("Jogo cadastrado com sucesso")
        })

    } else {
        res.status(400).send("Erro: Preencha todos os campos")
    }
}

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const porta = 3000

app.get("/listar", mostrarJogos)
app.post("/cadastrar", novoJogo)

app.listen(porta, () => {
    console.log(`Servidor RetroGames rodando na porta ${porta}`)
})
