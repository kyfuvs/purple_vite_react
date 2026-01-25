import React from 'react'
import { usePurple } from '../../context/PurpleContext'


export default function Set_N_stars() {
const{ 
    life_Index,
     n1,setN1,
     n2,setN2,
     n1_emperor, setN1_emperor,
     n2_intelligence, setN2_intelligence,
     }=usePurple();

const earth = '子丑寅卯辰巳午未申酉戌亥';
const palace = ['命宮','兄弟','夫妻','子女','財帛','疾厄','遷移','交友','事業','田宅','福德','父母']

// const str = "2025-01-18";
// const arr = str.split('-');
const n1_name = n1.split('-')[0]
const n2_name = n2.split('-')[0]
const n1_index = n1.split('-')[1]
const n2_index = n2.split('-')[1]
const n1_earth = earth.charAt(n1_index-1)
const n2_earth = earth.charAt(n2_index-1)
const p1_index = (12-(n1_index-life_Index))%12
const p2_index = (12-(n2_index-life_Index))%12
const p1_name = palace[p1_index]
const p2_name = palace[p2_index]

setN1_emperor(n1_name+'-'+n1_earth+'-'+p1_name)
setN2_intelligence(n2_name+'-'+n2_earth+'-'+p2_name)

  return (
    <div>
        Set_N_stars
        <p>{n1_name}-{n1_index}-{n1_earth}-(life_index:{life_Index})-(p1_index:{p1_index})-{p1_name}=={n1_emperor}</p>
        <p>{n2_name}-{n2_index}-{n2_earth}-(life_index:{life_Index})-(p2_index:{p2_index})-{p2_name}=={n2_intelligence}</p>
    </div>
  )
}
