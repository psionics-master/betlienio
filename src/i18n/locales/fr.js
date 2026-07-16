// Mirrors src/i18n/locales/en.js key-for-key. Keep array lengths/order (and
// scene `type` values) identical to the English file — App.jsx locates
// scenes by `type`, not by index.

export const INTRO_BEATS = [
  {
    text: "Roswell, Nouveau-Mexique. Une nuit tranquille dans le désert. Tu campes, tu consultes des jeux crypto, et tu fais comme si c'était une stratégie financière normale.",
    button: "Chill comme un vilain",
  },
  {
    text: "Puis tu entends un bourdonnement électrique puissant venant du ciel — comme un portail qui s'active au-dessus de ta tente.",
    button: "👆 Regarder le ciel",
  },
];

export const DIALOGUE_SCENES = [
  {
    type: "meetAlien",
    portrait: null,
    text: [
      "💥 BADABOUM. Un OVNI en forme de TicTac s'écrase dans le désert de Roswell. Le sable se met à briller. Le cactus a l'air d'avoir signé un accord de confidentialité.",
    ],
    choices: ["S'approcher de l'épave", "Rester figé comme sur une vidéo fuitée"],
  },
  {
    type: "alienFirstSpeech",
    portrait: "default",
    text: [
      "₿lurppz: Yo. Tu peux me voir ? Génial. Soit tu es un hybride, soit le crash t'a donné une réception alien premium. Dans les deux cas, c'est du sérieux.",
    ],
    choices: ["S'approcher", "Prier Joe Rogan"],
  },
  {
    type: "hybridScan",
    portrait: "think",
    text: [
      "₿lurppz: Attends. Ton cerveau envoie un signal au TicTac. Logiciel humain. Matériel alien. Tolérance au risque crypto. Ouais — tu es un hybride.",
    ],
    choices: ["Je savais que j'étais spécial", "Ça explique mon portefeuille"],
  },
  {
    type: "sayET",
    portrait: "default",
    text: ["Toi : « E.T. téléphone maison ? »\n\n₿lurppz: Mignon. C'est protégé par le droit d'auteur. En plus, mon vaisseau vient de s'écraser au Nouveau-Mexique."],
    choices: [],
  },
  {
    type: "missionReveal",
    portrait: "default",
    text: [
      "₿lurppz: Écoute, hybride. Mon équipage est piégé dans le réseau de dissimulation — Roswell, Hangar 18, S-4, Zone 51. Tout le DLC premium des secrets gouvernementaux.",
    ],
    choices: ["La divulgation ?", "La Zone 51 attire mon attention"],
  },
  {
    type: "disclosureCost",
    portrait: "default",
    text: [
      "₿lurppz: Ouais, la divulgation. Mais la divulgation, ce n'est pas gratuit. Les témoins ont besoin de protection, les fichiers doivent être déchiffrés, les artefacts récupérés, et il y a toujours ces frais juridiques intergalactiques.",
    ],
    choices: ["Donc on finance la divulgation ?", "La vérité a des frais de gas ?"],
  },
  {
    type: "mapReveal",
    portrait: "default",
    text: [
      "₿lurppz: Il y a 50 contacts NHI cachés à travers la galaxie.",
      "Recrute-les un par un, récupère leurs fichiers, et construis la chaîne de preuves qui alimente le Moteur de Divulgation.",
    ],
    choices: ["Montre-moi la carte", "Quête secondaire alien acceptée"],
  },
  {
    type: "betlienGalactic",
    portrait: "default",
    text: [
      "₿lurppz: Pour ça, tu vas miner des points Betlien Galactic — un carburant cosmique digne d'un casino pour les boosts, les recrues, les fichiers et des « frais de recherche » plutôt suspects.",
    ],
    choices: ["Miner les points", "Financer les trucs louches"],
  },
  {
    type: "economyBasics",
    portrait: "coin",
    text: [
      "₿lurppz: Petit tuto rapide avant que ton attention humaine ne soit abductée.",
      "🪙 Mine des points Betlien Galactic. ⚡ Dépense de l'Énergie sur les missions. 👽 Recrute des NHI pour miner plus vite. 📁 Débloque des fichiers. 🛸 Fais avancer la divulgation.",
    ],
    choices: ["Miner. Recruter. Divulguer.", "J'ai compris l'essentiel. On y va."],
  },
  {
    type: "casinoTease",
    portrait: "default",
    text: [
      "₿lurppz: Et oui, cette galaxie a aussi son côté casino. Mais d'abord, il nous faut des témoins, des fichiers, et assez de points pour faire suer la dissimulation.",
    ],
    choices: ["Priorités", "J'espère que le casino est hanté"],
  },
  {
    type: "neuralSetup",
    portrait: "think",
    text: [
      "₿lurppz: Avant d'aller où que ce soit, je dois vérifier que ton ADN est de qualité hybride. Seul un vrai hybride humain-alien peut voir les 3 sphères de plasma briller en même temps. Les humains normaux ne voient que de la friture. Passe le test.",
    ],
    choices: ["Passer le Test d'ADN Hybride", "Je vois les 3 sphères"],
  },
];

export const TAP_TO_CONTINUE_LABEL = "APPUIE POUR COMMUNIQUER TÉLÉPATHIQUEMENT";

export const WALL_COPY = {
  eyebrow: "TEST D'ADN HYBRIDE",
  heading: "ADN Hybride : Humain · Alien",
  body: "L'interface TicTac ne se synchronise que dans Telegram. Lance le bot pour passer ton Test d'ADN Hybride et continuer.",
  cta: "Lancer le Bot Telegram",
  legal: "Jeu gratuit. Aucun achat requis. Les Betlien Coins n'ont aucune valeur monétaire et ne constituent pas un conseil financier.",
  marqueeRow1: "BETLIEN  •  DISPONIBLE SUR TELEGRAM  •  ",
  marqueeRow2: "MINE LA GALAXIE  •  JOUE  •  GAGNE DES BETLIEN COINS  •  GAGNE DES $GRAM COINS  •  ",
};

export const TOPBAR = {
  brand: "$BETLIEN",
  brandAria: "Betlien — accueil",
  skip: "Passer →",
  openBot: "Ouvrir le Bot",
};

export const COVER = {
  titleAlt: "Betlien — Mine la Galaxie",
  startMiningAria: "Commencer à Miner",
  startMiningAlt: "Commencer à Miner",
  footerTc: "Réservé aux 18 ans et plus. Jeu gratuit. Aucun achat requis. Conditions générales applicables.",
};

export const TICTAC = {
  tapToSkip: "appuie pour passer",
};

export const WALL_UI = {
  startMiningAlt: "Commencer à Miner",
  mineBtnAria: "Commencer à miner et lancer le bot Telegram",
  launchingBot: "Lancement du bot…",
};
