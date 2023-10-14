const dados = [
  {
    id: 1,
    titulo: "Duro de Atuar",
    capa: "https://www.themoviedb.org/t/p/w1280/hcuZ68ymJgohTerR8Oo1mb76SJv.jpg",
    url: "https://embedflix.net/filme/tt26198528",
    sinopse:
      "Kevin Hart, fazendo uma versão de si mesmo, vai encarar o desafio da sua vida para se tornar um herói de ação. E só com a ajuda de John Travolta, Nathalie Emmanuel e Josh Hartnett que ele poderá alcançar o sucesso.",
  },
  {
    id: 2,
    titulo: "Creed II",
    capa: "https://www.themoviedb.org/t/p/w1280/zAu6ajsuyL9dwMhOFerfwqtjsX4.jpg",
    url: "https://embedflix.net/filme/tt6343314",
    sinopse:
      "Adonis Creed saiu mais forte do que nunca de sua luta contra 'Pretty' Ricky Conlan e segue sua trajetória rumo ao campeonato mundial de boxe, contra toda a desconfiança que acompanha a sombra de seu pai e com o apoio de Rocky. Sua próxima luta não será tão simples: Ele precisa enfrentar um adversário que possui uma forte ligação com o passado de sua família, o que torna tudo ainda mais complexo.",
  },
  {
    id: 3,
    titulo: "Creed III",
    capa: "https://www.themoviedb.org/t/p/w1280/wDugyjvDQsuwm9j9hkmK4whCOti.jpg",
    url: "https://embedflix.net/filme/tt11145118",
    sinopse:
      "Depois de dominar o mundo do boxe, Adonis Creed tem prosperado em sua carreira e vida familiar. Quando um amigo de infância e ex-prodígio do boxe, Damien Anderson, ressurge depois de cumprir uma longa sentença na prisão, ele está ansioso para provar que merece sua chance no ringue. O confronto entre ex-amigos é mais do que apenas uma briga. Para acertar as contas, Adonis deve colocar seu futuro em risco para lutar contra Damien - um lutador que não tem nada a perder.",
  },
  {
    id: 4,
    titulo: "Homem formiga e a vespa",
    capa: "https://www.themoviedb.org/t/p/w1280/pDNT1gXhZEV1V70eCVmJAQNEqBl.jpg",
    url: "https://embedflix.net/filme/tt5095030",
    sinopse:
      "Scott Lang e Hope van Dyne em suas jornadas como super-heróis. Scott e sua família são puxados para o Reino Quântico, onde eles precisarão enfrentar um novo e terrível vilão: Kang, o Conquistador e M.O.D.O.K..",
  },
  {
    id: 5,
    titulo: "Lobo Viking",
    capa: "https://www.themoviedb.org/t/p/w1280/gWfa1uahpIXlNkv7AMEvQt4VMde.jpg",
    url: "https://embedflix.net/filme/tt13051810",
    sinopse:
      "Uma adolescente que acabou de se mudar para uma cidadezinha testemunha um assassinato brutal. Depois disso, ela começa a ter visões e desejos bizarros.",
  },
];

const filmes = document.querySelector(".filmes");

dados.forEach((dado) => {
  filmes.innerHTML += `
  
   <div class="card">
    <h3>${dado.titulo}</h3>
    <img class="capa" src="${dado.capa}" alt="capa do filme ${dado.titulo}">
    <button class="btnAssistir">
    <a href="${dado.url}" target="_blank" rel="noopener noreferrer">Assistir</a>
    </button>
   </div>
  
  
  `;
});
