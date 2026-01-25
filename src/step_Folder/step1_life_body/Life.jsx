import React from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../../context/PurpleContext";


export default function Life() {
  const { 
    lm, lh,
    life_Index, setLife_Index,
    body_Index, setBody_Index,
  
  } = usePurple();
  const earth="子丑寅卯辰巳午未申酉戌亥";
  const 寅 = 3
  const m_clock = (lm -1 + 寅) % 12;
  const h_index = earth.indexOf(lh);
  const life_antiClock = m_clock - h_index;
  const life_i = (life_antiClock <=0) ? (life_antiClock +12) : life_antiClock;
  setLife_Index(life_i);
  const body_clockwise = (m_clock + h_index) % 12;
  const body_i = (body_clockwise <=0) ? (body_clockwise +12) : body_clockwise;
  setBody_Index(body_i);
  // const m_earth = m_clock.charAt(m_index);
  return (
    <div>
      <div>
        month-{lm} m-Clockwise-Goto-{m_clock}
      </div>
      <div>
        h-{lh} h-index-{h_index} h-Anti-Clockwise-Goto-{life_antiClock} life-Index-{life_Index} 命宮-{earth.charAt(life_Index-1)} 
        h-Clockwise-Goto-{body_clockwise} body-Index-{body_Index} 身宮 -{earth.charAt(body_Index-1)}
      </div>
  
    </div>
    
  )
}
