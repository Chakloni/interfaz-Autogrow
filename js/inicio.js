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
    sidebar.innerHTML = "";

    const regresarIcono = document.createElement("i");
    regresarIcono.className = "fas fa-arrow-left";
    regresarIcono.style.cursor = "pointer";
    regresarIcono.addEventListener("click", regresarPlantas);
    sidebar.appendChild(regresarIcono);

    const divTitulo = document.createElement("div");
    const tituloPlantas = document.createElement("h2");
    tituloPlantas.innerText = `Registros de ${plantas[idPlanta].nombre}`;
    sidebar.appendChild(divTitulo);
    
    divTitulo.className = "divPlantas";
    divTitulo.appendChild(regresarIcono);
    divTitulo.appendChild(tituloPlantas);

    plantas[idPlanta].registros.forEach(registro => {
        const divDetalles = document.createElement("div");
        divDetalles.className = "detallesPlanta";
        divDetalles.innerHTML = `
            <h3>${registro.nombre}</h3>
            <p>Fecha: ${registro.fecha}</p>
        `;
        divDetalles.addEventListener("click", () => detallesRegistro(idPlanta, registro));
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

function detallesRegistro(idPlanta, registro) {
    const planta = plantas[idPlanta];
    
    // Mostrar datos del registro
    const datosRegistro = document.getElementById("datosRegistro");
    datosRegistro.innerHTML = `
        <h3>Detalles del Registro</h3>
        <p>Observacion: ${registro.nombre}</p>
        <p>Fecha: ${registro.fecha}</p>
        <p>Humedad: ${planta.humedad}</p>
        <p>Crecimiento: 30%</p>
    `;

    // Mostrar imagen de la planta
    const fotoPlanta = document.getElementById("fotoPlanta");
    fotoPlanta.src = `recursos/img/plantas/elote/${idPlanta}.jpg`;
    fotoPlanta.alt = `Foto de ${planta.nombre}`;

    // Configurar y mostrar gráfica de humedad
    const ctxHumedad = document.getElementById("graficaHumedad").getContext("2d");
    new Chart(ctxHumedad, {
        type: "line",
        data: {
            labels: ["Día 1", "Día 2", "Día 3", "Día 4", "Día 5"],
            datasets: [{
                label: "Humedad",
                data: [60, 65, 55, 70, parseInt(planta.humedad)],
                borderColor: "#4caf50",
                borderWidth: 2,
                fill: false,
                tension: 0.2,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                }
            }
        }
    });

    // Configurar y mostrar gráfica de crecimiento
    const ctxCrecimiento = document.getElementById("graficaCrecimiento").getContext("2d");
    new Chart(ctxCrecimiento, {
        type: "bar",
        data: {
            labels: ["Día 1", "Día 2", "Día 3", "Día 4", "Día 5"],
            datasets: [{
                label: "Crecimiento",
                data: [20, 30, 40, 50, 30],
                backgroundColor: "#2196f3",
                borderRadius: 5,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                }
            }
        }
    });

    // Mostrar el contenedor de detalles
    document.getElementById("detalleRegistro").style.display = "flex";
}
