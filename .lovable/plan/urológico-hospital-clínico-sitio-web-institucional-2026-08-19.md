# Urológico Hospital Clínico — Sitio web institucional

Sitio web responsivo, profesional y multipágina para el Urológico Hospital Clínico (San Cristóbal, Táchira), con identidad visual propia (azul corporativo, cian, turquesa Urosalud y coral de emergencias), maquetación modular tipo tarjetas y tono cercano, preventivo y local.

## Estructura de páginas

1. `/` — Inicio
   - Barra superior fija con datos de contacto y botón rojo "Emergencias 24/7" (llamada directa).
   - Hero con fotografía de instalaciones, nombre del centro, lema local y dos accesos: Citas médicas y Emergencias.
   - Bloque bento con las 5 unidades del complejo: Clínica y Hospitalización, Urosalud, Fertilab 2000, Urofarma 24H, UroCafé.
   - Servicios destacados (urología, cirugía laparoscópica, maternidad, pediatría, imagenología 24h).
   - Banda de horarios y ubicación con referencia a Plaza Los Mangos.
   - Bloque resumen de planes Urosalud con enlace a la página de planes.

2. `/especialidades` — Cartera médica completa
   - Urología integral (general, pediátrica, oncológica, litiasis, prostática, andrología) como eje principal.
   - Cirugía general y laparoscópica, Ginecología y Obstetricia, Pediatría.
   - Otras consultas: cardiología, gastroenterología, medicina interna y nefrología, traumatología, mastología, oncología, neurocirugía, nutrición, psicología, sexología.

3. `/emergencias` — Emergencias 24/7 y triaje
   - Guardia médica 365 días, teléfonos directos.
   - Tabla/tarjetas comparativas de Triaje: Emergencia (prioridad inmediata) vs Urgencia (atención pronta) con los ejemplos clínicos indicados.
   - Recomendaciones prácticas de qué llevar y cómo llegar.

4. `/diagnostico` — Diagnóstico, laboratorio e imagenología 24h
   - Rayos X digital 24h, ecografía general/musculoesquelética, eco-doppler vascular, ECG.
   - Laboratorio Fertilab 2000: perfiles de rutina, hormonales, marcadores tumorales (PSA), fertilidad. Teléfonos propios.

5. `/urosalud` — Medicina prepagada
   - Tarjetas de planes 0–59 años (Plus $10.000, Medium $20.000, Elite $50.000) y 60–80 años (Platinium I, II, III).
   - Beneficios: consultas, telemedicina orientativa, emergencias 24/7, hospitalización, cirugías, odontología preventiva, familiares en el exterior.
   - Convenios y cartas avales con aseguradoras nacionales.
   - Contactos de afiliación y sede administrativa (Calle 12, Edificio Urosalud).

6. `/contacto` — Contacto y ubicación
   - Directorio telefónico completo por unidad (central/citas, Fertilab, Urofarma, Urosalud).
   - Dirección con punto de referencia, mapa embebido, enlaces a Instagram y Facebook.
   - Formulario de solicitud de cita que abre WhatsApp prellenado (sin backend).

Pie de página común: unidades, accesos rápidos, teléfonos, redes y aviso de que la web no sustituye la consulta médica.

## Identidad visual (evitando estética genérica de IA)

- Tokens semánticos en `src/styles.css` (oklch) derivados de: #0A2540 y #0D3B66 (primario), #00A8E8 (acento), #00C49F (bienestar/Urosalud), #E63946 (emergencia), #F4F7F9 (fondo), #2B2D42 (texto).
- Tipografía: Montserrat para titulares (negrita, tracking cerrado) e Inter para cuerpo, cargadas por `<link>` en la ruta raíz.
- Recursos gráficos: filetes finos, esquinas suaves (radio 8–12px), cintas superiores de color por sección, numeración visible en listas de servicios, iconografía médica lineal (lucide) sin animaciones excesivas.
- Sin gradientes morados, sin "Trusted by", sin doble CTA decorativo por sección, sin tarjetas idénticas repetidas: cada sección usa una composición distinta (bento asimétrico, tabla de triaje, lista numerada, comparativa de planes).
- Imágenes generadas de instalaciones clínicas reales-estilo (fachada/recepción, quirófano, laboratorio, área de consulta) más placeholders sustituibles por fotos reales.

## Detalles técnicos

- Rutas TanStack en `src/routes/*` (se reescribe `src/routes/index.tsx`, se eliminan placeholders).
- `head()` propio por ruta con title, description, og:title, og:description, og:type y twitter:card; JSON-LD `MedicalClinic` en Inicio y Contacto (dirección, teléfonos, horario 24/7).
- Componentes compartidos en `src/components/site/`: `SiteHeader`, `EmergencyBar`, `SiteFooter`, `SectionHeading`, `ServiceCard`, `PlanCard`, `TriageTable`.
- Datos de contacto, especialidades y planes centralizados en `src/data/clinic.ts` para fácil edición.
- Responsivo mobile-first: navegación colapsable, botones de llamada `tel:` y WhatsApp `wa.me` en móvil.
- Sin backend: no se requiere base de datos ni autenticación en esta fase.

## Fuera de alcance (fase posterior, si se desea)

- Reserva de citas con base de datos y panel administrativo.
- Portal de resultados de laboratorio.
- Versión en inglés.
