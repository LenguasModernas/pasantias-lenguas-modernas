const app = document.getElementById("app");

app.innerHTML = `

<header class="hero">

    <div class="hero-content">

        <p class="universidad">${portal.universidad}</p>

        <h1>${portal.titulo}</h1>

        <h2>${portal.programa}</h2>

        <p class="descripcion">

            ${portal.descripcion}

        </p>

        <section class="cards">

            ${portal.opciones.map(opcion => `

                <article class="card">

                    <div class="icono">${opcion.icono}</div>

                    <h3>${opcion.titulo}</h3>

                    <p>${opcion.descripcion}</p>

                </article>

            `).join("")}

        </section>

    </div>

</header>

`;
