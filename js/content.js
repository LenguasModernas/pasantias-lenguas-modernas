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

<div class="contenedor-info">

<button class="volver" onclick="volverInicio()">
← Volver al inicio
</button>

<h2>📘 Información General</h2>

<p>
La Pasantía como Opción de Grado permite aplicar los conocimientos adquiridos durante la carrera mediante una experiencia profesional en una empresa u organización con convenio vigente con la Universidad ECCI.
</p>

<div class="grid-info">

<div class="info-card">

<h3>🎓 Requisitos principales</h3>

<ul>
<li>Tener aprobado al menos el <strong>80 % de los créditos</strong>.</li>
<li>Ser aceptado(a) por una empresa.</li>
<li>Diligenciar el formato <strong>FR-PO-0023</strong>.</li>
<li>Radicar el formato en Centro de Servicios.</li>
<li>Obtener la Carta de Presentación Institucional.</li>
<li>Realizar el pago de la opción de grado únicamente cuando el Programa lo autorice.</li>
</ul>

</div>

<div class="info-card">

<h3>📄 Documentación</h3>

<ul>
<li>Formato FR-PO-0023.</li>
<li>Carta de aceptación de la empresa.</li>
<li>Convenio vigente (si aplica).</li>
<li>Carta de Presentación.</li>
<li>Afiliación a la ARL.</li>
</ul>

</div>

<div class="info-card">

<h3>⏱ Duración</h3>

<ul>
<li>Mínimo <strong>320 horas</strong>.</li>
<li>Máximo <strong>480 horas</strong>.</li>
<li>Las horas dependen del plan de trabajo aprobado.</li>
</ul>

</div>

<div class="info-card">

<h3>💰 Pago</h3>

<p>

El pago de la opción de grado se realiza únicamente después de recibir el aval del Programa de Lenguas Modernas.

</p>

</div>

<div class="info-card importante">

<h3>📌 Recomendaciones</h3>

<ul>
<li>No iniciar actividades antes de la aprobación.</li>
<li>Consultar permanentemente el correo institucional.</li>
<li>Conservar copia de todos los documentos.</li>
<li>Asistir a las reuniones de seguimiento.</li>
</ul>

</div>

<div class="info-card alerta">

<h3>⚠ Importante</h3>

<p>

La práctica solamente será válida cuando cumpla completamente el procedimiento institucional.

</p>

</div>

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
