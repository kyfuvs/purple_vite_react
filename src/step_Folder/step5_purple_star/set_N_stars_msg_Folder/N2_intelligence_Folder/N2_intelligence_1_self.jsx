import React from 'react'
import { usePurple } from '../../../../context/PurpleContext'

export default function N2_intelligence_1_self() {
    const{
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        clickStar,setClickStar,
    }=usePurple
    setMsgBoxText(clickStar+'N2_intelligence_1_self')
  return (
    <div>N2_intelligence_1_self</div>
  )
}
