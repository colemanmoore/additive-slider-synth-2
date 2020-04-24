import React, { useEffect, useContext } from 'react'
import './Slider.css'
import SynthContext from './SynthContext'
import useSlider from './useSlider'

const sliderHeight = 300

function Slider({ pid, noteOn }) {

  const synth = useContext(SynthContext)
  const voice = synth.voice(pid)

  const [meterLevel, setMeterLevel, sliderOffset, handleMouseDown, handleMouseUp, handleDoubleClick]
    = useSlider({ sliderHeight, meterLevel: voice.vca.gain.value })

  useEffect(() => {
    if(!isNaN(meterLevel)) {
      synth.voiceGain(pid, meterLevel)
    }
  }, [meterLevel])

  useEffect(() => {
    synth.voiceDetune(pid, sliderOffset)
  }, [sliderOffset])

  return (
    <div
      className="Slider"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDoubleClick={handleDoubleClick}
    >
      <div className="SliderBody" style={{left: `${sliderOffset}px`}}>
        <div
          className="LevelMeter"
          style={{height: `${meterLevel * sliderHeight}px`, background: noteOn ? '#b3dbac' : '#ff4499' }}
        />
      </div>
    </div>
  )
}

export default Slider
