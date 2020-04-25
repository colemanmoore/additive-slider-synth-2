import React, { useState, useContext, useEffect, useRef } from 'react'
import Slider from './Slider'
import SynthContext from './SynthContext'
import useSparkle from './useSparkle'
import { pink, green, letters } from './constant'

const Interface = () => {

  const synth = useContext(SynthContext)
  const [sparkling, setNoteOn] = useSparkle()
  const mainRef = useRef(null)
  const [voices, setVoices] = useState([])
  const [waveform, setWaveform] = useState(synth.waveform)
  const [keysElement, setKeysElement] = useState(null)
  const [currentNote, setCurrentNote] = useState(null)

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
  }, [synth, synth.masterGain, setNoteOn])

  useEffect(() => {
    if (currentNote) {
      setKeysElement(
        <strong style={{ color: pink }}>
          {Array.from(letters).map(letter =>
            letter === currentNote ? <span key={letter} style={{ color: green }}>{letter}</span> : letter
          )}
        </strong>
      )
    } else {
      setKeysElement(<strong style={{ color: pink }}>{letters}</strong>)
    }
  }, [currentNote])

  const handleKeyDown = ({ keyCode }) => {
    synth.keyboardInput(keyCode)
    setCurrentNote({
      65: 'A',
      83: 'S',
      68: 'D',
      70: 'F',
      71: 'G',
      72: 'H',
      74: 'J',
      75: 'K',
      76: 'L'
    }[keyCode] || null)
    setNoteOn(true)
  }

  const handleKeyUp = () => {
    synth.keyboardInput(synth.OFF)
    setCurrentNote(null)
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
        <span style={Button} onClick={changeWave}>{waveform}</span>
      </div>
      <div style={Hint}>press a key: {keysElement}</div>
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

const Hint = {
  color: '#f49',
  fontFamily: 'sans-serif',
  letterSpacing: '3px',
  fontSize: '1.8rem',
  lineHeight: '2.15rem',
  marginBottom: '0.25rem'
}

export default Interface