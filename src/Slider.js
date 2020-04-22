import React, { useState } from 'react'
import './Slider.css'

function Slider({ voice }) {
  const [gain, setGain] = useState(0.0)

  return (
    <div className="Slider">
      <div className="SliderBody" />
    </div>
  )
}

export default Slider
