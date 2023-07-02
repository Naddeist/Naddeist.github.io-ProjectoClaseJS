var nombreOk = false;
    var apellidoOk = false;
    var edadOk = false;
    var correoOk = false;

    window.onload = function () {
        var everyInputs = document.getElementsByTagName('input');
        var resetButton = document.querySelector('input[type="reset"]');
        resetButton.addEventListener('click', resetForm);
        for (var i = 0; i < everyInputs.length; i++) {
            everyInputs[i].addEventListener('focus', estilo);
            everyInputs[i].addEventListener('blur', estilo);
            var nodoname = everyInputs[i].name;
            switch (nodoname) {
                case "nombre":
                    everyInputs[i].addEventListener('blur', validarNombre);
                    break;
                case "apellido":
                    everyInputs[i].addEventListener('blur', validarApellido);
                    break;
                case "edad":
                    everyInputs[i].addEventListener('blur', validarEdad);
                    break;
                case "correo":
                    everyInputs[i].addEventListener('blur', validarCorreo);
                    break;
                default:
                    break;
            }
        }
    }

    function estilo() {
        this.style.backgroundColor = "white";
    }

    function estilo2(inElement) {
        inElement.style.background = "transparent";
        inElement.nextElementSibling.src = "../formulario/imagenes/bien.png";
    }

    function estiloRojo(inElement) {
        inElement.style.backgroundColor = "red";
        inElement.nextElementSibling.src = "../formulario/imagenes/error.png";
    }

    function validarNombre() {
        var nombre = document.getElementById("nombre");
        var expresionRegular = /^\w{3,}$/;
        if (expresionRegular.test(nombre.value)) {
            nombreOk = true;
            estilo2(nombre);
        } else {
            nombreOk = false;
            estiloRojo(nombre);
        }
    }

    function validarApellido() {
        var apellido = document.getElementById("apellido");
        var expresionRegular = /^\w{3,}$/;
        if (expresionRegular.test(apellido.value)) {
            apellidoOk = true;
            estilo2(apellido);
        } else {
            apellidoOk = false;
            estiloRojo(apellido);
        }
    }

    function validarEdad() {
        var edad = document.getElementById("edad");
        if (edad.value > 15 && edad.value < 110) {
            edadOk = true;
            estilo2(edad);
        } else {
            edadOk = false;
            estiloRojo(edad);
        }
    }

    function validarCorreo() {
        var correo = document.getElementById("correo");
        var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (expresionRegular.test(correo.value)) {
            correoOk = true;
            estilo2(correo);
        } else {
            correoOk = false;
            estiloRojo(correo);
        }
    }

    function validarDatos() {
        var msg = 'Los datos que debe rectificar son:';

        if (nombreOk && apellidoOk && edadOk && correoOk) {
            alert("Has ingresado los datos correctamente y tu formulario sera enviado");
            return true;
        } else {
            if (!nombreOk) {
                msg += ' nombre';
            }
            if (!apellidoOk) {
                msg += ' apellido';
            }
            if (!edadOk) {
                msg += ' edad';
            }
            if (!correoOk) {
                msg += ' correo';
            }
            alert(msg);
            return false;
        }
    }
    function resetForm() {
      var everyInputs = document.getElementsByTagName('input');
      for (var i = 0; i < everyInputs.length; i++) {
          everyInputs[i].nextElementSibling.src = ""; 
          everyInputs[i].style.backgroundColor = "white"; 
      }
  }
  

    function sendEmail() {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "sender@gmail.com",
            Password: "contraseña",
            to: "receiver@gmail.com",
            From: "sender@gmail.com",
            Subject: "Mensaje enviado mediante Javascript",
            Body: "Cuerpo del mensaje a enviar",
        })
        .then(function (message){
        alert("Mensaje enviado correctamente");
        return false; // Evitar que el formulario se envíe
        })
    }