function validarEmail(elemento) {

    var texto = document.getElementById('correo').value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(texto)) {
        //document.getElementById("resultado").innerHTML = "Correo invalido";
        alert("Correo no valido");
    } else {
        //document.getElementById("resultado").innerHTML = "";
        alert("Correo valido");
    }

}

function validarEmail2(elemento2) {
    var texto2 = document.getElementById('email').value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(texto2)) {
        //document.getElementById("resultado").innerHTML = "Correo invalido";
        alert("Correo no valido");
    } else {
        //document.getElementById("resultado").innerHTML = "";
        alert("Correo valido");
    }

}