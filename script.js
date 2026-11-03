const API_URL = "http://localhost:3000"

const btnCadastrar = document.getElementById("btnCadastrar")
const btnCancelar = document.getElementById("btnCancelar")
const modal = document.getElementById("modalCadastro")
const form = document.getElementById("formJogo")
const lista = document.getElementById("listarJogos")
const mensagemVazia = document.getElementById("mensagemVazia")

// Abrir modal
btnCadastrar.addEventListener("click", () => {
    modal.showModal()
})

// Fechar modal
btnCancelar.addEventListener("click", () => {
    modal.close()
})

// Carregar jogos
async function carregarJogos() {
    try {
        const resposta = await fetch(API_URL + "/listar")

        if (!resposta.ok) {
            throw new Error("Erro ao buscar jogos")
        }

        const jogos = await resposta.json()

        lista.innerHTML = ""

        if (jogos.length === 0) {
            mensagemVazia.hidden = false
            lista.appendChild(mensagemVazia)
            return
        }

        mensagemVazia.hidden = true

        jogos.forEach(jogo => {
            criarCard(
                jogo.titulo,
                jogo.plataforma,
                jogo.desenvolvedora,
                jogo.imagem_url,
                jogo.preco
            )
        })

    } catch (erro) {
        console.error("Erro ao carregar jogos:", erro)
        alert("Não foi possível conectar ao servidor")
    }
}

// Cadastrar jogo
form.addEventListener("submit", async (evento) => {
    evento.preventDefault()

    const novoJogo = {
        titulo: document.getElementById("titulo").value.trim(),
        plataforma: document.getElementById("plataforma").value.trim(),
        desenvolvedora: document.getElementById("desenvolvedora").value.trim(),
        imagem_url: document.getElementById("imagem_url").value.trim(),
        preco: Number(document.getElementById("preco").value)
    }

    try {
        const resposta = await fetch(API_URL + "/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoJogo)
        })

        if (resposta.ok) {
            alert("Jogo cadastrado com sucesso!")

            form.reset()
            modal.close()

            carregarJogos()

        } else {
            const erro = await resposta.text()
            console.error(erro)
            alert("Erro ao cadastrar jogo. Verifique os dados.")
        }

    } catch (erro) {
        console.error("Erro na requisição:", erro)
        alert("Erro de conexão com o servidor")
    }
})

// Criar card
function criarCard(titulo, plataforma, desenvolvedora, imagem, preco) {
    const card = document.createElement("article")
    card.classList.add("card-jogo")

    const capa = document.createElement("div")
    capa.classList.add("capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    imagemCapa.alt = "Capa do jogo " + titulo

    capa.appendChild(imagemCapa)

    const info = document.createElement("div")
    info.classList.add("info-jogo")

    const nomeJogo = document.createElement("h3")
    nomeJogo.textContent = titulo

    const nomePlataforma = document.createElement("p")
    nomePlataforma.textContent = "Plataforma: " + plataforma

    const nomeDesenvolvedora = document.createElement("p")
    nomeDesenvolvedora.textContent = "Desenvolvedora: " + desenvolvedora

    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = Number(preco).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    info.append(nomeJogo, nomePlataforma, nomeDesenvolvedora, valor)

    card.append(capa, info)

    lista.appendChild(card)
}

// Carregar catálogo ao abrir a página
carregarJogos()
