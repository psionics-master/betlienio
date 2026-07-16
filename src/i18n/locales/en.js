// English is the reference locale — every other locale file should mirror
// this shape exactly (same keys, same array lengths/order).

// Ported verbatim from BetlienFront's src/constants/introContent.js —
// the two tap-triggered beats before the TicTac shows up.
export const INTRO_BEATS = [
  {
    text: "Roswell, New Mexico. One quiet desert night. You're camping, checking crypto games, and pretending this is a normal financial strategy.",
    button: "Chillin' like a villain",
  },
  {
    text: "Then you hear a loud electric hum coming from the sky — like a portal booting up above your tent.",
    button: "👆 Look up in the sky",
  },
];

// Ported verbatim from DIALOGUE_SCENES in introContent.js, meetAlien through
// neuralSetup. Stops right before minigameIntro (the Hybrid DNA Test
// minigame itself) — that's where the Telegram wall takes over.
export const DIALOGUE_SCENES = [
  {
    type: "meetAlien",
    portrait: null,
    text: [
      "💥 ZAAAP. A TicTac UFO faceplants into the Roswell desert. The sand glows. The cactus looks like it just signed an NDA.",
    ],
    choices: ["Approach the crash", "Freeze like leaked footage"],
  },
  {
    type: "alienFirstSpeech",
    portrait: "default",
    text: [
      "₿lurppz: Yo. You can see me? Great. Either you're a hybrid, or the crash gave you premium alien reception. Both are kind of a big deal.",
    ],
    choices: ["Step closer", "Pray to Joe Rogan"],
  },
  {
    type: "hybridScan",
    portrait: "think",
    text: [
      "₿lurppz: Hold up. Your brain is pinging the TicTac. Human software. Alien hardware. Crypto risk tolerance. Yep — you're a hybrid.",
    ],
    choices: ["I knew I was special", "This explains my portfolio"],
  },
  {
    type: "sayET",
    portrait: "default",
    text: ['You: "ET phone home?"\n\n₿lurppz: Cute. Copyrighted. Also my ride just crash-landed in New Mexico.'],
    choices: [],
  },
  {
    type: "missionReveal",
    portrait: "default",
    text: [
      "₿lurppz: Listen, hybrid. My crew is trapped inside the cover-up network — Roswell, Hangar 18, S-4, Area 51. All the premium DLC of government secrets.",
    ],
    choices: ["Disclosure?", "Area 51 has my attention"],
  },
  {
    type: "disclosureCost",
    portrait: "default",
    text: [
      "₿lurppz: Yeah — disclosure. But disclosure isn't cheap. Witnesses need protection, files need decrypting, artifacts need recovering, and somehow there are always intergalactic legal fees.",
    ],
    choices: ["So we fund disclosure?", "Truth has gas fees?"],
  },
  {
    type: "mapReveal",
    portrait: "default",
    text: [
      "₿lurppz: There are 50 NHI contacts hidden across the galaxy.",
      "Recruit them one by one, recover their files, and build the proof chain that powers the Disclosure Engine.",
    ],
    choices: ["Show me the map", "Alien side quest accepted"],
  },
  {
    type: "betlienGalactic",
    portrait: "default",
    text: [
      "₿lurppz: To do that, you'll mine Betlien Galactic points — casino-grade cosmic fuel for boosts, recruits, files, and very suspicious 'research expenses.'",
    ],
    choices: ["Mine the points", "Fund the weird stuff"],
  },
  {
    type: "economyBasics",
    portrait: "coin",
    text: [
      "₿lurppz: Quick tutorial before your human attention span gets abducted.",
      "🪙 Mine Betlien Galactic points. ⚡ Spend Energy on missions. 👽 Recruit NHIs to mine faster. 📁 Unlock files. 🛸 Push disclosure.",
    ],
    choices: ["Mine. Recruit. Disclose.", "I understood enough. Send it."],
  },
  {
    type: "casinoTease",
    portrait: "default",
    text: [
      "₿lurppz: And yes, there's a casino side to this galaxy. But first we need witnesses, files, and enough points to make the cover-up sweat.",
    ],
    choices: ["Priorities", "The casino better be haunted"],
  },
  {
    type: "neuralSetup",
    portrait: "think",
    text: [
      "₿lurppz: Before you go anywhere, I need to verify your DNA is hybrid-grade. Only a real human-alien hybrid can see all 3 plasma spheres glow at the same time. Regular humans just see static. Run the test.",
    ],
    choices: ["Run the Hybrid DNA Test", "I can see all 3 spheres"],
  },
];

export const TAP_TO_CONTINUE_LABEL = "TAP TO COMMUNICATE TELEPATHICALLY";

export const WALL_COPY = {
  eyebrow: "HYBRID DNA TEST",
  heading: "Human · Alien Hybrid DNA",
  body: "The TicTac interface only syncs inside Telegram. Launch the bot to run your Hybrid DNA Test and keep going.",
  cta: "Launch Telegram Bot",
  legal: "Free-to-play. No purchase required. Betlien Coins hold no monetary value and are not financial advice.",
  marqueeRow1: "BETLIEN  •  AVAILABLE ON TELEGRAM  •  ",
  marqueeRow2: "MINE THE GALAXY  •  PLAY GAMES  •  WIN BETLIEN COINS  •  WIN $GRAM COINS  •  ",
};

// Small UI chrome strings that live outside the narrative content above.
export const TOPBAR = {
  brand: "$BETLIEN",
  brandAria: "Betlien home",
  skip: "Skip →",
  openBot: "Open Bot",
};

export const COVER = {
  titleAlt: "Betlien — Mine the Galaxy",
  startMiningAria: "Start Mining",
  startMiningAlt: "Start Mining",
  footerTc: "18+ only. Free-to-play. No purchase required. T&C apply.",
};

export const TICTAC = {
  tapToSkip: "tap to skip",
};

export const WALL_UI = {
  startMiningAlt: "Start Mining",
  mineBtnAria: "Start Mining and launch the Telegram bot",
  launchingBot: "Launching bot…",
};
