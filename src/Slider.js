import React, { useEffect, useContext, useState } from 'react'
import './Slider.css'
import SynthContext from './SynthContext'

function Slider({ pid }) {

  const synth = useContext(SynthContext)
  const voice = synth.voice(pid)

  const [freq, setFreq] = useState(voice.osc.frequency.value)
  const [gain, setGain] = useState(voice.vca.gain.value)

  const handleDblClick = () => {
    setGain(0.5)
    synth.voiceGain(pid, 0.5)
  }

  return (
    <div className="Slider" onDoubleClick={handleDblClick}>
      <div className="SliderBody">
        <div className="Pink" />
      </div>
    </div>
  )
}

export default Slider
