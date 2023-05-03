
const urlParam = new URLSearchParams(window.location.search)
let idTelas = urlParam.get('id')


if(idTelas == 'login'){
    const inputs = document.querySelectorAll('.form-login')
    inputs.forEach(input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
    })

}else{
    const inputs = document.querySelectorAll('.form-signup')
    inputs.forEach(input => {
        input.addEventListener('blur', (evento) => {
            valida(evento.target)
        })
    })
}

async function valida(input) {
    const tipoDeInput = input.dataset.tipo


    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
    
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    password: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve ter no mínimo 6 caracteres, letra maiúscula, número e letra minuscula.'
    }
}


function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}






