export type SfxName =
  | "addToCart"
  | "addToFav"
  | "celebration"
  | "quantity"
  | "remove"
  | "disabled"
  | "progress"
  | "swipe";

const SFX_MAP: Record<SfxName, string> = {
  addToCart: "/sfx/select.wav",
  addToFav: "/sfx/transition_up.wav",
  celebration: "/sfx/celebration.wav",
  quantity: "/sfx/quantity.wav",
  remove: "/sfx/toggle_off.wav",
  disabled: "/sfx/disabled.wav",
  progress: "/sfx/progress_loop.wav",
  swipe: "/sfx/swipe_04.wav",
};

// Cache for reuse
const soundCache: Partial<Record<SfxName, HTMLAudioElement>> = {};
const activeLoops: Partial<Record<SfxName, HTMLAudioElement>> = {};

export function preloadSfx() {
  Object.entries(SFX_MAP).forEach(([name, src]) => {
    const audio = new Audio(src);
    audio.preload = "auto";
    soundCache[name as SfxName] = audio;
  });
}

export function playSfx(name: SfxName) {
  try {
    // Looping sound
    if (name === "progress") {
      if (activeLoops[name]) return;

      const audio = new Audio(SFX_MAP[name]);
      audio.loop = true;
      audio.play();

      activeLoops[name] = audio;
      return;
    }

    // One-shot sound (clone for rapid taps)
    const base = soundCache[name] || new Audio(SFX_MAP[name]);
    const audio = base.cloneNode(true) as HTMLAudioElement;

    audio.currentTime = 0;
    audio.play();

  } catch (err) {
    console.warn(`Failed to play SFX "${name}"`, err);
  }
}

export function stopSfx(name: SfxName) {
  const audio = activeLoops[name];
  if (!audio) return;

  audio.pause();
  audio.currentTime = 0;

  delete activeLoops[name];
}