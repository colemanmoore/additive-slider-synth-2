import { useState } from 'react'

const within = (min, input, max) => Math.min(Math.max(min, input), max)

const useSlider = ({ sliderHeight = 100, initialLevel = 0.0 }) => {
  const [sliderOffset, setSliderOffset] = useState(5)
  const [meterLevel, setMeterLevel] = useState(initialLevel)

  let xPosStart, xPosEnd

  const handleMouseDown = ({ pageX }) => {
    xPosStart = xPosEnd = pageX
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }

  const handleMouseMove = ({ pageX, layerY }) => {
    setMeterLevel((sliderHeight - layerY) / sliderHeight)
    xPosEnd = pageX
    const deltaX = xPosEnd - xPosStart
    if (deltaX !== 0) {
      setSliderOffset(within(0, sliderOffset + deltaX, 10))
    }
  }

  const handleDoubleClick = () => {
    if (meterLevel === 0) {
      setMeterLevel(0.5)
    } else {
      setMeterLevel(0)
    }
  }

  return [
    meterLevel,
    sliderOffset,
    handleMouseDown,
    handleMouseUp,
    handleDoubleClick
  ]
}

export default useSlider