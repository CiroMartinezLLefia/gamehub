let incidencies = [
  {
    id: 1,
    titol: "Error d'inici de sessió",
    descripcio: "Els usuaris no poden iniciar sessió al sistema",
    estat: "obert",
    prioritat: "alta",
    dataCreacio: "2024-01-15",
    assignat: "Joan García",
  },
  {
    id: 2,
    titol: "Problema amb la impressora",
    descripcio: "La impressora de l'oficina no imprimeix correctament",
    estat: "en_proces",
    prioritat: "mitjana",
    dataCreacio: "2024-01-14",
    assignat: "Maria López",
  },
  {
    id: 3,
    titol: "Actualització de programari",
    descripcio: "Actualitzar el programari de seguretat dels ordinadors",
    estat: "tancat",
    prioritat: "baixa",
    dataCreacio: "2024-01-10",
    assignat: "Pere Martínez",
  }, 
  {
    id: 4,
    titol: "Caiguda del servidor",
    descripcio: "El servidor principal ha caigut i no està accessible",
    estat: "obert",
    prioritat: "alta",
    dataCreacio: "2024-01-16",
    assignat: "Laura Sánchez",
  }
];

const tbody = document.querySelector("#incidenciasTabla");
const btnAdd = document.querySelector("#btnAdd");
const formAdd = document.querySelector("#formAdd");
const formAddBody = document.querySelector("#formAddBody");

const modalAdd = new bootstrap.Modal(document.querySelector("#modalAdd"));
const modalEdit = new bootstrap.Modal(document.querySelector("#modalEdit"));

const formEditBody = document.querySelector("#formEditBody");
const formEdit = document.querySelector("#formEdit");
const filtreEstat = document.querySelector("#filtreEstat");
const filtrePrioritat = document.querySelector("#filtrePrioritat");
const limpiarFiltres = document.querySelector("#limparFiltros");

const incidenciasTotalTxt = document.querySelector("#incidenciasTotal");
const incidenciasAbiertasTxt = document.querySelector("#incidenciasAbiertas");
const incidenciasProcesoTxt = document.querySelector("#incidenciasProceso");
const incidenciasCerradasTxt = document.querySelector("#incidenciasCerradas");

let totalIncidencies;
let openIncidencies;
let inProcessIncidencies;
let closedIncidencies;
let cantIncidencies = incidencies.length;
let editIndex = null;

