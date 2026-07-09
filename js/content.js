const portal = {

    titulo: "Portal de Prácticas y Pasantías",

    programa: "Programa de Lenguas Modernas",

    universidad: "Universidad ECCI",

    descripcion:
        "Consulta toda la información oficial sobre la Pasantía como Opción de Grado.",

    opciones: [

        {
            id: "general",
            icono: "📘",
            titulo: "Información General",
            descripcion: "Requisitos, documentos, costos y proceso institucional."
        },

        {
            id: "internacional",
            icono: "🌍",
            titulo: "Pasantía Internacional",
            descripcion: "Agencias autorizadas, requisitos y proceso."
        },

        {
            id: "iniciativa",
            icono: "💼",
            titulo: "Iniciativa Propia",
            descripcion: "Propón una empresa para realizar tu pasantía."
        }

    ]

};
const informacion = {

general:`

<h2>📘 Información General</h2>

<div class="info-card">

<h3>Requisitos</h3>

<ul>

<li>80 % de créditos aprobados</li>

<li>Aceptación por una empresa</li>

<li>Formato FR-PO-0023</li>

<li>Carta de Presentación Institucional</li>

<li>Pago de la opción de grado</li>

</ul>

</div>

<div class="info-card">

<h3>Duración</h3>

<p>

Entre 320 y 480 horas.

</p>

</div>

`,

internacional:`

<h2>🌍 Pasantía Internacional</h2>

<div class="info-card">

<h3>Agencias autorizadas</h3>

<ul>

<li>Gastronomie France</li>

<li>Oak Let's Go</li>

</ul>

</div>

<div class="info-card">

<h3>Importante</h3>

<p>

Solo se aprueban procesos gestionados mediante agencias autorizadas.

</p>

</div>

`,

iniciativa:`

<h2>💼 Pasantía por Iniciativa Propia</h2>

<div class="info-card">

<h3>Antes de iniciar</h3>

<ul>

<li>Enviar carta de intención</li>

<li>Revisión de funciones</li>

<li>Aprobación del Programa</li>

</ul>

</div>

`

};
