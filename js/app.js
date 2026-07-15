const app = document.getElementById("app");

app.innerHTML = `

<header class="navbar">

    <div class="logo">

        <img
            src="assets/logo/ecci.png"
            alt="Universidad ECCI"
            class="logo-ecci"
        >

        <div>

            <h3>Universidad ECCI</h3>

            <span>Programa de Lenguas Modernas</span>

        </div>

    </div>

    <nav>

    <a href="#" onclick="volverInicio()">Inicio</a>

    <a href="#" onclick="mostrar('ruta')">Ruta</a>

    <a href="#" onclick="mostrar('general')">General</a>

    <a href="#" onclick="mostrar('internacional')">Internacional</a>

    <a href="#" onclick="mostrar('iniciativa')">Iniciativa</a>

    <a href="#" onclick="mostrar('faq')">FAQ</a>

</nav>

</header>

<section class="hero">

<div class="overlay"></div>

<div class="hero-content">

<p class="universidad">${portal.universidad}</p>

<h1>${portal.titulo}</h1>

<h2>${portal.programa}</h2>

<p class="descripcion">

${portal.descripcion}

</p>

<div class="cards">

${portal.opciones.map(opcion=>`

<div class="card">

<div class="icono">${opcion.icono}</div>

<h3>${opcion.titulo}</h3>

<p>${opcion.descripcion}</p>

<button onclick="mostrar('${opcion.id}')">
Consultar
</button>

</div>

`).join("")}

</div>

</div>

</section>

<section class="buscador">

    <h2>🔍 Buscar información</h2>

    <input
        type="text"
        id="buscar"
        placeholder="Escribe una palabra como ARL, convenio, empresa o FR-PO-0023..."
        onkeyup="buscarInformacion()"
    >

</section>

<section id="resultadoBusqueda"></section>

<section class="inicio-practica">

<h2>🎯 Antes de iniciar tu práctica</h2>

<section class="dashboard">

<h2>📌 Información rápida</h2>

<div class="dashboard-grid">

<div class="dashboard-card" onclick="mostrar('general')">
<div class="dashboard-icon">🎓</div>
<h3>80 %</h3>
<p>Créditos mínimos aprobados</p>
</div>

<div class="dashboard-card">
<div class="dashboard-icon">⏱</div>
<h3>320–480</h3>
<p>Horas de práctica</p>
</div>

<div class="dashboard-card">
<div class="dashboard-icon">📄</div>
<h3>FR-PO-0023</h3>
<p>Formato institucional</p>
</div>

<div class="dashboard-card">
<div class="dashboard-icon">🛡️</div>
<h3>ARL</h3>
<p>Obligatoria antes de iniciar</p>
</div>

<div class="dashboard-card">
<div class="dashboard-icon">🏢</div>
<h3>Convenio</h3>
<p>Debe estar vigente o tramitarse</p>
</div>

<div class="dashboard-card">
<div class="dashboard-icon">✅</div>
<h3>Autorización</h3>
<p>No inicies sin aprobación del Programa</p>
</div>

</div>

</section>

<section class="proceso-practica">

<h2>📍 ¿En qué etapa del proceso estás?</h2>

<div class="progreso">

<div class="etapa completada">
<div class="circulo">1</div>
<p>Requisitos</p>
</div>

<div class="linea"></div>

<div class="etapa">
<div class="circulo">2</div>
<p>Empresa</p>
</div>

<div class="linea"></div>

<div class="etapa">
<div class="circulo">3</div>
<p>Documentos</p>
</div>

<div class="linea"></div>

<div class="etapa">
<div class="circulo">4</div>
<p>Aprobación</p>
</div>

<div class="linea"></div>

<div class="etapa">
<div class="circulo">5</div>
<p>Inicio</p>
</div>

</div>

</section>

<p class="intro">

Realiza estos cuatro pasos antes de comenzar tu proceso de práctica profesional.

</p>

<div class="pasos-grid">

<div class="paso-card">

<div class="numero">1</div>

<h3>Verifica los requisitos</h3>

<p>

Debes haber aprobado al menos el <strong>80 % de los créditos</strong> del programa.

</p>

</div>

<div class="paso-card">

<div class="numero">2</div>

<h3>Busca una empresa</h3>

<p>

Puedes gestionar tu propia empresa o participar en las oportunidades disponibles.

</p>

</div>

<div class="paso-card">

<div class="numero">3</div>

<h3>Solicita la revisión</h3>

<p>

El Programa verificará que el cargo y las funciones sean acordes con el perfil profesional.

</p>

</div>

<div class="paso-card">

<div class="numero">4</div>

<h3>Inicia tu práctica</h3>

<p>

Solo después de recibir la autorización institucional y cumplir todos los requisitos.

</p>

</div>

</div>

</section>

<section class="indicadores fade-up">

    <div class="indicador">

        <div class="icono-indicador">🎓</div>

        <h3 class="contador" data-numero="80">0</h3>

        <p>Créditos aprobados</p>

    </div>

    <div class="indicador">

        <div class="icono-indicador">⏱</div>

        <h3 class="contador" data-numero="320">0</h3>

<p>Horas mínimas</p>

    </div>

    <div class="indicador">

        <div class="icono-indicador">📄</div>

        <h3>FR-PO-0023</h3>

        <p>Formato obligatorio</p>

    </div>

    <div class="indicador">

        <div class="icono-indicador">🛡️</div>

        <h3>ARL</h3>

        <p>Afiliación obligatoria</p>

    </div>

</section>
<footer>

<p>

Programa de Lenguas Modernas · Universidad ECCI © 2026

</p>

</footer>

`;
function mostrar(seccion){

    const contenedor = document.getElementById("contenido");

    contenedor.style.opacity = 0;

    setTimeout(() => {

        contenedor.innerHTML = informacion[seccion];

const tarjetas = contenedor.querySelectorAll(
".info-card, .timeline-item"
);

tarjetas.forEach((card,index)=>{

card.style.animation="none";

card.offsetHeight;

card.style.animation=`aparecer .7s ease ${index*0.1}s both`;

});

contenedor.style.opacity=1;

        contenedor.scrollIntoView({
            behavior: "smooth"
        });

    }, 250);

}

