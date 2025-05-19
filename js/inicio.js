// Información estática para las plantas
const plantas = {
    planta1: {
        nombre: "Elote",
        tipo: "Interior",
        estado: "Saludable",
        temperatura: "25°C",
        humedad: "60%",
        registros: [
            {
                nombre: "Riego",
                fecha: "10/05/2025"
            },
            {
                nombre: "Poda",
                fecha: "12/05/2025"
            },
            {
                nombre: "Fertilización",
                fecha: "15/05/2025"
            },
            {
                nombre: "Cambio de maceta",
                fecha: "20/05/2025"
            },
            {
                nombre: "Observación",
                fecha: "22/05/2025"
            }
        ]
    },
    planta2: {
        nombre: "Berenjena",
        tipo: "Exterior",
        estado: "En crecimiento",
        temperatura: "30°C",
        humedad: "50%",
        registros: [
            {
                dia: "10/05/2025",
                nombre: "Riego",
                fecha: "10/05/2025"
            },
            {
                dia: "10/06/2025",
                nombre: "Fertilización",
                fecha: "12/05/2025"
            },
            {
                dia: "10/07/2025",
                nombre: "Poda",
                fecha: "15/05/2025"
            }
        ]
    },
    planta3: {
        nombre: "Bell Pepper",
        tipo: "Interior",
        estado: "Floreciendo",
        temperatura: "28°C",
        humedad: "65%",
        registros: [
            {
                dia: "10/05/2025",
                nombre: "Riego",
                fecha: "10/05/2025"
            },
            {
                dia: "10/06/2025",
                nombre: "Fertilización",
                fecha: "12/05/2025"
            },
            {
                dia: "10/07/2025",
                nombre: "Cambio de maceta",
                fecha: "15/05/2025"
            }
        ]
    }
};

// Función para mostrar los registros de cada planta
function mostrarRegistros(idPlanta) {
    const sidebar = document.getElementById("sidebar");

    // Limpiar el contenido del sidebar
    sidebar.innerHTML = "";

    const regresarIcono = document.createElement("i");
    regresarIcono.className = "fas fa-arrow-left";
    regresarIcono.style.cursor = "pointer";
    regresarIcono.addEventListener("click", regresarPlantas);
    sidebar.appendChild(regresarIcono);
    const tituloPlantas = document.createElement("h2");
    tituloPlantas.innerText = `Registros de ${plantas[idPlanta].nombre}`;

    const divTitulo = document.createElement("div");
    divTitulo.className = "divPlantas";
    divTitulo.appendChild(regresarIcono);
    divTitulo.appendChild(tituloPlantas);
    sidebar.appendChild(divTitulo);

    plantas[idPlanta].registros.forEach(registro => {
        const divDetalles = document.createElement("div");
        divDetalles.className = "detallesPlanta";
        divDetalles.innerHTML = `
            <h3>${registro.nombre}</h3>
            <p>Fecha: ${registro.fecha}</p>
        `;
        divDetalles.addEventListener("click", () => {
            detallesRegistro(idPlanta);
        });
        sidebar.appendChild(divDetalles);
    });
}

// Función para mostrar los registros y detalles de una planta
function detallesRegistro(idPlanta) {
    const planta = plantas[idPlanta];
    document.getElementById("nombrePlanta").innerText = `Nombre: ${planta.nombre}`;
    document.getElementById("tipoPlanta").innerText = `Tipo: ${planta.tipo}`;
    document.getElementById("estadoPlanta").innerText = `Estado: ${planta.estado}`;
    document.getElementById("temperatura").innerText = `Temperatura: ${planta.temperatura}`;
    document.getElementById("humedad").innerText = `Humedad: ${planta.humedad}`;
    
    const registrosContainer = document.getElementById("registros");
    registrosContainer.innerHTML = "";
    planta.registros.forEach(registro => {
        const li = document.createElement("li");
        li.textContent = registro;
        registrosContainer.appendChild(li);
    });
}


function regresarPlantas() {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = `
        <h2>Plantas</h2>
            <div class="planta" id="planta1" onclick="mostrarRegistros('planta1')">
                <img src="recursos/img/plantas/planta1.webp" alt="Planta 1">
                <h3>Planta 1</h3>
            </div>
            <div class="planta" id="planta2" onclick="mostrarRegistros('planta2')">
                <img src="recursos/img/plantas/planta2.webp" alt="Planta 2">
                <h3>Planta 2</h3>
            </div>
            <div class="planta" id="planta3" onclick="mostrarRegistros('planta3')">
                <img src="recursos/img/plantas/planta3.png" alt="Planta 3">
                <h3>Planta 3</h3>
            </div>`;
}