import React from 'react'
import { usePurple } from '../../../context/PurpleContext';

export default function Set_N1_Id() {
    const {
        N1_earth,
        N1_Id, setN1_Id
    }=usePurple()
    let i = 0
  switch(N1_earth){
    case '子': i =1;break;
    case '丑': i =2;break;
    case '寅': i =3;break;
    case '卯': i =4;break;
    case '辰': i =5;break;
    case '巳': i =6;break;
    case '午': i =7;break;
    case '未': i =8;break;
    case '申': i =9;break;
    case '酉': i =10;break;
    case '戌': i =11;break;
    case '亥': i =12;break;
    default: i=0;break;
  }
  setN1_Id(i)
  return (
    <div>Set_N1_Id:{N1_Id}</div>
  )
}