function volverInicio(){

    document.getElementById("contenido").innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
window.onload=function(){

    animarContadores();

}
document.addEventListener("click", function(e){

    const boton = e.target.closest(".accordion-header");

    if(!boton) return;

    const body = boton.nextElementSibling;

    body.classList.toggle("open");

});
function animarContadores(){

    const contadores=document.querySelectorAll(".contador");

    contadores.forEach(contador=>{

        const objetivo=Number(contador.dataset.numero);

        let actual=0;

        const incremento=Math.ceil(objetivo/50);

        const timer=setInterval(()=>{

            actual+=incremento;

            if(actual>=objetivo){

                actual=objetivo;

                clearInterval(timer);

            }

            contador.textContent=actual;

        },30);

    });

}
function buscarInformacion(){

    const texto = document
        .getElementById("buscar")
        .value
        .toLowerCase()
        .trim();

    const resultado = document.getElementById("resultadoBusqueda");

    if(texto === ""){

        resultado.innerHTML = "";
        return;

    }

    let coincidencias = [];

    for(const seccion in informacion){

        if(informacion[seccion].toLowerCase().includes(texto)){

            coincidencias.push(seccion);

        }

    }

    if(coincidencias.length === 0){

        resultado.innerHTML = `
            <div class="info-card alerta">
                <h3>No se encontraron resultados</h3>
                <p>No existe información relacionada con "<strong>${texto}</strong>".</p>
            </div>
        `;

        return;

    }

    resultado.innerHTML = coincidencias.map(seccion => `

        <div class="info-card">

            <h3>${portal.opciones.find(op=>op.id===seccion)?.titulo ?? seccion}</h3>

            <button onclick="mostrar('${seccion}')">
                Abrir sección
            </button>

        </div>

    `).join("");

}
