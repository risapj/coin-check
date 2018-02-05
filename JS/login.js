window.onload = funciton(){
var config = {
    apiKey: "AIzaSyDiURcoOm2Eyz5lKvxanZKarWuKfxzpAHg",
    authDomain: "coin-check-2574a.firebaseapp.com",
    databaseURL: "https://coin-check-2574a.firebaseio.com",
    projectId: "coin-check-2574a",
    storageBucket: "coin-check-2574a.appspot.com",
    messagingSenderId: "191686369913"
  };
  firebase.initializeApp(config);
};

const txtUser = document.getElementById('email');
const txtPass = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', e => {
  // get email and password
  const email = txtUser.value;
  const pass = txtPass.value;
  const auth = firebase.auth();
  // sign in 
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

