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
      <div style={Hint}>press a key: ASDFGHJKL</div>
    </div>
  )
}

const Container = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '50px'
}

const Hint = {
  color: '#f49',
  fontFamily: 'sans-serif',
  letterSpacing: '3px',
  fontSize: '1.8rem',
  lineHeight: '2.15rem',
  marginBottom: '0.25rem'
}

export default App
