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

<div class="contenedor-info">

<h2>🏢 Pasantía por iniciativa propia</h2>

<p class="intro">

Si encuentras una empresa por tu cuenta, podrás postularte para realizar allí tu práctica profesional. Esta modalidad suele ofrecer mayores oportunidades de remuneración, mejores horarios y una mayor variedad de cargos.

</p>

<div class="info-card">

<h3>⭐ ¿Por qué buscar tu propia empresa?</h3>

<ul>

<li>Mayor oferta de vacantes.</li>

<li>Posibilidad de recibir remuneración.</li>

<li>Más opciones de horario y ubicación.</li>

<li>Puedes elegir una empresa alineada con tus intereses profesionales.</li>

</ul>

</div>

<div class="info-card">

<h3>✅ Antes de iniciar</h3>

<p>

La empresa debe ofrecer un cargo y unas funciones relacionadas con el perfil de egreso del Programa de Lenguas Modernas de la Universidad ECCI.

</p>

</div>

<div class="info-card">

<h3>👨‍🎓 Perfil profesional</h3>

<p>

El profesional en Lenguas Modernas de la Universidad ECCI está preparado para desempeñarse en contextos organizacionales nacionales e internacionales, utilizando competencias comunicativas, interculturales y tecnológicas para apoyar procesos de comunicación, gestión empresarial, traducción, interpretación, internacionalización y relacionamiento con clientes y aliados.

</p>

</div>

<div class="info-card">

<h3>💼 Algunos cargos que pueden ser aprobados</h3>

<ul>

<li>Analista de Comercio Exterior.</li>

<li>Analista de Relaciones Internacionales.</li>

<li>Analista de Compras Internacionales.</li>

<li>Analista de Mercadeo.</li>

<li>Analista de Comunicaciones.</li>

<li>Analista de Internacionalización.</li>

<li>Traductor.</li>

<li>Intérprete.</li>

<li>Asistente Administrativo Bilingüe.</li>

<li>Auxiliar de Comercio Exterior.</li>

<li>Community Manager.</li>

<li>Ejecutivo de Cuenta Bilingüe.</li>

</ul>

<p>

<strong>Importante:</strong> esta lista es solo una referencia. El Programa evaluará cada caso según las funciones asignadas.

</p>

</div>

<div class="info-card">

<h3>📄 ¿Qué debe enviar la empresa?</h3>

<p>

Para iniciar la revisión, la empresa debe enviar una <strong>carta de intención en papel membrete</strong>, firmada por el responsable de Gestión Humana o quien haga sus veces.

</p>

<p>

La carta debe indicar claramente:

</p>

<ul>

<li>Nombre de la empresa.</li>

<li>Cargo ofrecido.</li>

<li>Funciones que desempeñará el estudiante.</li>

<li>Ciudad donde realizará la práctica.</li>

<li>Datos de contacto del responsable.</li>

</ul>

</div>

<div class="info-card">

<h3>✔️ ¿Qué hace el Programa?</h3>

<p>

El Programa revisará el cargo y las funciones propuestas para verificar que estén alineadas con el perfil de formación. Si cumplen los requisitos, se continuará con el proceso institucional de práctica profesional.

</p>

</div>

</div>

`,

faq: `

<div class="contenedor-info">

<h2>❓ Preguntas Frecuentes</h2>

<p class="intro">

Aquí encontrarás respuesta a las consultas más comunes sobre el proceso de práctica profesional.

</p>

<div class="accordion">

<div class="accordion-item">

<button class="accordion-header">
¿Cuándo puedo iniciar mi práctica?
</button>

<div class="accordion-body">

Únicamente cuando el Programa autorice oficialmente el inicio del proceso y se hayan cumplido todos los requisitos administrativos.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
¿Puedo comenzar a trabajar antes de la aprobación?
</button>

<div class="accordion-body">

No. Las horas realizadas antes de la autorización institucional no podrán ser reconocidas como práctica profesional.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
¿Cuántas horas debo cumplir?
</button>

<div class="accordion-body">

La práctica tiene una duración entre <strong>320 y 480 horas</strong>, según el plan de estudios.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
¿Puedo conseguir mi propia empresa?
</button>

<div class="accordion-body">

Sí. De hecho, es una de las opciones más recomendadas, ya que normalmente ofrece una mayor disponibilidad de vacantes y mejores posibilidades de remuneración.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
¿Qué debe enviar la empresa?
</button>

<div class="accordion-body">

Una carta de intención en papel membrete, firmada por el responsable de Gestión Humana, indicando el cargo y las funciones que desempeñará el estudiante.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
¿Todos los cargos son aprobados?
</button>

<div class="accordion-body">

No. El Programa revisa que el cargo y las funciones estén alineados con el perfil de egreso del profesional en Lenguas Modernas de la Universidad ECCI.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
¿Quién realiza el convenio con la empresa?
</button>

<div class="accordion-body">

La Universidad ECCI gestiona el convenio institucional cuando la empresa no tiene uno vigente y el cargo cumple con los requisitos académicos.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
¿Debo afiliarme a la ARL?
</button>

<div class="accordion-body">

Sí. La afiliación a la ARL es obligatoria antes del inicio de la práctica profesional.

</div>

</div>

</div>

</div>

`,

};
