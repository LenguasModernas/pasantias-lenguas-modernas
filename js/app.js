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

<section class="indicadores fade-up">

    <div class="indicador">

        <div class="icono-indicador">🎓</div>

        <h3 class="contador" data-numero="80">0</h3>
<p>Créditos aprobados</p>

        <p>Créditos aprobados</p>

    </div>

    <div class="indicador">

        <div class="icono-indicador">⏱</div>

        <h3 class="contador" data-numero="320">0</h3>
<p>Horas mínimas</p>

        <p>Horas de práctica</p>

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
