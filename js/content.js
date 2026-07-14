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
        },
        
        {
    id: "faq",
    icono:'<i class="fa-solid fa-circle-question"></i>',
    titulo: "Preguntas Frecuentes",
    descripcion: "Resuelve las dudas más comunes sobre la Pasantía."
}

    ]

};
const informacion = {

general:`

<div class="contenedor-info">

<button class="volver" onclick="volverInicio()">
← Volver al inicio
</button>
<div class="banner-seccion">

<i class="fa-solid fa-book-open"></i>

<div>

<h2>Información General</h2>

<p>
Todo el procedimiento institucional para realizar la Pasantía como Opción de Grado.
</p>

</div>

</div>

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

<div class="contenedor-info">

<button class="volver" onclick="volverInicio()">
← Volver al inicio
</button>

<h2>🌍 Pasantía Internacional</h2>

<p>

La Pasantía Internacional permite al estudiante realizar su práctica profesional en una empresa u organización ubicada fuera de Colombia, fortaleciendo sus competencias interculturales, lingüísticas y profesionales.

</p>

<div class="grid-info">

<div class="info-card">

<h3>🎯 Beneficios</h3>

<ul>
<li>Experiencia laboral internacional.</li>
<li>Fortalecimiento del perfil profesional.</li>
<li>Desarrollo de competencias interculturales.</li>
<li>Mejora del nivel de idiomas.</li>
<li>Ampliación de la red profesional.</li>
</ul>

</div>

<div class="info-card">

<h3>✅ Requisitos</h3>

<ul>
<li>Tener aprobado al menos el 80 % de los créditos.</li>
<li>Cumplir los requisitos institucionales.</li>
<li>Ser aceptado por una empresa en el exterior.</li>
<li>Contar con la aprobación del Programa.</li>
<li>Cumplir los requisitos migratorios del país de destino.</li>
</ul>

</div>

<div class="info-card">

<h3>🌎 Agencias autorizadas</h3>

<ul>
<li>Gastronomie France.</li>
<li>Oak Let's Go.</li>
<li>Otras agencias previamente avaladas por la Universidad.</li>
</ul>

</div>

<div class="info-card">

<h3>📋 Proceso</h3>

<ol>
<li>Elegir la agencia.</li>
<li>Postularse.</li>
<li>Entrevista.</li>
<li>Carta de aceptación.</li>
<li>Aprobación del Programa.</li>
<li>Pago de la opción de grado.</li>
<li>Inicio de la pasantía.</li>
</ol>

</div>

<div class="info-card">

<h3>📄 Documentos</h3>

<ul>
<li>Carta de aceptación.</li>
<li>Formato FR-PO-0023.</li>
<li>Copia del pasaporte (cuando aplique).</li>
<li>Visa o permiso correspondiente.</li>
<li>Afiliación al seguro exigido.</li>
</ul>

</div>

<div class="info-card importante">

<h3>⚠ Importante</h3>

<p>

La Universidad únicamente reconocerá procesos previamente autorizados por el Programa de Lenguas Modernas.

</p>

</div>

</div>

</div>

`,

iniciativa:`

<div class="contenedor-info">

<button class="volver" onclick="volverInicio()">
<i class="fa-solid fa-arrow-left"></i> Volver
</button>

<h2>💼 Pasantía por Iniciativa Propia</h2>

<p>

La Pasantía por Iniciativa Propia permite al estudiante proponer una empresa para desarrollar su práctica profesional, siempre que las funciones estén relacionadas con el perfil del Programa y sean aprobadas institucionalmente.

</p>

<div class="grid-info">

<div class="info-card">

<h3>👤 ¿Quién puede aplicar?</h3>

<ul>
<li>Estudiantes con el 80 % de créditos aprobados.</li>
<li>Estudiantes que hayan conseguido una empresa por sus propios medios.</li>
</ul>

</div>

<div class="info-card">

<h3>🏢 Requisitos de la empresa</h3>

<ul>
<li>Existencia legal.</li>
<li>Funciones acordes al perfil profesional.</li>
<li>Disposición para firmar convenio cuando sea necesario.</li>
</ul>

</div>

<div class="info-card">

<h3>📄 Documentos</h3>

<ul>
<li>Carta de intención.</li>
<li>Certificado de Cámara de Comercio.</li>
<li>RUT.</li>
<li>Documento del representante legal.</li>
<li>Formato FR-PO-0023.</li>
</ul>

</div>

<div class="info-card">

<h3>📋 Proceso</h3>

<ol>
<li>Presentar la empresa.</li>
<li>Revisión por el Programa.</li>
<li>Verificación del convenio.</li>
<li>Aprobación institucional.</li>
<li>Carta de presentación.</li>
<li>Inicio de la pasantía.</li>
</ol>

</div>

<div class="info-card">

<h3>✅ Recomendaciones</h3>

<ul>
<li>No iniciar actividades sin autorización.</li>
<li>Conservar todos los documentos.</li>
<li>Mantener comunicación con el tutor.</li>
<li>Cumplir el plan de trabajo.</li>
</ul>

</div>

<div class="info-card alerta">

<h3>🚫 No será aprobada cuando</h3>

<ul>
<li>Las funciones no correspondan al perfil profesional.</li>
<li>La empresa no entregue la documentación requerida.</li>
<li>El estudiante inicie actividades sin autorización.</li>
</ul>

</div>

</div>

</div>

`,

faq:`

<div class="contenedor-info">

<button class="volver" onclick="volverInicio()">
← Volver al inicio
</button>

<h2>❓ Preguntas Frecuentes</h2>

<div class="accordion">

<div class="accordion-item">

<button class="accordion-header">

¿Cuándo puedo iniciar mi pasantía?

</button>

<div class="accordion-body">

Solo cuando tengas la Carta de Presentación Institucional, el convenio aprobado, la afiliación a la ARL y la autorización del Programa.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">

¿Cuántas horas debo cumplir?

</button>

<div class="accordion-body">

Entre 320 y 480 horas.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">

¿Debo pagar antes de conseguir empresa?

</button>

<div class="accordion-body">

No. El pago únicamente se realiza cuando el Programa autoriza el proceso.

</div>

</div>

<div class="accordion-item">

<button class="accordion-header">

¿Puedo proponer mi propia empresa?

</button>

<div class="accordion-body">

Sí. El Programa revisará las funciones para determinar si cumplen con el perfil profesional.

</div>

</div>

</div>

</div>

`

};
