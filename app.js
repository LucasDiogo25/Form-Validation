//DOM Elements
const nameElem = document.getElementById('name');
const emailElem = document.getElementById('email');
const passwordElem = document.getElementById('password');
const confirmPasswordElem = document.getElementById('confirm-password');
const cepElem = document.getElementById('cep');
const terms = document.getElementById('terms');
const form = document.getElementById('form');

form.addEventListener('submit', handleForm);

function handleForm(event){
    event.preventDefault();
    verifyInputs();
}

function verifyInputs(){
    //get the user inputted values
    const name = nameElem.value.trim();  //trim is used to remove whitespaces from both ends (if user enters them)
    const email = emailElem.value.trim();
    const password = passwordElem.value.trim();
    const confirmPassword = confirmPasswordElem.value.trim();
    const cep = cepElem.value.trim();

    if(name === ''){
        //display error and add error class
        dealErrorFor(nameElem, 'Nome não pode ser vazio');
    }else {
        //add success class
        dealSuccessFor(nameElem);
    }

    if(email === ''){
        dealErrorFor(emailElem, 'Email não pode ser vazio');
    }else if(!checkEmail(email)){
        dealErrorFor(emailElem, 'Esse email não é válido')
    }
    else {
        dealSuccessFor(emailElem);
    }

    if(password === ''){
        dealErrorFor(passwordElem, 'Senha não pode ser vazia');
    }else {
        dealSuccessFor(passwordElem);
    }

    if(confirmPassword === ''){
        dealErrorFor(confirmPasswordElem, 'É necessário confirmar a senha');
    }else if(password !== confirmPassword){
        dealErrorFor(confirmPassword, `Senha não confere`);
    }else {
        dealSuccessFor(confirmPasswordElem);
    }

    if(cep === ''){
        dealErrorFor(cepElem, 'CEP não pode ser vazio');
    }else if(!checkCEP(cep)){
        dealErrorFor(cepElem, 'CEP inválido');
    }else {
        dealSuccessFor(cepElem);
    }

    if(!terms.checked){
        document.querySelector('.tNc').style.color = 'red';
    }else {
        document.querySelector('.tNc').style.color = 'black';
    }
}

function dealErrorFor(element, message){
    const row = element.parentElement;
    const small = row.querySelector('small');

    row.className = 'row error';
    small.innerText = message;
}

function dealSuccessFor(input){
    const row = input.parentElement;
    row.className = 'row success';
}

function checkEmail(email){
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function checkCEP(cep){
    const regex = /^[0-9]{5}-[0-9]{3}$/;
    return regex.test(cep);
}