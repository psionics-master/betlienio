const files = {
  desertNight: "/sfx/desertNight.mp3",
  teleport: "/sfx/teleport.mp3",
  ticTak: "/sfx/ticTak.mp3",
  etTalk: "/sfx/etTalk.mp3",
  neuro: "/sfx/neuro.mp3",
  ufoHum: "/sfx/ufo_hum.wav",
  ufoCrash: "/sfx/loudThunder.mp3",
  smokeHiss: "/sfx/hum.mp3",
  campfireHum: "/sfx/hum.mp3",
  thunder: "/sfx/loudThunder.mp3",
};

const loopNames = new Set(["desertNight", "etTalk", "neuro", "ufoHum", "campfireHum"]);
const instances = {};

function getAudio(name) {
  if (!instances[name]) {
    const a = new Audio(files[name]);
    a.loop = loopNames.has(name);
    instances[name] = a;
  }
  return instances[name];
}

export function playSfx(name, { volume = 0.6 } = {}) {
  const a = getAudio(name);
  a.volume = volume;
  a.currentTime = 0;
  a.play().catch(() => {});
}

export function stopSfx(name) {
  const a = instances[name];
  if (!a) return;
  a.pause();
  a.currentTime = 0;
}

export function stopAllSfx() {
  Object.keys(instances).forEach(stopSfx);
}

export function fadeOutSfx(name, ms = 600) {
  const a = instances[name];
  if (!a) return;
  const startVol = a.volume;
  const startTime = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - startTime) / ms);
    a.volume = startVol * (1 - t);
    if (t < 1) requestAnimationFrame(step);
    else stopSfx(name);
  };
  requestAnimationFrame(step);
}
