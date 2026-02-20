import React from 'react'
import { usePurple } from '../../../context/PurpleContext'

export default function Set_S_stars() {
    const{S1_Id,click_boxId,
      
    }=usePurple()
    // 天府星>太陰星>貪狼星>巨門星>天相星>天梁星>七殺星>空三格>破軍星
    const S_stars=['天府','太陰','貪狼','巨門','天相','天梁','七殺','','','','破軍']
    const i = (((click_boxId - S1_Id ))+12)%12
  return (
    <div>
        Set_S_stars
        <p>{S1_Id}-{click_boxId}-{i}</p>
    </div>
  )
}
