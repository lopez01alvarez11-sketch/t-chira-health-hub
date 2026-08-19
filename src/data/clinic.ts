export const clinic = {
  name: "Urológico Hospital Clínico",
  legal: "Urológico Hospital Clínico C.A.",
  city: "San Cristóbal, Estado Táchira",
  address: "Calle 11, entre carreras 19 y 20, Nº 19-50, Barrio Obrero",
  reference: "A cuadra y media bajando de la Plaza Los Mangos (Plaza María del Carmen Ramírez)",
  adminAddress: "Calle 12, Edificio Urosalud, Barrio Obrero, San Cristóbal",
  instagram: "https://www.instagram.com/urologicohospitalclinico/",
  facebook: "https://www.facebook.com/search/top?q=urol%C3%B3gico%20hospital%20cl%C3%ADnico",
  mapsQuery: "Urologico Hospital Clinico, Calle 11, Barrio Obrero, San Cristóbal, Táchira",
};

export type PhoneGroup = {
  unit: string;
  detail: string;
  numbers: { label: string; tel: string; whatsapp?: boolean }[];
};

export const phones: PhoneGroup[] = [
  {
    unit: "Central telefónica y citas médicas",
    detail: "Consultas, hospitalización y programación de cirugías.",
    numbers: [
      { label: "(0276) 355.88.86", tel: "+582763558886" },
      { label: "(0412) 174.78.98", tel: "+584121747898", whatsapp: true },
    ],
  },
  {
    unit: "Laboratorio Fertilab 2000",
    detail: "Laboratorio clínico y pruebas de fertilidad, 24 horas.",
    numbers: [
      { label: "(0276) 353.44.27", tel: "+582763534427" },
      { label: "(0276) 355.19.57 · Ext. 039", tel: "+582763551957" },
      { label: "(0414) 738.53.78", tel: "+584147385378", whatsapp: true },
    ],
  },
  {
    unit: "Farmacia Urofarma",
    detail: "Expendio de medicamentos las 24 horas.",
    numbers: [{ label: "(0424) 747.86.10", tel: "+584247478610", whatsapp: true }],
  },
  {
    unit: "Urosalud Medicina Prepagada",
    detail: "Afiliación, atención al afiliado y cartas avales.",
    numbers: [
      { label: "(0422) 876.33.33", tel: "+584228763333" },
      { label: "(0414) 518.37.16", tel: "+584145183716", whatsapp: true },
      { label: "(0412) 072.49.51", tel: "+584120724951", whatsapp: true },
    ],
  },
];

export const emergencyTel = "+582763558886";
export const whatsappNumber = "584121747898";

export const units = [
  {
    name: "Clínica y Hospitalización",
    text: "Quirófanos acondicionados, habitaciones privadas y recuperación postoperatoria con guardia médica permanente.",
  },
  {
    name: "Urosalud Medicina Prepagada",
    text: "Sistema propio de cobertura de salud del Grupo Urológico, con planes desde los 0 hasta los 80 años.",
  },
  {
    name: "Fertilab 2000",
    text: "Laboratorio clínico interno operativo 24 horas, con perfiles de rutina, hormonales y de fertilidad.",
  },
  {
    name: "Urofarma 24H",
    text: "Farmacia dentro del complejo, abierta de forma permanente para pacientes y familiares.",
  },
  {
    name: "UroCafé",
    text: "Cafetería para pacientes y acompañantes dentro de la sede clínica.",
  },
];

