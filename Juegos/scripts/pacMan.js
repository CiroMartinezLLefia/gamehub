let matrizDiv = document.querySelector("#matriz");
let levelDiv = document.querySelector("#level");
let puntosDiv = document.querySelector("#puntos");
let timerDiv = document.querySelector("#timer");
let tituloDiv = document.querySelector("#titulo");
let celdaMod;
let coordenadaJugadorX = 4;
let coordenadaJugadorY = 4;
let limiteMatriz = 5;
let estrellasRestantes;
let estrellasPosiciones = [];
let estrellaX;
let estrellaY;
let level = 0;
let maxLevel = 4;
let puntos = 0;
let matriz = [];
let tablero;
let fin = false;

levelDiv.innerHTML = `Nivel: ${level}`;
puntosDiv.innerHTML = `Puntos: ${puntos}`;

/*timer*/
let tiempo = 0;
timerDiv.innerHTML = `Tiempo: ${tiempo} segundos`;

timerStart = setInterval(() => {
    tiempo += 1;
    timerDiv.innerHTML = `Tiempo: ${tiempo} segundos`;
}, 1000);

function crearMatriz(filas, columnas) {
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = `${i},${j}`;
        }
    }
    return matriz;
}

function insertarEntidades(coordenadaX, coordenadaY, entidad) {
    celdaMod = document.querySelector(`#celda${coordenadaX}-${coordenadaY}`);
    celdaMod.innerHTML = `<div class="${entidad}" id="entidad">${entidad}</div>`;
}

function renderizarMatriz(matriz) {
    let html = "";
    for (let i = 0; i < matriz.length; i++) {
        html += `<div class="fila" id="fila${i}">`;
        for (let j = 0; j < matriz[i].length; j++) {
            html += `<div class="celda" id="celda${i}-${j}"></div>`;
        }
        html += `</div>`;
    }
    matrizDiv.innerHTML = html;
}

newLevel();

function controles(tecla, direccion, axis, rotation) {
    addEventListener("keydown", function (event) {
        if (event.key === tecla) {
            event.preventDefault();

            if (!fin) {
                insertarEntidades(coordenadaJugadorY, coordenadaJugadorX, "");

                if (axis === "y" && (coordenadaJugadorY + direccion >= 0 && coordenadaJugadorY + direccion <= limiteMatriz)) {
                    coordenadaJugadorY += direccion;
                } else if (axis === "x" && (coordenadaJugadorX + direccion >= 0 && coordenadaJugadorX + direccion <= limiteMatriz)) {
                    coordenadaJugadorX += direccion;
                }
                let entidadDiv = document.querySelector(`#celda${coordenadaJugadorY}-${coordenadaJugadorX} #entidad`);

                if (entidadDiv && entidadDiv.className === "★") {
                    estrellasRestantes -= 1;
                    puntos += 100;
                    puntosDiv.innerHTML = `Puntos: ${puntos}`;

                    let index = estrellasPosiciones.indexOf(`${coordenadaJugadorX},${coordenadaJugadorY}`);
                    if (index > -1) estrellasPosiciones.splice(index, 1);
                }

                insertarEntidades(coordenadaJugadorY, coordenadaJugadorX, "⍩⃝");
                entidadDiv = document.querySelector(`#celda${coordenadaJugadorY}-${coordenadaJugadorX} #entidad`);
                entidadDiv.className = `entidad ${rotation}`;

                if (estrellasRestantes == 0) {
                    newLevel();
                }
            }
        }
    });
}


controles("w", -1, "y", "⍩⃝up");
controles("s", 1, "y", "⍩⃝down");
controles("a", -1, "x", "⍩⃝left");
controles("d", 1, "x", "⍩⃝right");

function newLevel() {
    if (level < maxLevel) {
        level += 1;
        levelDiv.innerHTML = `Nivel: ${level}`;
    } else {
        levelDiv.innerHTML = `COMPLETASTE EL JUEGO!`;
        clearInterval(timerStart);
        fin = true;
        renderizarMatriz(tablero);
        coordenadaJugadorY = 0;
        coordenadaJugadorX = 0;
        let anim = "⍩⃝";
        endAnimation = setInterval(() => {
            insertarEntidades(coordenadaJugadorY, coordenadaJugadorX, anim);
            coordenadaJugadorX++;
            if (coordenadaJugadorX > limiteMatriz) {
                coordenadaJugadorX = 0;
                coordenadaJugadorY++;
                if (coordenadaJugadorY > limiteMatriz) {
                    coordenadaJugadorY = 0;
                    coordenadaJugadorX = 0;
                    if (anim == "⍩⃝") {
                        anim = "";
                    } else {
                        anim = "⍩⃝";
                    }
                }
            }
        }, 30);
    }

    if (!fin){
        limiteMatriz = 5 + level;
        estrellasRestantes = 3 + level;
        estrellasPosiciones = [];
        coordenadaJugadorX = Math.floor(limiteMatriz / 2);
        coordenadaJugadorY = Math.floor(limiteMatriz / 2);

        tablero = crearMatriz(limiteMatriz + 1, limiteMatriz + 1);
        renderizarMatriz(tablero);

        insertarEntidades(coordenadaJugadorY, coordenadaJugadorX, "⍩⃝");
        let entidadDiv = document.querySelector(`#celda${coordenadaJugadorY}-${coordenadaJugadorX} #entidad`);
        if (entidadDiv) {
            entidadDiv.className = `entidad ⍩⃝up`;
        }

        for (let i = 0; i < estrellasRestantes; i++) {
            estrellaX = Math.floor(Math.random() * (limiteMatriz + 1));
            estrellaY = Math.floor(Math.random() * (limiteMatriz + 1));
            if ((estrellaX == coordenadaJugadorX && estrellaY == coordenadaJugadorY) || estrellasPosiciones.includes(`${estrellaX},${estrellaY}`)) {
                i--;
            } else {
                insertarEntidades(estrellaY, estrellaX, "★");
                estrellasPosiciones.push(`${estrellaX},${estrellaY}`);
            }
        }
    }
};