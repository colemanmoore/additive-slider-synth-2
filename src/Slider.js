import React, { useState, useEffect, useContext } from 'react'
import SynthContext from './SynthContext'
import useSlider from './useSlider'
import { pink, green, sliderBodyColor } from './constant'

const sliderHeight = 300

function Slider({ pid, noteOn }) {

  const synth = useContext(SynthContext)
  const voice = synth.voice(pid)

  const [sliderColor, setSliderColor] = useState(pink)

  const [meterLevel, sliderOffset, handleMouseDown, handleMouseUp, handleDoubleClick] = useSlider({
    sliderHeight,
    initialLevel: !voice ? 0.0 : voice.vca.gain.value
  })

  useEffect(() => {
    if(!isNaN(meterLevel)) {
      synth.voiceGain(pid, meterLevel)
    }
  }, [meterLevel, synth, pid])

  useEffect(() => {
    synth.voiceDetune(pid, sliderOffset)
  }, [sliderOffset, synth, pid])

  useEffect(() => {
    setSliderColor(noteOn ? green : pink)
  }, [noteOn])

  return (
    <div
      style={Container}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onDoubleClick={() => { synth.resumeAudio(); handleDoubleClick() }}
    >
      <div style={{
        ...Body,
        left: `${sliderOffset}px`
      }}>
        <div
          style={{
            height: `${meterLevel * sliderHeight}px`,
            background: sliderColor,
            transition: 'height 0.08s'
          }}
        />
      </div>
    </div>
  )
}

const Container = {
  height: `${sliderHeight}px`,
  width: '50px',
  float: 'left',
  marginRight: '2px'
}

const Body = {
  backgroundColor: sliderBodyColor,
  border: 'black 1px solid',
  width: '40px',
  height: `${sliderHeight}px`,
  position: 'relative',
  left: '5px',
  cursor: 'grab',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end'
}

export default Slider
