// Dados dos filmes com imagens armazenadas localmente na pasta 'imagens'
const filmes =  {
    acao:[
        {
        titulo: "Spider Man 2",
        diretor: "Sam Raimi",
        elenco: "Tobey Maguire, Kirsten Dunst, James Franco, Alfred Molina, Willen Dafoe, J. K. Simmons, Daniel Gillies, Rosemary Harris",
        sinopse: "Peter Parker está insatisfeito com a vida, pois perde seu emprego, o amor de sua vida, Mary Jane, e seus poderes. Em meio a todo o caos, ele deve lutar contra o Doutor Octopus, que ameaça destruir a cidade de Nova York.   ",
        imagem:"imagens/images.jpg"   
        },
        {
            titulo: "Robocop",
            diretor: "Paul Verhoeven",
            elenco: "Peter Weller, Nancy Allen, Dan O'Herlihy, Ronny Cox, Kurtwood Smith, Miguel Ferrer, Robert DoQui, Ray Wise, Felton Perry, Paul McCrane, Jesse D. Goins, Del Zamora, Calvin Jung, Rick Lieberman, Lee de Broux, Mark Carlton, Edward Edwards, Michael Gregory.",
            sinopse: "Em um Detroit distópico e assolado pelo crime, um policial terminalmente ferido retorna à força como um poderoso cyborg perseguido por memórias submersas.",
            imagem: "imagens/Robocop.jpg"
        },
        {
            titulo: " Baby Driver (Em ritmo de fuga) ",
            diretor: " Edgar Wright ",
            elenco: " Ansel Elgort, Jon Bernthal, Jon Hamm, Eiza González, Micah Howard, Lily James, Morgan Brown, Kevin Spacey, Morse Diggs, CJ Jones, Sky Ferreira, Lance Palmer, Hudson Meek, Viviana Chavez, Hal Whiteside, Flea, Lanny Joon, Jamie Foxx.  ",
            sinopse: " Depois de ser obrigado a trabalhar para um chefe do crime, um jovem condutor se ve envolvido num assalto destinado a fracassar. ",
            imagem: "imagens/baby.jpg"
        }
    ],
    romance: [
        {
        titulo: " A cinco passos de você ",
        diretor: " Justin Baldoni ",
        elenco: " Haley Lu Richardson, Cole Sprouse,Moises Arias, Kimberly Hebert Gregory, Parminder Nagra, Claire Forlani, Emily Baldoni, Gary Weeks, Cynthia Evans, Brett Austin Johnson, Ariana Guerra, Sophia Bernard, Evangeline Hill, Ivy Dubreuil, Kristopher Perez, Cecilia Leal, Trina LaFargue, Demián Castro. ",
        sinopse: " Dois adolescentes com fibrose cística se encontram em um hospital e se apaixonam, mesmo que sua doença os obrigue a evitar contato físico. ",
        imagem: "imagens/aCincoPassos.jpg"
        },
        {
            titulo: "O amor não tira férias",
            diretor: "Nancy Meyers",
            elenco: "",
            sinopse: "",
            imagem: ""
        },
        {
            titulo: "A barraca do Beijo",
            diretor: "",
            elenco: "",
            sinopse: "",
            imagem: ""
        },
    ],
    FiccaoCientifica: [

    ]
}
//Função para criar os filmes e exibi-los no HTML
function exibirFilmes(){
    // Obter os contêineres de cada categoria
    const acaoConteirner = document.getElementById("acao")
    const romanceConteiner = document.getElementById("romance")
    const ficcaoCientificaConteiner = document.getElementById("ficcaoCientifica")

    // Função para exibir filmes e exibi-los no HTML
    function exibirCategoria(filmes, conteiner) {
        filmes.forEach(filme => {
            const divFilme = document.createElement("div")
            divFilme.classList.add("filme")
            divFilme.innerHTML = `
            <img src = "${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p><strong>Diretor:</strong> ${filme.diretor}</P>
            <p><strong>Elenco>: </strong> ${filme.elenco}</p>
            <P><strong>Sinopse>: </strong> ${filme.sinopse}</p>
            `
            conteiner.appendChild(divFilme)

        });
    }
    // Exibir filmes para cada categoria
    exibirCategoria(filmes.acao, acaoConteirner)
    exibirCategoria(filmes.romance, romanceConteiner)
    exibirCategoria(filmes.FiccaoCientifica, ficcaoCientificaConteiner)
}
// Chamar a função para exibir os filmes
exibirFilmes()