
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBti_b5reuhrsUXYnruf0ocbXiFAk7QFP8",
  authDomain: "hoshi-2409.firebaseapp.com",
  projectId: "hoshi-2409",
  storageBucket: "hoshi-2409.appspot.com",
  messagingSenderId: "178639727128",
  appId: "1:178639727128:web:959230498038a898ecb16d",
  measurementId: "G-R5K5HB88WG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const botao = document.getElementById("cadastrar");

// botao.addEventListener("click", function (e) {
//   e.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("senha").value;

//   const auth = getAuth(app);
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//       alert("cadastro efetuado com sucesso");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//       alert("falha ao cadastrar");
//     });
// });

//logar
const botaoLogar = document.getElementById("botaoLogar");
botaoLogar.addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailLogar").value;
  const password = document.getElementById("senhaLogar").value;

  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert('Usuario logado com sucesso,')
      location.href = './src/pages/home.html'
      

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('falha ao Logar, tente novamente em instantes')
    });
});



