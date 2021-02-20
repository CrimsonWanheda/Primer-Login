var formulario = document.getElementById('formulario'),
    email = formulario.email,
    passwd = formulario.passwd,
    error = document.getElementById('error');

let is_valid = true;

function validarEmail(e){
    if(is_valid){
        if(email.value == '' || email.value == null){
            error.style.display = 'block';
            error.innerHTML += '<li><b>Agrega un correo</b></li>';
            e.preventDefault();
            is_valid = false;
        }
        else{
            error.style.display = 'none';
        }
    }
}

function validarContra(e){
    if(is_valid){
        if(passwd.value == '' || passwd.value == null){
            error.style.display = 'block';
            error.innerHTML += '<li><b>Agrega una contraseña</b></li>';
            e.preventDefault();
            is_valid = false;
        }
        else{
            error.style.display = 'none';
        }
    }
}


function validarFormulario(e){
    error.innerHTML = '';
    validarEmail(e);
    validarContra(e);
    is_valid = true;
}

formulario.addEventListener('submit', validarFormulario);