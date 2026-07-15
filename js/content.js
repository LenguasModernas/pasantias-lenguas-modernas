const portal = {

    universidad: "Universidad ECCI",

    titulo: "Portal de Prácticas y Pasantías",

    programa: "Programa de Lenguas Modernas",

    descripcion:
        "Encuentra toda la información oficial para realizar tu práctica profesional o pasantía de forma clara, organizada y paso a paso.",

    opciones: [

        {

            id: "ruta",

            icono: '<i class="fa-solid fa-route"></i>',

            titulo: "Ruta del Estudiante",

            descripcion:
                "Conoce paso a paso el proceso para iniciar tu práctica."

        },

        {

            id: "general",

            icono: '<i class="fa-solid fa-graduation-cap"></i>',

            titulo: "Pasantía Nacional",

            descripcion:
                "Requisitos, documentos y procedimiento institucional."

        },

        {

            id: "internacional",

            icono: '<i class="fa-solid fa-earth-americas"></i>',

            titulo: "Pasantía Internacional",

            descripcion:
                "Información sobre movilidad y prácticas en el exterior."

        },

        {

            id: "iniciativa",

            icono: '<i class="fa-solid fa-building"></i>',

            titulo: "Pasantía por iniciativa propia",

            descripcion:
                "Postúlate con una empresa de tu interés."

        },

        {

            id: "faq",

            icono: '<i class="fa-solid fa-circle-question"></i>',

            titulo: "Preguntas frecuentes",

            descripcion:
                "Resuelve las dudas más comunes."

        }

    ]

};

const informacion = {

ruta: `

<div class="contenedor-info">

<h2>🧭 Ruta del Estudiante</h2>

<p class="intro">

Sigue esta ruta para realizar tu práctica o pasantía de manera correcta y evitar retrasos en el proceso.

</p>

<div class="timeline">

<div class="timeline-item">

<h3>1. Verifica los requisitos</h3>

<p>
Debes haber aprobado al menos el 80 % de los créditos del programa.
</p>

</div>

<div class="timeline-item">

<h3>2. Consigue una empresa</h3>

<p>
Puedes postularte a ofertas existentes o gestionar una empresa por iniciativa propia.
</p>

</div>

<div class="timeline-item">

<h3>3. Solicita la revisión del cargo</h3>

<p>
El Programa verificará que las funciones correspondan al perfil profesional del programa.
</p>

</div>

<div class="timeline-item">

<h3>4. Radica los documentos</h3>

<p>
Entrega la documentación requerida para iniciar el proceso institucional.
</p>

</div>

<div class="timeline-item">

<h3>5. Espera la autorización</h3>

<p>
Solo podrás iniciar cuando recibas la aprobación del Programa y se formalice el proceso.
</p>

</div>

</div>

`,
    
general: `

<div class="contenedor-info">

<h2>🎓 Pasantía Nacional</h2>

<p class="intro">
La pasantía nacional es una opción de grado que permite al estudiante aplicar sus conocimientos en un entorno profesional mediante un convenio entre la Universidad ECCI y una organización.
</p>

<div class="info-card">

<h3>✅ Requisitos</h3>

<ul>

<li>Tener aprobado al menos el <strong>80 % de los créditos</strong>.</li>

<li>Contar con una empresa interesada.</li>

<li>Las funciones deben estar relacionadas con el perfil profesional del programa.</li>

<li>Radicar la documentación requerida.</li>

<li>Esperar la aprobación institucional antes de iniciar.</li>

</ul>

</div>

<div class="info-card">

<h3>⏱ Duración</h3>

<p>

La práctica tiene una duración entre <strong>320 y 480 horas</strong>, según lo establecido por el Programa.

</p>

</div>

<div class="info-card">

<h3>📄 Documentos principales</h3>

<ul>

<li>Formato FR-PO-0023.</li>

<li>Carta de aceptación o intención de la empresa.</li>

<li>Convenio (si aplica).</li>

<li>Afiliación a la ARL.</li>

</ul>

</div>

</div>

`,

internacional: `
<h2>Próximamente...</h2>
`,

iniciativa: `
<h2>Próximamente...</h2>
`,

faq: `
<h2>Próximamente...</h2>
`

};
