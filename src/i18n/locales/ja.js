// Mirrors src/i18n/locales/en.js key-for-key. Keep array lengths/order (and
// scene `type` values) identical to the English file — App.jsx locates
// scenes by `type`, not by index.

export const INTRO_BEATS = [
  {
    text: "ニューメキシコ州ロズウェル。静かな砂漠の夜。キャンプをしながら仮想通貨ゲームをチェックして、これが普通の資産運用だと自分に言い聞かせている。",
    button: "悪役みたいにまったり中",
  },
  {
    text: "そのとき、空から大きな電気的なうなり音が聞こえてくる——まるでテントの上でポータルが起動しているかのように。",
    button: "👆 空を見上げる",
  },
];

export const DIALOGUE_SCENES = [
  {
    type: "meetAlien",
    portrait: null,
    text: [
      "💥 ズガーン。TicTac型UFOがロズウェルの砂漠に鼻先から墜落する。砂が光っている。サボテンはまるで秘密保持契約にサインしたばかりみたいな顔をしている。",
    ],
    choices: ["墜落現場に近づく", "流出映像みたいに固まる"],
  },
  {
    type: "alienFirstSpeech",
    portrait: "default",
    text: [
      "₿lurppz: よお。俺が見えるのか？すごいな。お前がハイブリッドか、この墜落でプレミアムなエイリアン受信機能を手に入れたかのどちらかだ。どっちにしてもかなりの大事件だぜ。",
    ],
    choices: ["もっと近づく", "ジョー・ローガンに祈る"],
  },
  {
    type: "hybridScan",
    portrait: "think",
    text: [
      "₿lurppz: 待てよ。お前の脳がTicTacに信号を送ってる。人間のソフトウェア。エイリアンのハードウェア。仮想通貨のリスク許容度。うん——お前はハイブリッドだ。",
    ],
    choices: ["自分が特別だと分かってた", "これで自分のポートフォリオの謎が解けた"],
  },
  {
    type: "sayET",
    portrait: "default",
    text: ["君: 「E.T.、おうちに電話」\n\n₿lurppz: かわいいセリフだな。著作権があるやつだ。それに俺の乗り物はニューメキシコに不時着したばかりなんだ。"],
    choices: [],
  },
  {
    type: "missionReveal",
    portrait: "default",
    text: [
      "₿lurppz: 聞け、ハイブリッド。俺の仲間は隠蔽ネットワークの中に閉じ込められている——ロズウェル、ハンガー18、S-4、エリア51。政府の秘密のプレミアムDLC全部だ。",
    ],
    choices: ["情報開示ってこと？", "エリア51に興味が湧いた"],
  },
  {
    type: "disclosureCost",
    portrait: "default",
    text: [
      "₿lurppz: そう——情報開示だ。でも情報開示は安くない。証人には保護が必要だし、ファイルは解読が必要、遺物は回収が必要——そしてなぜか銀河間の弁護士費用は常について回る。",
    ],
    choices: ["じゃあ俺たちが情報開示に資金提供するのか？", "真実にもガス代がかかるのか？"],
  },
  {
    type: "mapReveal",
    portrait: "default",
    text: [
      "₿lurppz: 銀河中に50体のNHI（非人類知性体）のコンタクトが隠れている。",
      "一体ずつ仲間にして、ファイルを回収し、情報開示エンジンを動かす証拠の連鎖を築くんだ。",
    ],
    choices: ["地図を見せてくれ", "エイリアンのサイドクエスト、受けた"],
  },
  {
    type: "betlienGalactic",
    portrait: "default",
    text: [
      "₿lurppz: そのためには、Betlien Galacticポイントをマイニングする必要がある——ブーストや仲間集め、ファイル、そして怪しさ満点の「研究費」のためのカジノ級の宇宙燃料だ。",
    ],
    choices: ["ポイントをマイニングする", "怪しいことに資金提供する"],
  },
  {
    type: "economyBasics",
    portrait: "coin",
    text: [
      "₿lurppz: お前の人間の集中力がアブダクトされる前に、簡単なチュートリアルだ。",
      "🪙 Betlien Galacticポイントをマイニング。⚡ ミッションでエネルギーを使う。👽 NHIを仲間にしてマイニングを加速。📁 ファイルを解除。🛸 情報開示を推し進める。",
    ],
    choices: ["マイニング。仲間集め。情報開示。", "十分理解した。行こう。"],
  },
  {
    type: "casinoTease",
    portrait: "default",
    text: [
      "₿lurppz: そうそう、この銀河にはカジノの側面もある。でもまずは証人とファイル、そして隠蔽工作を焦らせるだけのポイントが必要だ。",
    ],
    choices: ["優先順位が大事だな", "そのカジノ、幽霊が出るくらいがちょうどいい"],
  },
  {
    type: "neuralSetup",
    portrait: "think",
    text: [
      "₿lurppz: どこかへ行く前に、お前のDNAがハイブリッド級かどうかを確認する必要がある。本物の人間とエイリアンのハイブリッドだけが、3つのプラズマ球が同時に光るのを見ることができる。普通の人間にはただの砂嵐にしか見えない。テストを実行しろ。",
    ],
    choices: ["ハイブリッドDNAテストを実行する", "3つの球すべてが見える"],
  },
];

export const TAP_TO_CONTINUE_LABEL = "タップしてテレパシーで交信する";

export const WALL_COPY = {
  eyebrow: "ハイブリッドDNAテスト",
  heading: "人間・エイリアン ハイブリッドDNA",
  body: "TicTacインターフェースはTelegram内でのみ同期します。ボットを起動してハイブリッドDNAテストを実行し、先へ進みましょう。",
  cta: "Telegramボットを起動",
  legal: "基本無料プレイ。購入は不要です。Betlien Coinsに金銭的価値はなく、投資助言ではありません。",
  marqueeRow1: "BETLIEN  •  Telegramで利用可能  •  ",
  marqueeRow2: "銀河をマイニング  •  ゲームで遊ぶ  •  BETLIEN COINSを獲得  •  $GRAM COINSを獲得  •  ",
};

export const TOPBAR = {
  brand: "$BETLIEN",
  brandAria: "Betlien ホーム",
  skip: "スキップ →",
  openBot: "ボットを開く",
};

export const COVER = {
  titleAlt: "Betlien — 銀河をマイニング",
  startMiningAria: "マイニング開始",
  startMiningAlt: "マイニング開始",
  footerTc: "18歳以上限定。基本無料プレイ。購入は不要です。利用規約が適用されます。",
};

export const TICTAC = {
  tapToSkip: "タップしてスキップ",
};

export const WALL_UI = {
  startMiningAlt: "マイニング開始",
  mineBtnAria: "マイニングを開始してTelegramボットを起動",
  launchingBot: "ボットを起動中…",
};
