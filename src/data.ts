export interface Topic { id: string; title: string; text: string; color: string }
export interface Question { id: string; text: string }

export const topics: Topic[] = [
  { id: "4.1", title: "Conectividad celular", text: "Redes 2G, 3G, 4G/LTE y 5G; NB-IoT y LTE-M para IoT; costos de SIM y planes de datos.", color: "border-cyan-600" },
  { id: "4.2", title: "LoRa y LoRaWAN", text: "Modulación LoRa, arquitectura LoRaWAN (nodos, gateways, servidor de red), clases A, B y C.", color: "border-amber-600" },
  { id: "4.3", title: "Sigfox", text: "Banda ultra estrecha (UNB), límite de mensajes por día, cobertura y modelo de operador.", color: "border-violet-600" },
];

export const steps: string[] = [
  "Formen el equipo y asignen roles: coordinador e investigadores de celular, LoRa/LoRaWAN y Sigfox.",
  "Cada integrante lee los recursos de su tema y responde las preguntas guía.",
  "Compartan hallazgos con el equipo en una sesión de 20 minutos.",
  "Completen juntos la tabla comparativa.",
  "Elijan la tecnología para el caso de las 200 parcelas y justifiquen con al menos tres criterios.",
  "Dibujen el diagrama de la red propuesta (sensores, gateways o antenas, nube, usuario).",
  "Presenten la propuesta al grupo y respondan preguntas.",
];

export const resources: { label: string; text: string }[] = [
  { label: "Celular", text: "GSMA (Internet of Things, NB-IoT y LTE-M); documentación de operadores como Telcel o AT&T México; 3GPP." },
  { label: "LoRa/LoRaWAN", text: "LoRa Alliance (lora-alliance.org); The Things Network (thethingsnetwork.org); documentación de Semtech." },
  { label: "Sigfox", text: "Sitio oficial de Sigfox y artículos sobre UNB. Verifica el estado actual del servicio y su cobertura en México." },
  { label: "General", text: "Libro de texto de la unidad y videos de canales de IoT y telecomunicaciones." },
];

export const criteria: string[] = [
  "Alcance típico", "Consumo de energía", "Velocidad de datos", "Banda de frecuencia",
  "Costo de dispositivo y servicio", "Quién opera la red", "Ventajas / desventajas",
];
export const columns: string[] = ["Celular (NB-IoT / LTE-M)", "LoRaWAN", "Sigfox"];

export const questions: Question[] = [
  { id: "q1", text: "¿Qué diferencia hay entre LoRa y LoRaWAN?" },
  { id: "q2", text: "¿Por qué NB-IoT consume menos energía que 4G tradicional?" },
  { id: "q3", text: "¿Qué limitación tiene Sigfox en tamaño y número de mensajes?" },
  { id: "q4", text: "¿Cuál recomiendas para las 200 parcelas y por qué?" },
];

export const rubric: { criterion: string; levels: string[] }[] = [
  { criterion: "Investigación (30%)", levels: ["Tres temas con datos precisos y fuentes citadas", "Tres temas con pocos errores", "Información incompleta", "Sin fuentes o con errores graves"] },
  { criterion: "Tabla comparativa (25%)", levels: ["Completa y correcta", "Casi completa", "Varias celdas vacías", "No entregada"] },
  { criterion: "Propuesta y justificación (25%)", levels: ["Tres o más criterios técnicos sólidos", "Dos criterios", "Un criterio", "Sin justificación"] },
  { criterion: "Presentación y equipo (20%)", levels: ["Clara, en tiempo, todos participan", "Clara, participación desigual", "Confusa", "No se presentó"] },
];
export const levelNames: string[] = ["Excelente (4)", "Bueno (3)", "Regular (2)", "Insuficiente (1)"];
