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

        contenedor.innerHTML = `
            <div class="contenedor-info">

                <button class="volver" onclick="volverInicio()">
                    <i class="fa-solid fa-arrow-left"></i> Volver
                </button>

                ${informacion[seccion]}

            </div>
        `;

        contenedor.style.opacity = 1;

        contenedor.scrollIntoView({
            behavior: "smooth"
        });

    }, 250);

}

function volverInicio(){

document.getElementById("contenido").innerHTML="";

window.scrollTo({

top:0,

behavior:"smooth"

});

}
function mostrarFAQ(){

    const contenedor = document.getElementById("contenido");

    contenedor.innerHTML = `

        <div class="contenedor-info">

            <h2>Preguntas Frecuentes</h2>

            <div class="accordion">

                <div class="accordion-item">

                    <button class="accordion-header">

                        ¿Cuántos créditos debo haber aprobado?

                    </button>

                    <div class="accordion-body">

                        Debes haber aprobado al menos el 80 % de los créditos del programa.

                    </div>

                </div>

                <div class="accordion-item">

                    <button class="accordion-header">

                        ¿Cuántas horas dura la pasantía?

                    </button>

                    <div class="accordion-body">

                        Entre 320 y 480 horas.

                    </div>

                </div>

                <div class="accordion-item">

                    <button class="accordion-header">

                        ¿Cuándo debo pagar la opción de grado?

                    </button>

                    <div class="accordion-body">

                        Solo después de que el Programa apruebe tu proceso.

                    </div>

                </div>

            </div>

        </div>

    `;

    contenedor.scrollIntoView({
        behavior: "smooth"
    });

}
    document.getElementById("contenido").innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
document.addEventListener("click",function(e){

if(e.target.classList.contains("accordion-header")){

const body=e.target.nextElementSibling;

body.classList.toggle("open");

}

});
