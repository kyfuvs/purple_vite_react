import React from 'react'
// import { usePurple } from "../../context/PurpleContext";
import { usePurple } from "../../../context/PurpleContext";
export default function M_F() {
  const { 
    lyy, nuGender,
    mf, setMf,
    big10yr_Direction, setBig10yr_Direction 
  } = usePurple();
  const sky_lyy = lyy ? lyy.slice(0, 1) : '';
  const sky = '甲乙丙丁戊己庚辛壬癸';
  const sky_index = sky.indexOf(sky_lyy);
  const bright_yr= (sky_index +1) %2;
  let m_f = '';
  switch(bright_yr){
    case 0: m_f= nuGender === 'F' ? '陰女' : '陰男'; break;
    case 1: m_f= nuGender === 'F' ? '陽女' : '陽男'; break;
    default: m_f= '';
  }
  setMf(m_f);
  let direction = '';
   switch(bright_yr){
    case 0: direction= nuGender === 'F' ? 'clock' : 'antiClock'; break;
    case 1: direction= nuGender === 'F' ? 'antiClock' : 'clock'; break;
    default: direction= '';
  }
  setBig10yr_Direction(direction);
  return (
    <div>M_F {lyy}- {nuGender}-{sky_lyy}-{sky_index}-{bright_yr}-{mf}-{big10yr_Direction}</div>
  )
}
