console.log("MUNDO IR A DONDE DAR GANA")
alert("HOLA MUNDO")

function saludar() {
    var nombre = document.getElementById("nombreInput").value.trim();
    var saludo = document.getElementById("saludo");
    if (nombre === "") {
        saludo.textContent = "Por favor, ingrese su nombre.";
        } 
    else {
        saludo.textContent = "¡Hola, " + nombre + "!";
        }
    }
