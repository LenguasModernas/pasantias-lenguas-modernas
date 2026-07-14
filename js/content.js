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
<div class="timeline">
<div class="progreso">

<h3>Proceso de la Pasantía</h3>

<div class="barra-progreso">

<div class="paso activo">
<div class="numero">1</div>
<p>Requisitos</p>
</div>

<div class="linea"></div>

<div class="paso activo">
<div class="numero">2</div>
<p>Empresa</p>
</div>

<div class="linea"></div>

<div class="paso activo">
<div class="numero">3</div>
<p>Documentos</p>
</div>

<div class="linea"></div>

<div class="paso">
<div class="numero">4</div>
<p>Carta</p>
</div>

<div class="linea"></div>

<div class="paso">
<div class="numero">5</div>
<p>ARL</p>
</div>

<div class="linea"></div>

<div class="paso">
<div class="numero">6</div>
<p>Inicio</p>
</div>

<div class="linea"></div>

<div class="paso">
<div class="numero">7</div>
<p>Finaliza</p>
</div>

</div>

</div>
<div class="timeline-item">

<div class="timeline-icon">
<i class="fa-solid fa-user-check"></i>
</div>

<h4>1. Requisitos</h4>

<p>Verifica que cumplas el 80 % de los créditos.</p>

</div>

<div class="timeline-item">

<div class="timeline-icon">
<i class="fa-solid fa-building"></i>
</div>

<h4>2. Empresa</h4>

<p>Obtén la aceptación de una empresa.</p>

</div>

<div class="timeline-item">

<div class="timeline-icon">
<i class="fa-solid fa-file-signature"></i>
</div>

<h4>3. Documentos</h4>

<p>Entrega el formato FR-PO-0023 y demás documentos.</p>

</div>

<div class="timeline-item">

<div class="timeline-icon">
<i class="fa-solid fa-shield-halved"></i>
</div>

<h4>4. ARL</h4>

<p>Gestiona la afiliación correspondiente.</p>

</div>

<div class="timeline-item">

<div class="timeline-icon">
<i class="fa-solid fa-circle-check"></i>
</div>

<h4>5. Inicio</h4>

<p>Comienza la pasantía únicamente cuando esté aprobada.</p>

</div>

</div>
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
<div class="banner-seccion">

<i class="fa-solid fa-earth-americas"></i>

<div>

<h2>Pasantía Internacional</h2>

<p>

Realiza una experiencia académica y profesional en el exterior mediante agencias autorizadas por el Programa.

</p>

</div>

</div>

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
← Volver al inicio
</button>

<h2>💼 Pasantía por Iniciativa Propia</h2>

<p>

Si ya encontraste una empresa donde deseas realizar tu pasantía, el Programa de Lenguas Modernas evaluará la propuesta para verificar que el cargo y las funciones sean pertinentes con el perfil profesional del programa.

</p>

<div class="grid-info">

<div class="info-card">

<h3>📋 Antes de iniciar</h3>

<ul>

<li>Contacta una empresa interesada en recibirte como pasante.</li>

<li>Solicita la carta de intención.</li>

<li>Envía la documentación al Programa.</li>

<li>Espera la revisión y aprobación institucional.</li>

</ul>

</div>

<div class="info-card importante">

<h3>⭐ ¿Por qué buscar tu propia empresa?</h3>

<ul>

<li>Mayor oferta de vacantes.</li>

<li>Más posibilidades de recibir remuneración.</li>

<li>Puedes escoger un área de tu interés.</li>

<li>Existe una mayor posibilidad de vinculación laboral al finalizar la pasantía.</li>

</ul>

</div>

<div class="info-card">

<h3>🏢 ¿Qué empresa puedo proponer?</h3>

<p>

Puedes proponer cualquier empresa, entidad u organización, pública o privada, siempre que el cargo y las funciones estén alineados con el perfil profesional del egresado de Lenguas Modernas de la Universidad ECCI.

</p>

<ul>

<li>✔ Empresas nacionales o internacionales.</li>

<li>✔ Entidades públicas.</li>

<li>✔ Organizaciones sin ánimo de lucro.</li>

<li>✔ Instituciones educativas.</li>

<li>✔ Agencias de traducción e interpretación.</li>

<li>✔ Empresas de tecnología, turismo, comercio, logística, mercadeo y servicios.</li>

</ul>

