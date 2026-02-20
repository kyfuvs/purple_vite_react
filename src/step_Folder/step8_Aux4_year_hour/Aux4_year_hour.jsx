import React, {useEffect} from 'react'
import { usePurple } from '../../context/PurpleContext'
import R1_fire_Map from './Aux4_Map/R1_fire_Map'
import R2_bell_Map from './Aux4_Map/R2_bell_Map'

export default function Aux4_year_hour() {
  const {
    lyy,lh,
    aux4_fire_Id, setAux4_fire_Id,
    aux4_bell_Id, setAux4_bell_Id,
    aux4_fire, setAux4_fire,
    aux4_bell, setAux4_bell,
  
  }=usePurple()
  const earth = '子丑寅卯辰巳午未申酉戌亥';
  const lyy_earth=lyy.slice(1,)

// const year = '寅'
// const hour = '子'
// const palace = R1_fire_Map?.[year]?.[hour]
// useEffect(() => {
// setAux4_fire(R1_fire_Map?.[lyy_earth]?.[lh])
// setAux4_bell(R2_bell_Map?.[lyy_earth]?.[lh])
// }, [lyy, lh])
const fire= R1_fire_Map?.[lyy_earth]?.[lh]
const fire_earth = fire.split('-')[1]
const bell= R2_bell_Map?.[lyy_earth]?.[lh]
const bell_earth = bell.split('-')[1]
useEffect(() => {
setAux4_fire_Id(earth.indexOf(fire_earth)+1)
setAux4_bell_Id(earth.indexOf(bell_earth)+1)

}, [lyy, lh])
// setAux4_fire_Id(R1_fire_Map?.[lyy_earth]?.[lh] ? (R1_fire_Map[lyy_earth][lh]) : 0)
// setAux4_bell_Id(R2_bell_Map?.[lyy_earth]?.[lh] ? (R2_bell_Map[lyy_earth][lh]) : 0)

  return (
    <div>
        Aux4_year_hour
        <p>{lyy}-{lyy_earth}-{lh}</p>
        <p>{fire_earth}-{aux4_fire_Id}-{aux4_fire}</p>
        {/* <p>{aux4_bell_Id}</p> */}
    </div>
  )
}
