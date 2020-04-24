import React, { useContext, useRef, useEffect } from 'react'
import './App.css'
import Slider from './Slider'
import SynthContext from './SynthContext'
import useSparkle from './useSparkle'

function App() {
  const synth = useContext(SynthContext)
  const mainRef = useRef(null)
  const [sparkling, setNoteOn] = useSparkle()

  useEffect(() => {
    if (synth.masterGain > 0) {
      setNoteOn(true)
      setTimeout(() => setNoteOn(false), 100)
    }
  }, [synth.masterGain])

  useEffect(() => {
    mainRef.current.focus()
  }, [])

  const handleKeyDown = ({ keyCode }) => {
    // if (nothingPlayedYet) {
    //   synth.voiceGain(0, 0.5)
    //   setNothingPlayedYet(false)
    // }
    synth.keyboardInput(keyCode)
    setNoteOn(true)
  }

  const handleKeyUp = () => {
    synth.keyboardInput(synth.OFF)
    setNoteOn(false)
  }

  return (
    <div
      className="App"
      tabIndex="0"
      ref={mainRef}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <div className="spectrumControls">
        {Object.keys(synth.voices).map(pid => (
          <Slider key={pid} pid={pid} noteOn={sparkling} />
        ))}
      </div>
      <div className="hint">Double-click a slider to turn on a harmonic</div>
      <div className="hint">Press a key from the middle row of your keyboard: ASDFGHJKL
      </div>
    </div>
  )
}

export default App
