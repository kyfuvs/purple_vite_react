import React from 'react'
import { usePurple } from './context/PurpleContext'

export default function MsgBox() {
    const{
        showGrid,
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        starDetail, setStarDetail,
    }=usePurple()
  return (
    <div className={`
    w-[25rem] 
    ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    `}>
        {/* <div className='invisible'>MsgBox</div> */}
        {showMsgBox &&
        <div
        className="
            text-[0.75rem] sm:text-sm md:text-base lg:text-[0.75rem]
            max-h-[20rem]
            overflow-y-auto
            pr-2
            whitespace-pre-wrap
        "
        >
            
        <p>{msgBoxText}</p>
        <p>{starDetail}</p>
        
        </div>
        }
    </div>  
  )
}
