
/*VARIABLES QUERY*/
const inp = document.querySelector("#inputGuess");
const btn = document.querySelector("#btnComprobar");
const intentos = document.querySelector("#intentos");
const mensajes = document.querySelector("#mensajes");
const historial = document.querySelector("#historial");
const rachaText = document.querySelector("#racha");

/*VARIABLES BASICAS*/
const rangoMax = 20;
let numero;
let racha = 0;
let intentosRestantes = 5;
const intentosUsados = [];

/*INICIALIZAR QUERY*/
intentos.innerHTML = `<p>Intentos: ${intentosRestantes}</p>`;
mensajes.innerHTML = ``;
historial.innerHTML = ``;
rachaText.innerHTML = `<p>Racha de victorias: ${racha}</p>`

generar(rangoMax);

/*PULSAR ENTER PARA COMPROBAR*/
inp.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        comprobar();
    }
});

/*PULSAR BOTON PARA COMPROBAR*/
btn.addEventListener("click", comprobar);

/*FUNCION COMPROBAR*/
function comprobar()
{
    if (intentosRestantes > 0 && inp.value <= rangoMax && inp.value > 0 && !intentosUsados.includes(parseInt(inp.value))) {
        intentosUsados.push(parseInt(inp.value));
        if (inp.value > numero) {
            mensajes.innerHTML = `<p>Demasiado alto</p>`
            historial.innerHTML += `<p class = "verde">${inp.value} ↓</p>`
        } else if (inp.value < numero) {
            mensajes.innerHTML = `<p>Demasiado bajo</p>`
            historial.innerHTML += `<p class = "rojo">${inp.value} ↑</p>`
        } else if (inp.value == numero) {
            mensajes.innerHTML = `<p class = "verde">CORRECTO: EL NÚMERO ES ${numero}</p>`;
            racha++;
            reiniciar(6);
        }

        if (inp.value != numero) { 
            intentosRestantes--;
            if (intentosRestantes == 0) {
                mensajes.innerHTML = `<p class = "rojo">INCORRECTO: EL NÚMERO ERA ${numero}</p>`;  
                racha = 0;
                reiniciar(5);
            }
            intentos.innerHTML = `<p>Intentos: ${intentosRestantes}</p>`;
        }

    } else if (intentosUsados.includes(parseInt(inp.value))) {
        mensajes.innerHTML = `<p class = "rojo">NÚMERO YA USADO</p>`;
    } else {
        mensajes.innerHTML = `<p class = "rojo">NÚMERO NO VÁLIDO</p>`;
    }
    inp.value = null;
}

/*FUNCION GENERAR*/
function generar(max)
{
    numero = Math.floor(Math.random() * max) + 1;
}

/*FUNCION REINICIAR*/
function reiniciar(restantes)
{
    intentosUsados.length = 0;
    historial.innerHTML = ``;
    intentosRestantes = restantes;
    generar(rangoMax);
    rachaText.innerHTML = `<p>Racha de victorias: ${racha}</p>`;
    inp.value = null;
}