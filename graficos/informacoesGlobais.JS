//variável para guardar a URL da base de dados

const url = 'https://raw.githubusercontent.com/profvivi/Formadores-Ciencia-Dados/refs/heads/main/db.json';

//função assíncrona( ao fazer uma requisição para a API, o JavaScript espera ela ser concluída.)
async function visualizarInformacoesGlobais() {  //essa função não terá parâmetros.

        const res = await fetch(url) //palavra  await, para esperar a requisição ser finalizada e fetch() para passar a url.

        const dados = await res.json()  //variável para guardar a resposta recebida.

        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
        const pessoasAcessoEducacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio_dia_estudando - horas) * 100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)
    
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = 
        `Em um mundo com <span>${dados.total_pessoas_mundo}</span> bilhões de pessoas, a educação emerge 
        como a verdadeira chave para a transformação social. 
        Sendo que <span>${dados.total_pessoas_com_acesso_a_educacao}</span> de pessoas têm acesso à educação com tempo médio 
        tempo de <span>${dados.tempo_medio_dia_estudando}</span> horas de estudos por dia.`
        console.log(paragrafo)

        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
        }
    
        visualizarInformacoesGlobais()  //invocar a função
        */
