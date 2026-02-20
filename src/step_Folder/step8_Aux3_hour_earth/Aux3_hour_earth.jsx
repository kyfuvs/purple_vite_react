import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import R1_manK_Map from './Aux3_Map/R1_manK_Map'
import R2_manC_Map from './Aux3_Map/R2_manC_Map'
import R3_earthEmpty_Map from './Aux3_Map/R3_earthEmpty_Map'
import R4_earthThief_Map from './Aux3_Map/R4_earthThief_Map'

export default function Aux3_hour_earth() {
    const {
        lh, setLh,
        aux3_manK, setAux3_manK,
        aux3_manC, setAux3_manC,
        aux3_manC_Id, setAux3_manC_Id,
        aux3_manK_Id, setAux3_manK_Id,
        aux3_earthEmpty, setAux3_earthEmpty,
        aux3_earthThief, setAux3_earthThief,
    }=usePurple()
    const earth = '子丑寅卯辰巳午未申酉戌亥'; 
// setAux3_manK(R1_manK_Map[lh])
// setAux3_manC(R2_manC_Map[lh])
const manK_earth=R1_manK_Map[lh].split('-')[1]
const manC_earth=R2_manC_Map[lh].split('-')[1]
setAux3_manK_Id(earth.indexOf(manK_earth)+1)
setAux3_manC_Id(earth.indexOf(manC_earth)+1)
setAux3_earthEmpty(R3_earthEmpty_Map[lh])
setAux3_earthThief(R4_earthThief_Map[lh])
  return (
    <div>
        Aux3_hour_earth
        <p>{lh}</p>
        {/* <p>{aux3_manK}</p>
        <p>{aux3_manC}</p> */}
        <p>manK_earth:{manK_earth}-{aux3_manK_Id}</p>
        <p>manC_earth:{manC_earth}-{aux3_manC_Id}</p>
        <p>{aux3_earthEmpty}</p>
        <p>{aux3_earthThief}</p>
    </div>
  )
}