</div>

<div class="info-card importante">

<h3>🎯 ¿Qué revisa el Programa?</h3>

<p>

La aprobación no depende únicamente de la empresa. El Programa evaluará que el cargo y las funciones permitan desarrollar las competencias profesionales de un egresado de Lenguas Modernas.

</p>

</div>

<div class="info-card">

<h3>👨‍🎓 Perfil profesional</h3>
<div class="info-card">

<h3>💼 Ejemplos de cargos que pueden ser aprobados</h3>

<p>

Estos son algunos ejemplos de cargos que normalmente se ajustan al perfil profesional de un estudiante de Lenguas Modernas.

</p>

<ul>

<li>Traductor.</li>

<li>Intérprete.</li>

<li>Asistente de Comercio Exterior.</li>

<li>Asistente de Relaciones Internacionales.</li>

<li>Asistente de Internacionalización.</li>

<li>Analista de Comercio Internacional.</li>

<li>Analista de Mercados Internacionales.</li>

<li>Coordinador de Proyectos Internacionales (nivel auxiliar o asistente).</li>

<li>Community Manager.</li>

<li>Asistente de Marketing Digital.</li>

<li>Analista de Contenido Multilingüe.</li>

<li>Asistente de Comunicaciones.</li>

<li>Gestor de Clientes Bilingües.</li>

<li>Auxiliar Administrativo Bilingüe.</li>

<li>Auxiliar de Talento Humano Bilingüe.</li>

<li>Auxiliar de Compras Internacionales.</li>

<li>Asistente de Logística Internacional.</li>

<li>Asistente de Turismo.</li>

<li>Asistente de Operaciones Internacionales.</li>

</ul>

</div>

<div class="info-card alerta">

<h3>🚫 Cargos que normalmente NO son aprobados</h3>

<p>

Algunos cargos no permiten desarrollar las competencias del programa y, por tanto, normalmente no son aprobados como opción de grado.

</p>

<ul>

<li>Operario de producción.</li>

<li>Auxiliar de bodega.</li>

<li>Cajero.</li>

<li>Mesero.</li>

<li>Domiciliario.</li>

<li>Vendedor sin uso de lenguas extranjeras.</li>

<li>Auxiliar de servicios generales.</li>

<li>Cargos administrativos que no requieran el uso de idiomas ni competencias del programa.</li>

</ul>

</div>

<p>

El profesional en Lenguas Modernas de la Universidad ECCI está preparado para comunicarse en contextos interculturales, gestionar procesos de comunicación en diferentes idiomas y apoyar organizaciones nacionales e internacionales mediante el uso estratégico de las lenguas extranjeras.

</p>

<p>

Por esta razón, las funciones de la pasantía deben contribuir al fortalecimiento de dichas competencias.

</p>

</div>

<div class="info-card">

<h3>📄 ¿Qué necesitamos para evaluar la empresa?</h3>

<p>

La empresa debe enviar una <strong>carta de intención</strong> en papel membrete, firmada por el responsable de Gestión Humana o quien haga sus veces, indicando:

</p>

<ul>

<li>Nombre de la empresa.</li>

<li>Cargo que desempeñará el estudiante.</li>

<li>Funciones principales.</li>

<li>Datos de contacto de la empresa.</li>

</ul>

</div>

<div class="info-card">

<h3>💡 Recomendación del Programa</h3>

<p>

Buscar tu propia empresa suele ofrecer mayores oportunidades de encontrar una práctica alineada con tus intereses profesionales y con mejores posibilidades de remuneración y vinculación laboral.

</p>

</div>

<div class="info-card alerta">

<h3>⚠ Importante</h3>

<p>

No debes iniciar actividades en la empresa hasta recibir la aprobación del Programa y cumplir completamente el procedimiento institucional.

</p>

</div>

</div>

</div>

`,
faq:`

<div class="contenedor-info">

<button class="volver" onclick="volverInicio()">
← Volver al inicio
</button>
<div class="contenedor-info">

<button class="volver" onclick="volverInicio()">
← Volver al inicio
</button>

<div class="banner-seccion">

<i class="fa-solid fa-circle-question"></i>

<div>

<h2>Preguntas Frecuentes</h2>

<p>

Encuentra respuestas rápidas a las consultas más frecuentes sobre la Pasantía como Opción de Grado.

</p>

</div>

</div>

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
