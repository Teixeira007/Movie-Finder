
const btnSignin = document.querySelector("#signin");
const btnSignup = document.querySelector("#signup");

const body = document.querySelector("body");

const urlParams = new URLSearchParams(window.location.search)
let idTela = urlParams.get('id')

const formLogin = document.querySelector('.form-login')
const formSign = document.querySelector('.form-signup')



if(idTela == "login"){
    body.className = 'sign-in-js'
    // formSign.style.display = 'none'

}else{
    body.className = 'sign-up-js'
    // formLogin.style.display = 'none'

}


btnSignin.addEventListener("click", function () {
   window.location.href =  `TelaLoginCadastro.html?id=login`
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    window.location.href =  `TelaLoginCadastro.html?id=registrar`
    body.className = "sign-up-js";
})


