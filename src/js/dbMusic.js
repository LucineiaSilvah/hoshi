const music = [
  {
    
      id: 1,
      banda: 'hungria',
      titulo: "Amor e fé",
      categoria: 'hip-hop',
      url: "https://drive.google.com/file/d/1NqerlP-Ihw29eAJPPo4UVxy-7M8WCp9V/preview?usp=sharing",
    },
    {
      id: 2,
      banda: 'hungria',
      titulo: "Beijo com Trap",
      categoria: 'hip-hop',
      url: "https://drive.google.com/file/d/1A6z9WUKPJ7n2lJVRGsArJdjfKUpovI-c/preview?usp=sharing",
    },
  {
    id: 3,
    banda: 'hungria',
    titulo: "Coração de Aço",
    categoria: 'hip-hop',
    url: "https://drive.google.com/file/d/1umvhd5PQNn_GeCEq7zNY6kNQ3O7q9gDr/preview?usp=drive_link"
  },
  {
    id: 4,
    banda: 'hungria',
    titulo: "Lembranças",
    categoria: 'hip-hop',
    url: "https://drive.google.com/file/d/1sOUIjNkgs-mrx55AfDjqR_OJO6QApLH5/preview?usp=drive_link",
  },
  {
    id:5,
    banda: 'hungria',
    titulo: "Made in favela",
    categoria: 'hip-hop',
    url: "https://drive.google.com/file/d/1N3Do5sQiNai0cR-l-BMVSBdJbcxQZIP5/preview?usp=drive_link",
  },
];

let musicas = document.querySelector("#musicas");
let hungria =document.querySelector('.hungria');


hungria.onclick = function carregaMusica(){

  if(hungria){
    music.forEach((dado) => {
      musicas.innerHTML += `
      <div class="card">
    
      <span>${dado.titulo}</span>
      <iframe class="music"  frameborder="0" width="200" height="50" src="${dado.url}"></iframe>
        </div>
      
      
      `;
    });
  }
  
  
}


