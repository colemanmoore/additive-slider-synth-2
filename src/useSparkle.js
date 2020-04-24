import { useState, useEffect } from 'react'

const useSparkle = () => {
  const [noteOn, setNoteOn] = useState(false)
  const [sparkling, setSparkling] = useState(false)

  useEffect(() => {
    if (noteOn) {
      setSparkling(true)
      setTimeout(() => {
        setSparkling(false)
      }, 100)
    }

    if (!noteOn) {
      setSparkling(false)
    }
  }, [noteOn])

  return [
    sparkling,
    setNoteOn
  ]
}

export default useSparkle