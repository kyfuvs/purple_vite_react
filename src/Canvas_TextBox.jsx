import React from 'react'
import Canvas from './Canvas'
import TextBox from './TextBox'

export default function Canvas_TextBox() {
  return (
    <div className="relative px-5 flex flex-col items-center">
  <TextBox />

  {/* Canvas content */}
  <div className="flex flex-col justify-center items-center">
    <Canvas />
  </div>
</div>

  )
}
