import React from 'react'
import { usePurple } from './context/PurpleContext'

export default function Change_4() {
    const{showGrid}=usePurple()
  return (
    <div className={`
    w-[25rem] 
    ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    `}>
        <div className='invisible'>
          Change_4
        </div>
    </div>
  )
}
