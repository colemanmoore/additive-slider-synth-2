/* Additive Synth */

class AdditiveSynth {

  ctx = null
  voices = {}
  numberOfVoices = 0

  constructor(numberOfVoices) {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)()
    this.masterGain = this.ctx.createGain()
    this.numberOfVoices = numberOfVoices

    for (let pid = 0; pid < numberOfVoices; pid++) {
      const vca = this.ctx.createGain()
      vca.gain.value = 0.0
      vca.connect(this.masterGain)

      const osc = this.ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = 200 * (pid+1)
      osc.start()
      osc.connect(vca)

      this.voices[pid] = {
        osc,
        vca
      }
    }

    this.masterGain.connect(this.ctx.destination)
  }

  voice(pid) {
    return this.voices[pid]
  }

  changeMasterGain(newVal) {
    this.masterGain.gain.value = Math.min(Math.max(newVal, 0.0), 1.0)
  }

  noteChange(freq) {
    console.log(`noteChange ${freq}`)
    Object.keys(this.voices).forEach(pid => {
      this.voice(pid).osc.frequency.value = freq * (pid + 1)
    })
  }

  keyboardInput(keyCode) {
    this.noteChange(this.keyToFrequency(keyCode))
  }

  voiceGain(pid, val) {
    if (this.voices[pid]) {
      this.voices[pid].vca.gain.value = val / this.numberOfVoices
    }
  }

  voiceDetune(pid, cents) {
    if (this.voices[pid]) {
      this.voices[pid].osc.detune.value = cents
    }
  }

  keyToFrequency(keyCode) {

    const keyboardMapping = {
      65: 'a',
      83: 'd',
      68: 'e',
      70: 'f',
      71: 'g',
      72: 'a',
      74: 'b',
      75: 'c8',
      76: 'd8'
    }

    const frequencyMap = {
      c: 261.6,
      csh: 277.2,
      d: 297.7,
      dsh: 311.1,
      e: 329.6,
      f: 349.2,
      fsh: 370,
      g: 392.0,
      gsh: 415.3,
      a: 440.0,
      ash: 466.2,
      b: 493.9,
      c8: 523.2,
      d8: 595.4
    }

    if (keyboardMapping[keyCode]) {
      return frequencyMap[keyboardMapping[keyCode]]
    }
  }
}

export default AdditiveSynth

//
// function initReverb(irUrl) {
//   // wire it up
//   convolver.connect(masterGain);
//   voices.forEach(function(voice) {
//     voice.vca.connect(convolver);
//   });
//
//   var ajaxRequest = new XMLHttpRequest();
//   ajaxRequest.open('GET', irUrl, true);
//   ajaxRequest.responseType = 'arraybuffer';
//
//   ajaxRequest.onload = function() {
//     var irData = ajaxRequest.response;
//     ctx.decodeAudioData(irData, function(buffer) {
//       ctx.createBufferSource().buffer = buffer;
//       convolver.buffer = buffer;
//     });
//   };
//
//   ajaxRequest.send();
// }