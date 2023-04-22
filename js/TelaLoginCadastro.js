
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
   window.location.href =  `/login?id=login`
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    window.location.href =  `/cadastrar?id=cadastrar`
    body.className = "sign-up-js";
})


let errorTela = urlParams.get('error')
if(errorTela){
    const divError = document.querySelector('.alert-danger')
    divError.textContent = 'Email ou Senha incorreta'
}

