const portal = {

    titulo: "Portal de Prácticas y Pasantías",

    programa: "Programa de Lenguas Modernas",

    universidad: "Universidad ECCI",

    descripcion:
        "Consulta toda la información oficial sobre la Pasantía como Opción de Grado.",

    opciones: [

        {
            id: "general",
           icono:'<i class="fa-solid fa-book-open"></i>',
            titulo: "Información General",
            descripcion: "Requisitos, documentos, costos y proceso institucional."
        },

        {
            id: "internacional",
            icono:'<i class="fa-solid fa-earth-americas"></i>',
            titulo: "Pasantía Internacional",
            descripcion: "Agencias autorizadas, requisitos y proceso."
        },

        {
            id: "iniciativa",
            icono:'<i class="fa-solid fa-briefcase"></i>',
            titulo: "Iniciativa Propia",
            descripcion: "Propón una empresa para realizar tu pasantía."
        }

    ]

};
const informacion = {

general:`

<h2>📘 Información General</h2>

<div class="accordion">

<div class="accordion-item">

<button class="accordion-header">
✅ Requisitos
</button>

<div class="accordion-body">

<ul>

<li>Haber aprobado al menos el <strong>80 %</strong> de los créditos.</li>

<li>Ser aceptado(a) por una empresa.</li>

<li>Diligenciar el formato <strong>FR-PO-0023</strong>.</li>

<li>Solicitar la Carta de Presentación Institucional.</li>

<li>Realizar el pago únicamente cuando el Programa autorice el proceso.</li>

</ul>

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
⏱ Duración
</button>

<div class="accordion-body">

<p>

La pasantía debe realizarse entre
<strong>320 y 480 horas.</strong>

</p>

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
📄 Documentos necesarios
</button>

<div class="accordion-body">

<ul>

<li>Convenio aprobado.</li>

<li>Carta de Presentación.</li>

<li>Afiliación activa a la ARL.</li>

<li>Pago de la opción de grado.</li>

</ul>

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
💰 Valor
</button>

<div class="accordion-body">

<p>

<strong>$1.553.795 COP</strong>

</p>

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">
⚠ Importante
</button>

<div class="accordion-body">

<p>

No puedes iniciar la pasantía sin cumplir todos los requisitos institucionales.

</p>

</div>

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
