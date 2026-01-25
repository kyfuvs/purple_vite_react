import React from 'react'
import { usePurple } from '../../../../context/PurpleContext'

export default function N2_1_self() {
    const{
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        clickStar,setClickStar,
    }=usePurple
    // setMsgBoxText(clickStar+'N2_intelligence_1_self')
    setMsgBoxText('N2_intelligence_1_self')
  return 'N2_intelligence_1_self'
  
}
