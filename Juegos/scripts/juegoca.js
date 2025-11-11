const casillas = [
    //36 casillas con coordenadas, index y power-ups (los power ups son: ir a una casilla especifica, perder turno, tirar de nuevo o nulo)
    {index: 1, x: 83, y: 314, powerUp: null},
    {index: 2, x: 89, y: 263, powerUp: 21},
    {index: 3, x: 92, y: 214, powerUp: null},
    {index: 4, x: 97, y: 170, powerUp: null},
    {index: 5, x: 99, y: 119, powerUp: "loseTurn"},
    {index: 6, x: 107, y: 73, powerUp: null},
    {index: 7, x: 159, y: 72, powerUp: 11},
    {index: 8, x: 211, y: 75, powerUp: null},
    {index: 9, x: 264, y: 76, powerUp: null},
    {index: 10, x: 304, y: 78, powerUp: null},
    {index: 11, x: 340, y: 73, powerUp: null},
    {index: 12, x: 407, y: 81, powerUp: 1},
    {index: 13, x: 413, y: 132, powerUp: null},
    {index: 14, x: 412, y: 185, powerUp: 29},
    {index: 15, x: 428, y: 242, powerUp: null},
    {index: 16, x: 429, y: 304, powerUp: null},
    {index: 17, x: 362, y: 307, powerUp: null},
    {index: 18, x: 289, y: 303, powerUp: "loseTurn"},
    {index: 19, x: 230, y: 301, powerUp: null},
    {index: 20, x: 168, y: 302, powerUp: null},
    {index: 21, x: 145, y: 255, powerUp: null},
    {index: 22, x: 145, y: 199, powerUp: 24},
    {index: 23, x: 155, y: 142, powerUp: null},
    {index: 24, x: 199, y: 125, powerUp: null},
    {index: 25, x: 252, y: 131, powerUp: 9},
    {index: 26, x: 303, y: 127, powerUp: null},
    {index: 27, x: 356, y: 124, powerUp: null},
    {index: 28, x: 364, y: 167, powerUp: null},
    {index: 29, x: 364, y: 196, powerUp: null},
    {index: 30, x: 361, y: 247, powerUp: 27},
    {index: 31, x: 304, y: 241, powerUp: "playAgain"},
    {index: 32, x: 249, y: 243, powerUp: null},
    {index: 33, x: 201, y: 239, powerUp: 20},
    {index: 34, x: 204, y: 182, powerUp: null},
    {index: 35, x: 254, y: 181, powerUp: null},
    {index: 36, x: 300, y: 183, powerUp: null}
]

