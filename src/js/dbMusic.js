const music = [
  {
    
      id: 1,
      banda: 'hungria',
      capa:'https://akamai.sscdn.co/tb/320x320/palcomp3-logo/b/7/4/8/57c8325bfe404e93a45f9a2eaeaa820a.jpg',
      titulo: "Amor e fé",
      categoria: 'hip-hop',
      url: "https://drive.google.com/file/d/1NqerlP-Ihw29eAJPPo4UVxy-7M8WCp9V/preview?usp=sharing",
    },
    {
      id: 2,
      banda: 'hungria',
      capa:'https://akamai.sscdn.co/tb/320x320/palcomp3-logo/b/7/4/8/57c8325bfe404e93a45f9a2eaeaa820a.jpg',
      titulo: "Beijo com Trap",
      categoria: 'hip-hop',
      url: "https://drive.google.com/file/d/1A6z9WUKPJ7n2lJVRGsArJdjfKUpovI-c/preview?usp=sharing",
    },
  {
    id: 3,
    banda: 'hungria',
    capa:'https://akamai.sscdn.co/tb/320x320/palcomp3-logo/b/7/4/8/57c8325bfe404e93a45f9a2eaeaa820a.jpg',
    titulo: "Coração de Aço",
    categoria: 'hip-hop',
    url: "https://drive.google.com/file/d/1umvhd5PQNn_GeCEq7zNY6kNQ3O7q9gDr/preview?usp=drive_link"
  },
  {
    id: 4,
    banda: 'hungria',
    capa:'https://akamai.sscdn.co/tb/320x320/palcomp3-logo/b/7/4/8/57c8325bfe404e93a45f9a2eaeaa820a.jpg',
    titulo: "Lembranças",
    categoria: 'hip-hop',
    url: "https://drive.google.com/file/d/1sOUIjNkgs-mrx55AfDjqR_OJO6QApLH5/preview?usp=drive_link",
  },
  {
    id:5,
    banda: 'hungria',
    capa:'https://akamai.sscdn.co/tb/320x320/palcomp3-logo/b/7/4/8/57c8325bfe404e93a45f9a2eaeaa820a.jpg',
    titulo: "Made in favela",
    categoria: 'hip-hop',
    url: "https://drive.google.com/file/d/1N3Do5sQiNai0cR-l-BMVSBdJbcxQZIP5/preview?usp=drive_link",
  },
];

let musicas = document.querySelector("#musicas");
let hungria =document.querySelector('.hungria');
let selecionado = 

hungria.onclick = function carregaMusica(){

  if(music[0].categoria == 'hip-hop'){
    music.forEach((dado) => {
      musicas.innerHTML += `
      <div class="card">
      <img src="${dado.capa}"
      <span>${dado.titulo}</span>
      <iframe class="music"  frameborder="0" width="200" height="50" src="${dado.url}"></iframe>
        </div>
      
      
      `;
    });
  }
  
  
}


