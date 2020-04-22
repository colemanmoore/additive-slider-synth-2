import React from 'react'
import './App.css'
import Slider from './Slider'
import Synth from './Synth'

Synth.init(16)

function App() {
  return (
    <div className="App">
      <div className="spectrumControls">
        {Synth.voices().map(function(v) {
          return <Slider voice={v} />
        })}
      </div>
      <div className="hint">Double-click a slider to turn on a harmonic</div>
      <div className="hint">Press a key from the middle row of your keyboard: ASDFGHJKL
      </div>
    </div>
  )
}

export default App
