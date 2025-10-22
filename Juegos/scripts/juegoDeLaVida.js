let matrizDiv = document.querySelector("#matriz");
let pause = false;
let btnPausa = document.querySelector("#btnPausa");
let velocidad = 1000;
btn1x = document.querySelector("#btn1x");
btn2x = document.querySelector("#btn2x");
btn3x = document.querySelector("#btn3x");
let intervalo;

btnPausa.addEventListener("click", () => {
    pause = !pause;
    btnPausa.innerHTML = pause ? "Reanudar" : "Pausar";
});

function crearMatriz(filas, columnas) {
    let matriz = [];
    for (let x = 0; x < filas; x++) {
        matriz[x] = [];
        for (let y = 0; y < columnas; y++) {
            matriz[x][y] = `${x},${y}`;
        }
    }
    return matriz;
}

function renderizarMatriz(matriz) {
    let html = "";
    let celda = "";
    for (let x = 0; x < matriz.length; x++) {
        html += `<div class="fila" id="fila${x}">`;
        for (let y = 0; y < matriz[x].length; y++) {
            celda = randomizarCasilla();
            html += `<div class="celda${celda}" id="celda${x}-${y}"></div>`;
        }
        html += `</div>`;
    }
    matrizDiv.innerHTML = html;
}

function randomizarCasilla() {
    return Math.random() < 0.1 ? "Viva" : "Muerta";
}

function actualizarMatriz() {
    let nuevasCeldas = [];
    for (let x = 0; x < matriz.length; x++) {
        nuevasCeldas[x] = [];
        for (let y = 0; y < matriz[x].length; y++) {
            let celda = document.querySelector(`#celda${x}-${y}`);
            let vecinosVivos = contarVecinosVivos(x, y, matriz);
            if (celda.classList.contains("celdaViva")) {
                if (vecinosVivos < 2 || vecinosVivos > 3) {
                    nuevasCeldas[x][y] = "Muerta";
                } else {
                    nuevasCeldas[x][y] = "Viva";
                }
            } else {
                if (vecinosVivos === 3) {
                    nuevasCeldas[x][y] = "Viva";
                } else {
                    nuevasCeldas[x][y] = "Muerta";
                }
            }
        }
    }
    
    for (let x = 0; x < matriz.length; x++) {
        for (let y = 0; y < matriz[x].length; y++) {
            let celda = document.querySelector(`#celda${x}-${y}`);
            celda.className = `celda${nuevasCeldas[x][y]}`;
        }
    }
    matriz = nuevasCeldas;
}

function contarVecinosVivos(x, y, matriz) {
    let vecinosVivos = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) continue;
            let nuevoX = x + i;
            let nuevoY = y + j;
            if (nuevoX >= 0 && nuevoX < matriz.length && nuevoY >= 0 && nuevoY < matriz[0].length) {
                let celda = document.querySelector(`#celda${nuevoX}-${nuevoY}`);
                if (celda.classList.contains("celdaViva")) {
                    vecinosVivos++;
                }
            }
        }
    }
    return vecinosVivos;
}

let matriz = crearMatriz(10, 20);
renderizarMatriz(matriz);

btn1x.addEventListener("click", () => cambiarVelocidad(1000, btn1x));
btn2x.addEventListener("click", () => cambiarVelocidad(500, btn2x));
btn3x.addEventListener("click", () => cambiarVelocidad(333, btn3x));

let btnPrevious = btn1x;
btn1x.disabled = true;

iniciarIntervalo();

function iniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        if (!pause) {
            actualizarMatriz();
        }
    }, velocidad);
}

function cambiarVelocidad(vel, boton) {
    velocidad = vel;
    iniciarIntervalo();

    boton.disabled = true;
    btnPrevious.disabled = false;
    btnPrevious = boton;
}

matrizDiv.addEventListener("click", revivirCelda);

function revivirCelda(event, x, y) {
    if (event.target.classList.contains("celdaMuerta") && pause) {
        event.target.className = "celdaViva";
    }
    else if (event.target.classList.contains("celdaViva") && pause) {
        event.target.className = "celdaMuerta";
    }
}