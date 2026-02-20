import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import R1_Left_Assistant_Map from './Aux2_Map/R1_Left_Assistant_Map'
import R2_right_Assistant_Map from './Aux2_Map/R2_right_Assistant_Map'
import R3_sky_Horse_Map from './Aux2_Map/R3_sky_Horse_Map'
export default function Aux2_month() {
  const{
    lyy, setLyy,
    lm, setLm,
    aux2_leftAssistant, setAux2_leftAssistant,
    aux2_rightAssistant, setAux2_rightAssistant,
    aux2_leftAssistant_Id, setAux2_leftAssistant_Id,
    aux2_rightAssistant_Id, setAux2_rightAssistant_Id,
    aux2_skyHorse, setAux2_skyHorse,
  }=usePurple()
  const earth = '子丑寅卯辰巳午未申酉戌亥';
  // setAux2_leftAssistant(R1_Left_Assistant_Map[Number(lm)])
  // setAux2_rightAssistant(R2_right_Assistant_Map[Number(lm)])
  const leftAssistant_earth=R1_Left_Assistant_Map[Number(lm)].split('-')[1]
  const rightAssistant_earth=R2_right_Assistant_Map[Number(lm)].split('-')[1]
  // setAux2_leftAssistant(R1_Left_Assistant_Map[Number(lm)])
  // setAux2_rightAssistant(R2_right_Assistant_Map[Number(lm)])
  setAux2_leftAssistant_Id(earth.indexOf(leftAssistant_earth)+1)
  setAux2_rightAssistant_Id(earth.indexOf(rightAssistant_earth)+1)
  const lyy_earth=lyy.slice(1,)
  setAux2_skyHorse(R3_sky_Horse_Map[lyy_earth])
  return (
    <div>
      Aux2_month
      <p>{lm}-{lyy}-{lyy_earth}</p>
      <p>{aux2_leftAssistant}</p>
       <p>{aux2_rightAssistant}</p>
       <p>{leftAssistant_earth}-{aux2_leftAssistant_Id}</p>
       <p>{rightAssistant_earth}-{aux2_rightAssistant_Id}</p>
       {/* <p>{aux2_rightAssistant_Id}</p> */}
       <p>{aux2_skyHorse}</p>
    </div>
  )
}
