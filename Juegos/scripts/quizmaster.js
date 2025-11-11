const preguntas = [
    {
        pregunta: "¿Cuál es la capital de ESPAÑA?",
        respuestas: ["Madrid", "París", "Londres"],
        correcta: 0
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        respuestas: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el elemento químico con el símbolo 'O'?",
        respuestas: ["Oro", "Oxígeno", "Plata"],
        correcta: 1
    }, 
    {
        pregunta: "¿En qué año llegó el hombre a la Luna?",
        respuestas: ["1965", "1969", "1972"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Nilo", "Amazonas", "Yangtsé"],
        correcta: 1
    },
    {
        pregunta: "¿Quién pintó 'La Mona Lisa'?",
        respuestas: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        correcta: 2
    }, 
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuestas: ["Saturno", "Júpiter", "Neptuno"],
        correcta: 1
    },
    {
        pregunta: "¿Qué idioma se habla en Brasil?",
        respuestas: ["Español", "Portugués", "Inglés"],
        correcta: 1
    },
    {
        pregunta: "¿Quién es conocido como el 'Padre de la Física Moderna'?",
        respuestas: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es la moneda oficial de Japón?",
        respuestas: ["Yen", "Won", "Dólar"],
        correcta: 0
    }, 
    {
        pregunta: "¿Qué país tiene la mayor población del mundo?",
        respuestas: ["India", "China", "Estados Unidos"],
        correcta: 1
    }, 
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        respuestas: ["K2", "Everest", "Kangchenjunga"],
        correcta: 1
    }, 
    {
        pregunta: "¿Quién escribió 'Hamlet'?",
        respuestas: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        respuestas: ["Atlántico", "Índico", "Pacífico"],
        correcta: 2
    },
    {
        pregunta: "¿En qué país se encuentra la Torre Eiffel?",
        respuestas: ["Italia", "Francia", "Alemania"],
        correcta: 1
    }, 
    {
        pregunta: "¿Qué gas es esencial para la respiración humana?",
        respuestas: ["Nitrógeno", "Oxígeno", "Dióxido de carbono"],
        correcta: 1
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        respuestas: ["Thomas Jefferson", "George Washington", "Abraham Lincoln"],
        correcta: 1
    },
    {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        respuestas: ["Ag", "Au", "Gd"],
        correcta: 1
    },
    {
        pregunta: "¿Qué instrumento mide la presión atmosférica?",
        respuestas: ["Barómetro", "Termómetro", "Higrómetro"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo por superficie?",
        respuestas: ["Canadá", "China", "Rusia"],
        correcta: 2
    }
];

btnA = document.querySelector("#btnA");
btnB = document.querySelector("#btnB");
btnC = document.querySelector("#btnC");
btnTirarDado = document.querySelector("#btnTirarDado");

preguntaTxt = document.querySelector(".question-title");
numeroDado = document.querySelector(".dice-number");
preguntasRestantes = document.querySelector("#numeroPregunta");
player1Position = document.querySelector("#player1Position");
player2Position = document.querySelector("#player2Position");
progreso = document.querySelector("#progreso");
preguntasRestantes.innerHTML = `Pregunta 0 de 10`;
progreso.innerHTML = `0%`;
barraProgreso = document.querySelector(".progress-fill");
barraProgreso.style.width = "0%";
contador = document.querySelector("#contador");

let dado = 0;
let casillaActual1 = -1;
let casillaActual2 = -1;
let preguntasContestadas = 0;
let puedesPreguntar = true;
let puedesTirar = true;
let segundos = 0;
let ganaste = true;
contador.innerHTML = `⏱️ ${segundos}s`;

setInterval(() => {
    if (!ganaste)
    {
        segundos++;
        contador.innerHTML = `⏱️ ${segundos}s`;
    }
}, 1000);

function refrescarPregunta(indice) {
    if (indice > preguntas.length) indice = preguntas.length - 1;
    preguntaTxt.innerHTML = preguntas[indice].pregunta;
    btnA.innerHTML = `<span class="answer-letter">A)</span> ${preguntas[indice].respuestas[0]}`;
    btnB.innerHTML = `<span class="answer-letter">B)</span> ${preguntas[indice].respuestas[1]}`;
    btnC.innerHTML = `<span class="answer-letter">C)</span> ${preguntas[indice].respuestas[2]}`;
    player1Position.innerHTML = indice + 1;
    progreso.innerHTML = Math.round(((indice + 1) / preguntas.length) * 100) + "%";
    barraProgreso.style.width = ((indice + 1) / preguntas.length) * 100 + "%";
}

btnTirarDado.addEventListener("click", tirarDado);

btnA.addEventListener("click", () => responder(0, casillaActual1));
btnB.addEventListener("click", () => responder(1, casillaActual1));
btnC.addEventListener("click", () => responder(2, casillaActual1));

function responder(respuestaSeleccionada, jugador) {
    if (!puedesPreguntar) {
        console.log("tira el dado primero");
    } else if (respuestaSeleccionada == preguntas[jugador].correcta) {
        btnTirarDado.disabled = false;
        if (jugador == 19) {
            ganaste = true;
            preguntaTxt.innerHTML = `¡Has ganado!`;
            btnA.disabled = true;
            btnB.disabled = true;
            btnC.disabled = true;
            btnA.innerHTML = ``;
            btnB.innerHTML = ``;
            btnC.innerHTML = ``;
            btnTirarDado.disabled = true;
        }
        console.log("Respuesta correcta");
        preguntasContestadas++;
        preguntasRestantes.innerHTML = `Pregunta ${preguntasContestadas} de 10`;
        puedesTirar = true;
        puedesPreguntar = false;
    } else {
        console.log("Respuesta incorrecta");
        casillaActual1--;
        refrescarPregunta(casillaActual1);

        preguntasContestadas++;
        preguntasRestantes.innerHTML = `Pregunta ${preguntasContestadas} de 10`;
        puedesPreguntar = true;
    }
}

function tirarDado() {
    ganaste = false;
    if (!puedesTirar) {
        console.log("responde primero");
    } else{
        puedesPreguntar = true;
        puedesTirar = false;
        btnTirarDado.disabled = true;
        dado = Math.floor(Math.random() * 6) + 1;
        numeroDado.innerHTML = dado;

        casillaActual1 += dado;
        if (casillaActual1 > preguntas.length - 1) casillaActual1 = preguntas.length - 1;

        refrescarPregunta(casillaActual1);
    }
}