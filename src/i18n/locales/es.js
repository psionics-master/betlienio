// Mirrors src/i18n/locales/en.js key-for-key. Keep array lengths/order (and
// scene `type` values) identical to the English file — App.jsx locates
// scenes by `type`, not by index.

export const INTRO_BEATS = [
  {
    text: "Roswell, Nuevo México. Una tranquila noche en el desierto. Estás acampando, revisando juegos cripto y fingiendo que esto es una estrategia financiera normal.",
    button: "Relajado como un villano",
  },
  {
    text: "De repente escuchas un fuerte zumbido eléctrico que viene del cielo — como si un portal se estuviera activando justo sobre tu tienda.",
    button: "👆 Mirar al cielo",
  },
];

export const DIALOGUE_SCENES = [
  {
    type: "meetAlien",
    portrait: null,
    text: [
      "💥 ¡ZAS! Un OVNI con forma de TicTac se estrella de morro en el desierto de Roswell. La arena brilla. El cactus parece que acaba de firmar un acuerdo de confidencialidad.",
    ],
    choices: ["Acercarse al accidente", "Quedarse congelado como en un video filtrado"],
  },
  {
    type: "alienFirstSpeech",
    portrait: "default",
    text: [
      "₿lurppz: Oye. ¿Puedes verme? Genial. O eres un híbrido, o el choque te dio recepción alienígena premium. Cualquiera de las dos es un gran problema.",
    ],
    choices: ["Acercarse más", "Rezarle a Joe Rogan"],
  },
  {
    type: "hybridScan",
    portrait: "think",
    text: [
      "₿lurppz: Espera. Tu cerebro está haciendo ping al TicTac. Software humano. Hardware alienígena. Tolerancia al riesgo cripto. Sí — eres un híbrido.",
    ],
    choices: ["Sabía que era especial", "Esto explica mi portafolio"],
  },
  {
    type: "sayET",
    portrait: "default",
    text: ['Tú: «¿E.T. llama a casa?»\n\n₿lurppz: Qué tierno. Tiene derechos de autor. Además, mi nave acaba de estrellarse en Nuevo México.'],
    choices: [],
  },
  {
    type: "missionReveal",
    portrait: "default",
    text: [
      "₿lurppz: Escucha, híbrido. Mi tripulación está atrapada dentro de la red de encubrimiento — Roswell, Hangar 18, S-4, Área 51. Todo el DLC premium de los secretos gubernamentales.",
    ],
    choices: ["¿Divulgación?", "El Área 51 tiene mi atención"],
  },
  {
    type: "disclosureCost",
    portrait: "default",
    text: [
      "₿lurppz: Sí, divulgación. Pero la divulgación no es barata. Los testigos necesitan protección, los archivos hay que descifrarlos, los artefactos hay que recuperarlos, y de algún modo siempre hay honorarios legales intergalácticos.",
    ],
    choices: ["¿Entonces financiamos la divulgación?", "¿La verdad tiene comisión de gas?"],
  },
  {
    type: "mapReveal",
    portrait: "default",
    text: [
      "₿lurppz: Hay 50 contactos NHI escondidos por toda la galaxia.",
      "Recluta a cada uno, recupera sus archivos y construye la cadena de pruebas que alimenta el Motor de Divulgación.",
    ],
    choices: ["Muéstrame el mapa", "Misión secundaria alienígena aceptada"],
  },
  {
    type: "betlienGalactic",
    portrait: "default",
    text: [
      "₿lurppz: Para eso, minarás puntos Betlien Galactic — combustible cósmico de nivel casino para mejoras, reclutas, archivos y unos «gastos de investigación» bastante sospechosos.",
    ],
    choices: ["Minar los puntos", "Financiar las cosas raras"],
  },
  {
    type: "economyBasics",
    portrait: "coin",
    text: [
      "₿lurppz: Tutorial rápido antes de que abduzcan tu capacidad de atención humana.",
      "🪙 Mina puntos Betlien Galactic. ⚡ Gasta Energía en misiones. 👽 Recluta NHI para minar más rápido. 📁 Desbloquea archivos. 🛸 Impulsa la divulgación.",
    ],
    choices: ["Minar. Reclutar. Divulgar.", "Entendí lo suficiente. Vamos."],
  },
  {
    type: "casinoTease",
    portrait: "default",
    text: [
      "₿lurppz: Y sí, esta galaxia también tiene su lado de casino. Pero primero necesitamos testigos, archivos y suficientes puntos para hacer sudar al encubrimiento.",
    ],
    choices: ["Prioridades", "Más vale que el casino esté embrujado"],
  },
  {
    type: "neuralSetup",
    portrait: "think",
    text: [
      "₿lurppz: Antes de que vayas a cualquier lado, necesito verificar que tu ADN sea de nivel híbrido. Solo un verdadero híbrido humano-alienígena puede ver las 3 esferas de plasma brillar al mismo tiempo. Los humanos normales solo ven estática. Haz la prueba.",
    ],
    choices: ["Hacer la Prueba de ADN Híbrido", "Puedo ver las 3 esferas"],
  },
];

export const TAP_TO_CONTINUE_LABEL = "TOCA PARA COMUNICARTE TELEPÁTICAMENTE";

export const WALL_COPY = {
  eyebrow: "PRUEBA DE ADN HÍBRIDO",
  heading: "ADN Híbrido: Humano · Alienígena",
  body: "La interfaz TicTac solo se sincroniza dentro de Telegram. Inicia el bot para hacer tu Prueba de ADN Híbrido y continuar.",
  cta: "Iniciar Bot de Telegram",
  legal: "Juego gratuito. No se requiere compra. Las monedas Betlien no tienen valor monetario y no constituyen asesoría financiera.",
  marqueeRow1: "BETLIEN  •  DISPONIBLE EN TELEGRAM  •  ",
  marqueeRow2: "MINA LA GALAXIA  •  JUEGA  •  GANA BETLIEN COINS  •  GANA $GRAM COINS  •  ",
};

export const TOPBAR = {
  brand: "$BETLIEN",
  brandAria: "Betlien — inicio",
  skip: "Saltar →",
  openBot: "Abrir Bot",
};

export const COVER = {
  titleAlt: "Betlien — Mina la Galaxia",
  startMiningAria: "Empezar a Minar",
  startMiningAlt: "Empezar a Minar",
  footerTc: "Solo mayores de 18 años. Juego gratuito. No se requiere compra. Aplican términos y condiciones.",
};

export const TICTAC = {
  tapToSkip: "toca para saltar",
};

export const WALL_UI = {
  startMiningAlt: "Empezar a Minar",
  mineBtnAria: "Empezar a minar y abrir el bot de Telegram",
  launchingBot: "Iniciando bot…",
};
