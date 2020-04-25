import React, { useRef } from 'react'
import Interface from './Interface'
import SynthContext from './SynthContext'
import Synth from './Synth'

const numberOfVoices = 16

function App() {
  const synth = new Synth({ numberOfVoices })
  synth.voiceGain(0, 0,5)

  const mainRef = useRef(null)

  const makeSureSynthOn = () => {
    synth.resumeAudio()
  }

  return (
    <div style={Container} onFocus={makeSureSynthOn} ref={mainRef}>
      <SynthContext.Provider value={synth}>
        <Interface />
      </SynthContext.Provider>
    </div>
  )
}

const Container = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '50px'
}

export default App