function renderIncidencies(lista = incidencies) {
    tbody.innerHTML = "";

    if (lista.length == 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" class="text-center">No hi ha incidències registrades.</td>
            </tr>
        `;
    } else {
        for (let i = 0; i < lista.length; i++) {
            const incidencia = lista[i];
            incidencia.id = i + 1;

            let prioritatClass = "";
            let estatClass = "";
            if (incidencia.prioritat == "alta") prioritatClass = "bg-danger";
            if (incidencia.prioritat == "mitjana") prioritatClass = "bg-warning text-dark";
            if (incidencia.prioritat == "baixa") prioritatClass = "bg-primary";
            if (incidencia.estat == "obert") estatClass = "bg-warning text-dark";
            if (incidencia.estat == "en_proces") estatClass = "bg-info text-dark";
            if (incidencia.estat == "tancat") estatClass = "bg-success";

            tbody.innerHTML += `
                <tr>
                    <td>${incidencia.id}</td>
                    <td>${incidencia.titol}</td>
                    <td>${incidencia.descripcio}</td>
                    <td><span class="badge ${estatClass}">${incidencia.estat}</span></td>
                    <td><span class="badge ${prioritatClass}">${incidencia.prioritat}</span></td>
                    <td>${incidencia.assignat}</td>
                    <td>${incidencia.dataCreacio}</td>
                    <td>
                        <button class="btn btn-sm btn-success" id="btnEdit${i}">Edita</button>
                        <button class="btn btn-sm btn-danger" id="btnDelete${i}">Elimina</button>
                    </td>
                </tr>
            `;
        }
    }
}

function updateContadores() {
    totalIncidencies = incidencies.length;
    openIncidencies = incidencies.filter(i => i.estat == "obert").length;
    inProcessIncidencies = incidencies.filter(i => i.estat == "en_proces").length;
    closedIncidencies = incidencies.filter(i => i.estat == "tancat").length;

    incidenciasTotalTxt.innerHTML = `${totalIncidencies}`;
    incidenciasAbiertasTxt.innerHTML = `${openIncidencies}`;
    incidenciasProcesoTxt.innerHTML = `${inProcessIncidencies}`;
    incidenciasCerradasTxt.innerHTML = `${closedIncidencies}`;
}

function aplicarFiltres() {
    const estatFiltre = filtreEstat.value;
    const prioritatFiltre = filtrePrioritat.value;

    const filtrades = incidencies.filter(incidencia => {
        const coincideixEstat = !estatFiltre || incidencia.estat == estatFiltre;
        const coincideixPrioritat = !prioritatFiltre || incidencia.prioritat == prioritatFiltre;
        return coincideixEstat && coincideixPrioritat;
    });

    renderIncidencies(filtrades);
}

tbody.addEventListener("click", function(event) {
    if (event.target.id.includes("btnEdit")) {
        editIndex = parseInt(event.target.id.replace("btnEdit", ""));
        const incidencia = incidencies[editIndex];

        document.querySelector("#editId").value = incidencia.id;
        document.querySelector("#editTitol").value = incidencia.titol;
        document.querySelector("#editDescripcio").value = incidencia.descripcio;
        document.querySelector("#editEstat").value = incidencia.estat;
        document.querySelector("#editPrioritat").value = incidencia.prioritat;
        document.querySelector("#editAssignat").value = incidencia.assignat;

        modalEdit.show();
    }

    if (event.target.id.includes("btnDelete")) {
        incidencies.splice(event.target.id.split("btnDelete")[1], 1);
        cantIncidencies--;
        updateContadores();
        aplicarFiltres();
    }
});

formEdit.addEventListener("click", function(event) {
    if (event.target.id.includes("btnSaveEdit")) {
        const titol = document.querySelector("#editTitol").value.trim();
        const descripcio = document.querySelector("#editDescripcio").value.trim();
        const estat = document.querySelector("#editEstat").value;
        const prioritat = document.querySelector("#editPrioritat").value;
        const assignat = document.querySelector("#editAssignat").value.trim();

        if (!titol || !descripcio || !estat || !prioritat || !assignat) {
            alert("Cal omplir tots els camps.");
            return;
        }

        incidencies[editIndex].titol = titol;
        incidencies[editIndex].descripcio = descripcio;
        incidencies[editIndex].estat = estat;
        incidencies[editIndex].prioritat = prioritat;
        incidencies[editIndex].assignat = assignat;

        updateContadores();
        aplicarFiltres();
        modalEdit.hide();
    }
});

formAdd.addEventListener("click", function(event) {
    if (event.target.id == "btnSave") {
        const titol = document.querySelector("#titol").value.trim();
        const descripcio = document.querySelector("#descripcio").value.trim();
        const estat = document.querySelector("#estat").value;
        const prioritat = document.querySelector("#prioritat").value;
        const assignat = document.querySelector("#assignat").value.trim();
        const dataCreacio = new Date().toISOString().split('T')[0];

        if (!titol || !descripcio || !estat || !prioritat || !assignat) {
            alert("Cal omplir tots els camps.");
            return;
        }

        incidencies.push({
            id: cantIncidencies + 1,
            titol,
            descripcio,
            estat,
            prioritat,
            dataCreacio,
            assignat
        });

        cantIncidencies++;
        updateContadores();
        aplicarFiltres();
        modalAdd.hide();        
        btnAdd.focus();
        formAddBody.reset();
    }

    if (event.target.id == "btnCancel") {
        modalAdd.hide();
        btnAdd.focus();
        formAddBody.reset();
    }
});

filtreEstat.addEventListener("change", aplicarFiltres);
filtrePrioritat.addEventListener("change", aplicarFiltres);
limpiarFiltres.addEventListener("click", function() {
    filtreEstat.value = "";
    filtrePrioritat.value = "";
    aplicarFiltres();
});

updateContadores();
renderIncidencies();