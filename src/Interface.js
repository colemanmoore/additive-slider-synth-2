import React, { useState, useContext, useEffect, useRef } from 'react'
import Slider from './Slider'
import SynthContext from './SynthContext'
import useSparkle from './useSparkle'

const Interface = () => {

  const synth = useContext(SynthContext)
  const [sparkling, setNoteOn] = useSparkle()
  const mainRef = useRef(null)
  const [voices, setVoices] = useState([])
  const [waveform, setWaveform] = useState(synth.waveform)

  useEffect(() => {
    mainRef.current.focus() // so that key events are caught
  }, [])

  useEffect(() => {
    setVoices(Object.keys(synth.voices))
  }, [synth, synth.voices, synth.voicesConnected])

  useEffect(() => {
    if (synth && synth.masterGain > 0) {
      setNoteOn(true)
      setTimeout(() => setNoteOn(false), 100)
    }
  }, [synth.masterGain])

  const handleKeyDown = ({ keyCode }) => {
    synth.keyboardInput(keyCode)
    setNoteOn(true)
  }

  const handleKeyUp = () => {
    synth.keyboardInput(synth.OFF)
    setNoteOn(false)
  }

  const changeWave = () => {
    setWaveform(synth.changeWave())
  }

  return (
    <div
      style={Container}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={mainRef}
      tabIndex="0"
    >
      <div>
        {voices.map(pid => (
          <Slider key={pid} pid={pid} noteOn={sparkling} />
        ))}
        <div style={{color: '#ff5'}}>{synth.voices.length}</div>
      </div>

      <div style={Console}>
        <span style={Button} onClick={changeWave}>{synth.waveform}</span>
      </div>
    </div>
  )
}

const Container = {
  minWidth: '700px',
  margin: '100px auto 50px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}

const Console = {
  padding: '50px',
}

const Button = {
  border: '1px solid #ffffff',
  color: '#ffffff',
  fontSize: '1.2rem',
  letterSpacing: '4px',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer'
}

export default Interface