import React, { useContext } from 'react'
import './App.css'
import Slider from './Slider'
import SynthContext from './SynthContext'

function App() {
  const synth = useContext(SynthContext)

  const handleKeyDown = ({ keyCode }) => {
    synth.keyboardInput(keyCode)
  }

  const handleKeyUp = ({ keyCode }) => {
    console.log(`key up ${keyCode}`)
  }

  return (
    <div
      className="App"
      tabIndex="0"
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div className="spectrumControls">
        {Object.keys(synth.voices).map(pid => (
          <Slider key={pid} pid={pid} />
        ))}
      </div>
      <div className="hint">Double-click a slider to turn on a harmonic</div>
      <div className="hint">Press a key from the middle row of your keyboard: ASDFGHJKL
      </div>
    </div>
  )
}

export default App