const preguntas = [
  { pregunta: "¿Qué remanente estelar emite pulsos regulares de radio y rayos X debido a su rotación y campo magnético?", opciones: ["Enana blanca", "Estrella de neutrones", "Agujero negro"], correcta: 1 },
  { pregunta: "En lingüística, ¿qué caso marca al sujeto de una oración transitiva en lenguas ergativas?", opciones: ["Absolutivo", "Ergativo", "Nominativo"], correcta: 1 },
  { pregunta: "¿A qué eón pertenece el Período Ediacárico (hospedó los primeros organismos macroscópicos multicelulares)?", opciones: ["Proterozoico", "Arcaico", "Fanerozoico"], correcta: 0 },
  { pregunta: "¿Cuál es el valor aproximado de la constante de estructura fina (α), adimensional y fundamental en electrodinámica?", opciones: ["≈1/137", "≈1/12", "≈1/1000"], correcta: 0 },
  { pregunta: "¿Cómo se denomina la conjetura que postula la infinitud de pares de primos que difieren exactamente en 2?", opciones: ["Conjetura de Goldbach", "Conjetura de los primos gemelos", "Hipótesis de Riemann"], correcta: 1 },
  { pregunta: "En sistemas distribuidos, ¿qué teorema afirma que no es posible garantizar simultáneamente consistencia, disponibilidad y tolerancia a particiones?", opciones: ["Teorema FLP", "Teorema CAP", "Teorema de Bayes"], correcta: 1 },
  { pregunta: "¿Cuál es el nombre del desplazamiento lateral observado en reflexión total interna (un efecto óptico evanescente)?", opciones: ["Efecto Doppler", "Efecto Raman", "Desplazamiento Goos–Hänchen"], correcta: 2 },
  { pregunta: "¿Qué término describe la preferencia de un catalizador quirales por formar un enantiómero sobre otro (importante en síntesis asimétrica)?", opciones: ["Principio de Le Châtelier", "Selectividad enantioselectiva", "Regla de Markovnikov"], correcta: 1 },
  { pregunta: "En paleontología, ¿qué estructura fósil ramificada y microbiana suele interpretarse como comunidad microbiana (biofilm) fosilizada, muy antigua?", opciones: ["Trilobite", "Ediacaria", "Estromatolito"], correcta: 2 },
  { pregunta: "En teoría de grupos finitos, ¿cuál es el grupo simple no abeliano de menor orden?", opciones: ["A5 (alternante de 5 elementos)", "S3", "Z/7Z"], correcta: 0 },
  { pregunta: "Según el Código Internacional de Nomenclatura Zoológica, ¿qué es un holotipo?", opciones: ["El espécimen único en el que se basa la descripción original", "Cualquier espécimen de la misma especie", "Un espécimen conservado en alcohol"], correcta: 0 },
  { pregunta: "¿En qué siglo se compiló principalmente el 'Exeter Book', manuscrito anglosajón que contiene poesía como algunos elegías y acertijos?", opciones: ["IX siglo", "X siglo", "XI siglo"], correcta: 1 },
  { pregunta: "¿Qué escala cuantifica la explosividad de una erupción volcánica (considera volumen de tefra, altura de columna, etc.)?", opciones: ["Escala Richter", "VEI (Índice de Explosividad Volcánica)", "Escala Saffir–Simpson"], correcta: 1 },
  { pregunta: "En criptografía, ¿qué esquema ofrece seguridad perfecta cuando la clave es verdaderamente aleatoria y nunca se reutiliza?", opciones: ["RSA", "One-time pad", "AES"], correcta: 1 },
  { pregunta: "¿Qué litología ultramáfica es característica de secuencias ofiolíticas (remanente de corteza y manto oceánico obducido)?", opciones: ["Granito", "Peridotita/olivino", "Caliza"], correcta: 1 },
  { pregunta: "¿Qué tratado de 1494 fijó la línea de demarcación entre las esferas de influencia de España y Portugal?", opciones: ["Tratado de Tordesillas", "Paz de Westfalia", "Tratado de Utrecht"], correcta: 0 },
  { pregunta: "En teoría musical, ¿qué temperamento divide la octava exactamente en 12 semitonos iguales?", opciones: ["Temperamento mesotónico", "Temperamento igual", "Temperamento pitagórico"], correcta: 1 },
  { pregunta: "¿Qué autores formularon la teoría de la biogeografía de islas, que relaciona tamaño y aislamiento con riqueza de especies?", opciones: ["Ernst Haeckel", "Robert MacArthur y E. O. Wilson", "Alfred Russel Wallace"], correcta: 1 },
  { pregunta: "¿Qué principio establece la imposibilidad de conocer con precisión arbitraria posición y momento de una partícula simultáneamente?", opciones: ["Principio de exclusión de Pauli", "Principio de incertidumbre de Heisenberg", "Principio de correspondencia"], correcta: 1 },
  { pregunta: "¿Cómo se denomina el proceso por el cual genes se transfieren entre organismos no parentales (crucial en evolución microbiana)?", opciones: ["Herencia vertical", "Transferencia horizontal de genes", "Mutación puntual"], correcta: 1 },
  { pregunta: "En la formulación habitual de la transformada de Fourier unitaria, ¿qué factor de normalización aparece para conservar la norma (en convención simétrica)?", opciones: ["2π", "1/√(2π)", "e"], correcta: 1 },
  { pregunta: "En el Carbonífero, ¿qué clado de plantas arborescentes formó vastos bosques pantanosos (ej. Lepidodendron)?", opciones: ["Angiospermas", "Licopodios arborescentes (Lycopsida)", "Ginkgos"], correcta: 1 },
  { pregunta: "¿Qué isla es famosa por albergar la mayor diversidad de lenguas papúes (alto número de familias y lenguas no austronesias)?", opciones: ["Nueva Guinea", "Sumatra", "Borneo"], correcta: 0 },
  { pregunta: "¿Cuál de los siguientes es el primer ejemplo clásico de un número de Carmichael (compuesto que pasa ciertas pruebas de Fermat para todas las bases coprimas)?", opciones: ["561", "341", "91"], correcta: 0 },
  { pregunta: "¿Cómo se llama el proceso tectónico por el que la corteza oceánica desciende bajo otra placa y se introduce en el manto?", opciones: ["Rifting", "Subducción", "Obducción"], correcta: 1 },
  { pregunta: "¿Qué término describe la versión cuneiforme utilizada para escribir el acadio (idioma semítico de la antigua Mesopotamia)?", opciones: ["Cuneiforme sumerio", "Cuneiforme acadio", "Linear B"], correcta: 1 },
  { pregunta: "¿Qué relación termodinámica conecta la energía libre de Gibbs con la constante de equilibrio K (a temperatura T)?", opciones: ["Ley de Hess", "ΔG = -RT ln K", "Ley de Raoult"], correcta: 1 },
  { pregunta: "En detección de exoplanetas, ¿qué técnica se basa en medir el desplazamiento Doppler de las líneas espectrales estelares por la gravedad planetaria?", opciones: ["Tránsito", "Velocidad radial (Doppler)", "Microlente gravitatoria"], correcta: 1 },
  { pregunta: "¿Qué convención internacional de 1951 define y establece el estatuto legal del refugiado?", opciones: ["Convención de Ginebra de 1951 sobre refugiados", "Pacto de Versalles", "Tratado de Roma"], correcta: 0 },
  { pregunta: "¿Qué fósil jurásico/terciario es clásico por mostrar rasgos intermedios entre dinosaurios terópodos y aves?", opciones: ["Archaeopteryx", "Ichthyosaurio", "Plesiosaurio"], correcta: 0 },
  { pregunta: "¿Quién demostró que en cualquier teoría aritmética consistente y recursivamente axiomatizable existen proposiciones verdaderas pero indecidibles dentro del sistema (teorema de incompletitud)?", opciones: ["Kurt Gödel", "Alan Turing", "Alonzo Church"], correcta: 0 },
  { pregunta: "En botánica, ¿qué tipo de nerviación foliar es característica de la mayoría de las monocotiledóneas (p. ej. gramíneas)?", opciones: ["Pinnada", "Palmada", "Paralela"], correcta: 2 },
  { pregunta: "¿Qué función zeta, central en la teoría analítica de números, está relacionada con la distribución de los números primos?", opciones: ["Función zeta de Riemann", "Función eta de Dirichlet", "Función gamma"], correcta: 0 },
  { pregunta: "¿Qué hormona antidiurética regula la permeabilidad de los túbulos colectores renales (osmorregulación y reabsorción de agua)?", opciones: ["Insulina", "Vasopresina (ADH)", "Adrenalina"], correcta: 1 },
  { pregunta: "En notación musical medieval, ¿qué sistema usaba conceptos como 'tempus' y 'prolatio' para definir duraciones relativas?", opciones: ["Notación mensural", "Notación neumática", "Notación moderna"], correcta: 0 },
  { pregunta: "¿Qué teorema caracteriza los grafos planares al afirmar que un grafo es no planar si y solo si contiene una subdivisión de K5 o K3,3?", opciones: ["Teorema de Kuratowski", "Fórmula de Euler", "Teorema de Ramsey"], correcta: 0 }
];

