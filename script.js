const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quantos dias tem o ciclo de uma soja tardia?",
        alternativas: [
            {
                texto: "Entre 130 e 160",
                afirmacao: "Acertou"
            },
            {
                texto: "Entre 90 a 110",
                afirmacao: "Errou"
            },
            {
                texto: "Entre 115 a 125",
                afirmacao: "Errou"
            },
            {
                texto: "Entre 120 a 150",
                afirmacao: "Errou"
            }            
        ]
    },
    {
        enunciado: "Qual a função do molibdênio (Mo) na soja?",
        alternativas: [
            {
                texto: "É um fungicida natural presente nas raízes da soja",
                afirmacao: "Errou"
            },
            {
                texto: "A soja produz molibdênio sozinha, sem precisar do solo",
                afirmacao: "Errou"
            },
            {
                texto: "Molibdênio é usado para acelerar a floração da soja",
                afirmacao: "Errou"
            },
            {
                texto: "O molibdênio é um micronutriente essencial para a fixação do nitrogênio",
                afirmacao: "Acertou"
            }            
        ]
    },
    {
        enunciado: "Qual o maior produtor de soja do Mundo?",
        alternativas: [
            {
                texto: "China",
                afirmacao: "Errou"
            },
            {
                texto: "Brasil",
                afirmacao: "Acertou"
            },
            {
                texto: "Argentina",
                afirmacao: "Errou"
            },
            {
                texto: "Estados Unidos",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual a medida de um alqueire de terra?",
        alternativas: [
            {
                texto: "27.225",
                afirmacao: "Errou"
            },
            {
                texto: "48.400 ",
                afirmacao: "Errou"
            },
            {
                texto: "24.500",
                afirmacao: "Errou"
            },
            {
                texto: "24.200",
                afirmacao: "Acertou"
            }
        ]
    },
    {
        enunciado: "Qual os peso de uma saca de soja comercial?",
        alternativas: [
            {
                texto: "70 Kg",
                afirmacao: "Errou"
            },
            {
                texto: "55 Kg",
                afirmacao: "Errou"
            },
            {
                texto: "60 Kg",
                afirmacao: "Acertou"
            },
            {
                texto: "65 Kg",
                afirmacao: "Errou"
            }
        ]
    },
    {
        enunciado: "Qual é a composição específica do calcário dolomítico?",
        alternativas: [
            {
                texto: "52% carbonato de cálcio e 47% carbonato de magnésio",
                afirmacao: "Errou"
            },
            {
                texto: "40% carbonato de cálcio e 60% carbonato de magnésio",
                afirmacao: "Errou"
            },
            {
                texto: "60% carbonato de cálcio e 30% carbonato de magnésio",
                afirmacao: "Errou"
            },
            {
                texto: "54% carbonato de cálcio e 45% carbonato de magnésio",
                afirmacao: "Acertou"
            }
        ]
    },
    {
        enunciado: "Uma espiga de milho normalmente tem?",
        alternativas: [
            {
                texto: "12 fileiras de grãos",
                afirmacao: "Errou"
            },
            {
                texto: "20 fileiras exatas",
                afirmacao: "Errou"
            },
            {
                texto: "Número de fileiras ímpares",
                afirmacao: "Errou"
            },
            {
                texto: "Sempre um número par de fileiras",
                afirmacao: "Acertou"
            }
        ]
    },    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    const totalPerguntas = perguntas.length;
    const totalAcertos = contagemAfirmacoes["Acertou"] || 0; // Se não houver acertos, considera como 0
    const porcentagemAcertos = (totalAcertos / totalPerguntas) * 100;

    caixaPerguntas.textContent = "Resultado do Quiz!";
    textoResultado.textContent = `Você acertou ${totalAcertos} de ${totalPerguntas} perguntas. Sua taxa de acerto foi ${porcentagemAcertos.toFixed(2)}%.`;
    caixaAlternativas.textContent = "";
}

