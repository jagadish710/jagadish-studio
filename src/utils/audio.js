// Web Audio API pure synthesized sci-fi sound effects (zero external assets needed)

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Audio effects silenced for a clean, professional, enterprise browsing experience
export function playCyberTone() {
  // Silent no-op: high-end corporate websites remain completely silent
}