const turnoText = document.querySelector('.turnoText')
const tablero = document.querySelector('.tablero')

const imgDadoJ1 = document.querySelector('#imgDadoJ1')
const btnDadoJ1 = document.querySelector('#btnDadoJ1')

const imgDadoJ2 = document.querySelector('#imgDadoJ2')
const btnDadoJ2 = document.querySelector('#btnDadoJ2')

btnDadoJ1.addEventListener("click", () => tirarDado(true));
btnDadoJ2.addEventListener("click", () => tirarDado(false));

let turno = 1;
let random = 0;

function tirarDado(dado) {
    let imgDado = dado ? imgDadoJ1 : imgDadoJ2;
    random = Math.floor(Math.random() * 6) + 1;
    let previous = 0;

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            while (random == previous)
            {
                random = Math.floor(Math.random() * 6) + 1;
            }
            previous = random;
            imgDado.innerHTML = `<img src="imagenes/dado1/dado${random}.png" alt="dado" class="tirando">`;            
            
            if (i === 4) {
                turno = turno == 1 ? 2 : 1;
                actualizarTurno();
            }
        }, i * 400);
    }
}

function actualizarTurno()
{
    if (turno == 1) {
        document.body.classList.add('bodyJ1');
        document.body.classList.remove('bodyJ2');
        turnoText.textContent = "Turno del Jugador 1";
        moverFicha(2, random);
        btnDadoJ1.disabled = false;
        btnDadoJ2.disabled = true;
    } else {
        document.body.classList.add('bodyJ2');
        document.body.classList.remove('bodyJ1');
        turnoText.textContent = "Turno del Jugador 2";
        moverFicha(1, random);
        btnDadoJ1.disabled = true;
        btnDadoJ2.disabled = false;
    }
}

