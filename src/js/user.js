const url = 'https://my-json-server.typicode.com/LucineiaSilvah/apihoshi/users';
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const novoUser = {nome,email,senha}
fetch(url).then(res => res.json())
.then(dados => console.log(dados))


//adicionar usuario
btnCadastrar = document.getElementById('cadastrar')

  
  

function cadastrarUsuario(){

  fetch(url, {
    method: 'POST',
    headers:{'Content-type': 'application/json'},
    body:JSON.stringify({
      nome: nome.value,
      email: email.value,
      senha: senha.value
    })

  })
  .then(res=> res.json())
  .then(dados=> console.log(dados))
}
