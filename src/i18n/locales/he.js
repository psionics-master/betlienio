// Mirrors src/i18n/locales/en.js key-for-key. Keep array lengths/order (and
// scene `type` values) identical to the English file — App.jsx locates
// scenes by `type`, not by index. Hebrew is RTL — see languages.js `dir`.

export const INTRO_BEATS = [
  {
    text: "רוזוול, ניו מקסיקו. לילה שקט אחד במדבר. אתה קמפינג, בודק משחקי קריפטו, ומעמיד פנים שזו אסטרטגיה פיננסית נורמלית.",
    button: "מצטנן כמו נבל",
  },
  {
    text: "לפתע אתה שומע זמזום חשמלי חזק שמגיע מהשמיים — כאילו פורטל נדלק מעל האוהל שלך.",
    button: "👆 להסתכל לשמיים",
  },
];

export const DIALOGUE_SCENES = [
  {
    type: "meetAlien",
    portrait: null,
    text: [
      "💥 בּוּם. עב״מ בצורת טיק-טק נוחת על האף במדבר רוזוול. החול זוהר. הקקטוס נראה כאילו הוא רק חתם על הסכם סודיות.",
    ],
    choices: ["להתקרב להתרסקות", "לקפוא במקום כמו בסרטון שדלף"],
  },
  {
    type: "alienFirstSpeech",
    portrait: "default",
    text: [
      "₿lurppz: היי. אתה רואה אותי? מעולה. או שאתה היברידי, או שההתרסקות נתנה לך קליטה חייזרית פרימיום. שני המקרים די משמעותיים.",
    ],
    choices: ["להתקרב עוד", "להתפלל לג'ו רוגן"],
  },
  {
    type: "hybridScan",
    portrait: "think",
    text: [
      "₿lurppz: רגע. המוח שלך שולח פינג לטיק-טק. תוכנה אנושית. חומרה חייזרית. סיבולת סיכון קריפטו. כן — אתה היברידי.",
    ],
    choices: ["ידעתי שאני מיוחד", "זה מסביר את התיק שלי"],
  },
  {
    type: "sayET",
    portrait: "default",
    text: ["אתה: ״E.T. מתקשר הביתה?״\n\n₿lurppz: חמוד. יש על זה זכויות יוצרים. וגם הרכב שלי בדיוק התרסק בניו מקסיקו."],
    choices: [],
  },
  {
    type: "missionReveal",
    portrait: "default",
    text: [
      "₿lurppz: תקשיב, היברידי. הצוות שלי לכוד בתוך רשת ההסתרה — רוזוול, האנגר 18, S-4, אזור 51. כל ה-DLC הפרימיום של סודות הממשל.",
    ],
    choices: ["חשיפה?", "אזור 51 תפס את תשומת הלב שלי"],
  },
  {
    type: "disclosureCost",
    portrait: "default",
    text: [
      "₿lurppz: כן — חשיפה. אבל חשיפה זה לא זול. לעדים צריך הגנה, לקבצים צריך פענוח, לחפצים צריך שחזור, ומאיזושהי סיבה תמיד יש דמי עורכי דין בין-גלקטיים.",
    ],
    choices: ["אז אנחנו מממנים את החשיפה?", "לאמת יש עמלת גז?"],
  },
  {
    type: "mapReveal",
    portrait: "default",
    text: [
      "₿lurppz: יש 50 אנשי קשר מסוג NHI מוסתרים ברחבי הגלקסיה.",
      "גייס אותם אחד אחד, שחזר את הקבצים שלהם, ובנה את שרשרת ההוכחות שמפעילה את מנוע החשיפה.",
    ],
    choices: ["תראה לי את המפה", "משימת צד חייזרית התקבלה"],
  },
  {
    type: "betlienGalactic",
    portrait: "default",
    text: [
      "₿lurppz: כדי לעשות את זה, תכרה נקודות Betlien Galactic — דלק קוסמי ברמת קזינו לבוסטים, גיוסים, קבצים, ו״הוצאות מחקר״ חשודות במיוחד.",
    ],
    choices: ["לכרות את הנקודות", "לממן את הדברים המוזרים"],
  },
  {
    type: "economyBasics",
    portrait: "coin",
    text: [
      "₿lurppz: מדריך מהיר לפני שיחטפו לך את קשב הקשב האנושי.",
      "🪙 כרה נקודות Betlien Galactic. ⚡ הוצא אנרגיה על משימות. 👽 גייס NHI כדי לכרות מהר יותר. 📁 שחרר קבצים. 🛸 קדם את החשיפה.",
    ],
    choices: ["לכרות. לגייס. לחשוף.", "הבנתי מספיק. קדימה."],
  },
  {
    type: "casinoTease",
    portrait: "default",
    text: [
      "₿lurppz: וכן, יש גם צד קזינו לגלקסיה הזו. אבל קודם אנחנו צריכים עדים, קבצים, ומספיק נקודות כדי לגרום להסתרה להזיע.",
    ],
    choices: ["סדרי עדיפויות", "כדאי שהקזינו יהיה רדוף רוחות"],
  },
  {
    type: "neuralSetup",
    portrait: "think",
    text: [
      "₿lurppz: לפני שתלך לאיפשהו, אני צריך לוודא שה-DNA שלך ברמה היברידית. רק היברידי אמיתי בין אדם לחייזר יכול לראות את שלושת כדורי הפלזמה זוהרים בו-זמנית. בני אדם רגילים רואים רק סטטי. תעבור את המבחן.",
    ],
    choices: ["לעבור את מבחן ה-DNA ההיברידי", "אני רואה את כל שלושת הכדורים"],
  },
];

export const TAP_TO_CONTINUE_LABEL = "הקש כדי לתקשר טלפתית";

export const WALL_COPY = {
  eyebrow: "מבחן DNA היברידי",
  heading: "DNA היברידי: אדם · חייזר",
  body: "ממשק הטיק-טק מסתנכרן רק בתוך טלגרם. הפעל את הבוט כדי לעבור את מבחן ה-DNA ההיברידי ולהמשיך.",
  cta: "הפעל את בוט הטלגרם",
  legal: "משחק חינמי. אין צורך ברכישה. למטבעות Betlien אין ערך כספי והם אינם ייעוץ פיננסי.",
  marqueeRow1: "BETLIEN  •  זמין בטלגרם  •  ",
  marqueeRow2: "כרה את הגלקסיה  •  שחק משחקים  •  זכה במטבעות BETLIEN  •  זכה במטבעות $GRAM  •  ",
};

export const TOPBAR = {
  brand: "$BETLIEN",
  brandAria: "Betlien — עמוד הבית",
  skip: "דלג ←",
  openBot: "פתח בוט",
};

export const COVER = {
  titleAlt: "Betlien — כרה את הגלקסיה",
  startMiningAria: "התחל לכרות",
  startMiningAlt: "התחל לכרות",
  footerTc: "בגילאי 18 ומעלה בלבד. משחק חינמי. אין צורך ברכישה. חלים תנאי השימוש.",
};

export const TICTAC = {
  tapToSkip: "הקש כדי לדלג",
};

export const WALL_UI = {
  startMiningAlt: "התחל לכרות",
  mineBtnAria: "התחל לכרות והפעל את בוט הטלגרם",
  launchingBot: "מפעיל בוט…",
};