const fichaJ1 = document.querySelector('#fichaJ1');
const fichaJ2 = document.querySelector('#fichaJ2');
let posicionFichaJ1 = 0;
let posicionFichaJ2 = 0;

moverFicha(1, 0);
moverFicha(2, 0);

function moverFicha(jugador, pasos) {
    if (jugador === 1) {
        posicionFichaJ1 += pasos;
        if (posicionFichaJ1 > 36) posicionFichaJ1 = 36; // Limitar a la última casilla
        if (posicionFichaJ1 < 1) posicionFichaJ1 = 1; // Asegurar que no sea menor que 1
        const casilla = casillas[posicionFichaJ1 - 1];
        fichaJ1.style.left = `${casilla.x}px`;
        fichaJ1.style.top = `${casilla.y}px`;
        fichaJ1.style.transform = `translate(-50%, -50%)`;
        setTimeout(() => {
            if (typeof casilla.powerUp === 'number') {
                posicionFichaJ1 = casilla.powerUp;
                const casillaPowerUp = casillas[posicionFichaJ1 - 1];
                fichaJ1.style.left = `${casillaPowerUp.x}px`;
                fichaJ1.style.top = `${casillaPowerUp.y}px`;
                fichaJ1.style.transform = `translate(-50%, -50%)`;
            }
        }, 1000); // Esperar 1000ms antes de verificar el powerUp
    } else {
        posicionFichaJ2 += pasos;
        if (posicionFichaJ2 > 36) posicionFichaJ2 = 36; // Limitar a la última casilla
        if (posicionFichaJ2 < 1) posicionFichaJ2 = 1; // Asegurar que no sea menor que 1
        const casilla = casillas[posicionFichaJ2 - 1];
        fichaJ2.style.left = `${casilla.x}px`;
        fichaJ2.style.top = `${casilla.y}px`;
        fichaJ2.style.transform = `translate(-70%, -60%)`;
        setTimeout(() => {
            if (typeof casilla.powerUp === 'number') {
                posicionFichaJ2 = casilla.powerUp;
                const casillaPowerUp = casillas[posicionFichaJ2 - 1];
                fichaJ2.style.left = `${casillaPowerUp.x}px`;
                fichaJ2.style.top = `${casillaPowerUp.y}px`;
                fichaJ2.style.transform = `translate(-70%, -60%)`;
            }
        }, 1000); // Esperar 1000ms antes de verificar el powerUp
    }
}

function moverseA(posicion, jugador) {
    
}