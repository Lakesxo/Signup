let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#cpassword');
let checkbox = document.querySelector('#confam');
let submitBtn = document.querySelector('#submit');
let errorText = document.querySelector('#error');
let errorMessage = 'Password do not match !';
let errLength = document.querySelector('#length');
let errLengthText = 'Password must be 8 characters long !';
let loader = document.querySelector('#spin');

submitBtn.disabled = true;
loader.style.display = 'none'

checkAllFields =()=> {
    if (firstName.value == '' || lastName.value == '' || email.value == '' || password.value == '' || confirmPassword.value == ''){
        submitBtn.disabled = true
    } else if (firstName.value == '' || lastName.value == '' || email.value == '' || password.value == '' || confirmPassword.value == '' || document.querySelector('#password').value == document.querySelector('#cpassword').value) {
        submitBtn.disabled = false
    }
}

passCheck =()=> {
    if (document.querySelector('#password').value != document.querySelector('#cpassword').value){
        errorText.innerHTML = errorMessage;
        submitBtn.disabled = true
    } else if (document.querySelector('#password').value == document.querySelector('#cpassword').value) {
        errorText.innerHTML = ''
    }
}

passLength =()=> {
    if (document.querySelector('#password').value.length < 8){
        errLength.innerHTML = errLengthText
        submitBtn.disabled = true
    } else {
        errLength.innerHTML = ''
    }
}

loaderFunc =()=> {
    loader.style.display = 'inline-block';
    submitBtn.value = 'Signing Up'
    setTimeout(()=>{
        loader.style.display = 'none'
        submitBtn.value = 'Completed !'
    }, 3000)
    setTimeout(()=> location.reload(), 5000)
}

confirmPassword.addEventListener('input', passCheck);
password.addEventListener('input', passLength);
firstName.addEventListener('input', checkAllFields)
lastName.addEventListener('input', checkAllFields)
email.addEventListener('input', checkAllFields)
password.addEventListener('input', checkAllFields)
confirmPassword.addEventListener('input', checkAllFields)
submitBtn.addEventListener('click', loaderFunc)