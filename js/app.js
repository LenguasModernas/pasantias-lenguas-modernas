const app = document.getElementById("app");

app.innerHTML = `

<header class="navbar">

    <div class="logo">

        <div class="logo-circle">E</div>

        <div>

            <h3>Universidad ECCI</h3>

            <span>Programa de Lenguas Modernas</span>

        </div>

    </div>

    <nav>

        <a href="#">Inicio</a>

        <a href="#">General</a>

        <a href="#">Internacional</a>

        <a href="#">Iniciativa</a>

        <a href="#">FAQ</a>

    </nav>

</header>

<section class="hero">

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

<footer>

<p>

Programa de Lenguas Modernas · Universidad ECCI © 2026

</p>

</footer>

`;
function mostrar(seccion){

const contenedor=document.getElementById("contenido");

contenedor.innerHTML=informacion[seccion];

contenedor.scrollIntoView({

behavior:"smooth"

});

}
