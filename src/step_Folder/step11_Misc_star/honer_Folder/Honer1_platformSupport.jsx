import React from 'react'
import { usePurple } from '../../../context/PurpleContext'
// 用生時定位，台輔從午位開始順時針排列到生時定位，

export default function Honer1_platformSupport() {
    const {
        lh,
        honor1_platformSupport, setHonor1_platformSupport,
        honor2_officialRecognition, setHonor2_officialRecognition,
    }=usePurple()
    const sky = '甲乙丙丁戊己庚辛壬癸';
    const earth = '子丑寅卯辰巳午未申酉戌亥';
    const start = '午'
    const start_Id = earth.indexOf(start)+1
    const lh_Id = earth.indexOf(lh)
    
  return (
    <div>
        Honer1_platformSupport
        <p>{start}-{start_Id};{lh}-{lh_Id}</p>
    </div>
  )
}
