let numeroAzar = Math.floor(Math.random()*100) + 1;

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');

let intentos = 0

function chequearNumero(){
    intentos++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100';
        mensaje.style.color = 'red';
        return
    }

    if(numeroIngresado == numeroAzar){
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número!';
        mensaje.style.color = 'green';
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Mas alto! El número que ingresaste es bajo'
        mensaje.style.color = 'orange'
    }else{
        mensaje.textContent = '¡Mas bajo! El número que ingresaste es alto'
        mensaje.style.color = 'orange'
    }

}


console.log(numeroAzar)