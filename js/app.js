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
<section class="indicadores">

    <div class="indicador">

        <div class="icono-indicador">🎓</div>

        <h3>80 %</h3>

        <p>Créditos aprobados</p>

    </div>

    <div class="indicador">

        <div class="icono-indicador">⏱</div>

        <h3>320–480</h3>

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

        contenedor.style.opacity = 1;

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