export const specialties = [
  {
    group: "Urología integral y quirúrgica",
    lead: "Eje principal del hospital, con abordaje médico y quirúrgico en un solo lugar.",
    items: [
      "Urología general masculina y femenina",
      "Urología pediátrica",
      "Urología oncológica: despistaje y manejo de cáncer de próstata, vejiga, riñón y testículos",
      "Litiasis renal y urinaria: litotricia y endourología",
      "Enfermedades prostáticas: hiperplasia benigna y prostatitis",
      "Andrología, salud sexual masculina y disfunción eréctil",
    ],
  },
  {
    group: "Cirugía general y laparoscópica",
    lead: "Procedimientos por mínima invasión con recuperación más corta.",
    items: [
      "Cirugía laparoscópica y de mínima invasión",
      "Pared abdominal: hernias inguinales, umbilicales y eventraciones",
      "Cirugía ambulatoria electiva",
      "Cirugía de emergencia",
    ],
  },
  {
    group: "Ginecología y Obstetricia (Maternidad)",
    lead: "Acompañamiento del embarazo hasta el nacimiento.",
    items: [
      "Control prenatal y perinatal",
      "Atención de partos normales y cesáreas",
      "Cirugía ginecológica",
      "Ecografía obstétrica y transvaginal",
    ],
  },
  {
    group: "Pediatría",
    lead: "Atención del niño sano y del niño enfermo.",
    items: ["Control de niño sano", "Urgencias pediátricas", "Neumonología infantil"],
  },
  {
    group: "Otras especialidades clínicas y de consulta",
    lead: "Equipo multidisciplinario para diagnóstico y control.",
    items: [
      "Cardiología con electrocardiograma (ECG)",
      "Gastroenterología y ecografía digestiva",
      "Medicina Interna y Nefrología",
      "Traumatología y Ortopedia",
      "Mastología",
      "Oncología (control)",
      "Neurocirugía (control)",
      "Nutrición",
      "Psicología",
      "Sexología",
    ],
  },
];

export const triage = {
  emergency: {
    title: "Emergencia",
    subtitle: "Prioridad inmediata · riesgo de vida",
    items: [
      "Dolor torácico agudo o sospecha de infarto",
      "Hemorragias profusas",
      "Dificultad respiratoria severa (disnea)",
      "Pérdida de conciencia",
    ],
  },
  urgency: {
    title: "Urgencia",
    subtitle: "Atención pronta · sin riesgo vital inminente",
    items: [
      "Cólico nefrítico moderado",
      "Fiebre alta persistente",
      "Esguinces y fracturas cerradas",
      "Heridas que ameritan sutura",
    ],
  },
};

export const diagnostics = [
  {
    title: "Radiología digital (Rayos X)",
    detail: "Servicio digital activo las 24 horas del día, todos los días del año.",
    items: ["Radiología simple", "Estudios de urgencia", "Entrega digital de imágenes"],
  },
  {
    title: "Ecografía especializada",
    detail: "Estudios generales y de alta resolución con equipos propios.",
    items: [
      "Abdominal, renal y vesicoprostática",
      "Tiroidea, pélvica y transvaginal",
      "Musculoesquelética: ligamentos, tendones, articulaciones y músculos",
      "Eco-Doppler vascular arterial y venoso periférico",
    ],
  },
  {
    title: "Laboratorio clínico Fertilab 2000",
    detail: "Laboratorio interno operativo 24 horas dentro del complejo.",
    items: [
      "Hematología completa y química sanguínea",
      "Tiempos de coagulación, orina y heces",
      "Pruebas hormonales",
      "Marcadores tumorales: PSA total y libre",
      "Pruebas de fertilidad",
    ],
  },
  {
    title: "Cardiología diagnóstica",
    detail: "Evaluación cardiovascular de apoyo a consulta y preoperatorio.",
    items: ["Electrocardiografía (ECG)", "Valoración preoperatoria", "Control de hipertensión"],
  },
];

export const plans = {
  young: {
    range: "0 a 59 años",
    items: [
      { name: "Plan Plus", coverage: "$10.000", note: "Cobertura de entrada para personas y familias." },
      { name: "Plan Medium", coverage: "$20.000", note: "Mayor margen para hospitalización y cirugía." },
      { name: "Plan Elite", coverage: "$50.000", note: "Cobertura amplia para procedimientos mayores." },
    ],
  },
  senior: {
    range: "60 a 80 años",
    items: [
      { name: "Platinium I", coverage: "$10.000", note: "Cobertura adaptada al adulto mayor." },
      { name: "Platinium II", coverage: "$10.000", note: "Condiciones ajustadas según evaluación." },
      { name: "Platinium III", coverage: "$10.000", note: "Alternativa de ingreso en edades avanzadas." },
    ],
  },
  benefits: [
    "Consultas con especialistas del complejo",
    "Telemedicina orientativa",
    "Emergencias 24/7 y hospitalización",
    "Cirugías programadas y de urgencia según el plan contratado",
    "Odontología preventiva: 1 consulta de diagnóstico + 1 profilaxis anual",
    "Modalidades de cobertura para familiares de venezolanos en el exterior",
  ],
};
