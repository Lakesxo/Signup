let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submitBtn = document.querySelector('#submit');

submitBtn.disabled = true

checkFields =()=> {
    if (email.value == '' || password.value == ''){
        submitBtn.disabled = true
    } else {
        submitBtn.disabled = false
    }
}

email.addEventListener('input', checkFields)
password.addEventListener('input', checkFields)