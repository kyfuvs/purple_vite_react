import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import Row_2_water from './D30/Row_2_water'
import Row_3_wood from './D30/Row_3_wood'
import Row_4_gold from './D30/Row_4_gold'
import Row_5_earth from './D30/Row_5_earth'
import Row_6_fire from './D30/Row_6_fire'
import Set_N1_Id from './N_star_Folder/Set_N1_Id'
import Set_N1_emperor from './N_star_Folder/Set_N1_emperor'

export default function N1_emperor_earth() {
  const { station,
    N1_earth, setN1_earth,
    N1_Id, setN1_Id,
   } = usePurple()
  const earth = '子丑寅卯辰巳午未申酉戌亥';
  const map = {
    '水2局': <Row_2_water />,
    '木3局': <Row_3_wood />,
    '金4局': <Row_4_gold />,
    '土5局': <Row_5_earth />,
    '火6局': <Row_6_fire />,
  }
 
  // let i = 0
  // switch(N1_earth){
  //   case '子': i =1;break;
  //   case '丑': i =2;break;
  //   case '寅': i =3;break;
  //   case '卯': i =4;break;
  //   case '辰': i =5;break;
  //   case '巳': i =6;break;
  //   case '午': i =7;break;
  //   case '未': i =8;break;
  //   case '申': i =9;break;
  //   case '酉': i =10;break;
  //   case '戌': i =11;break;
  //   case '亥': i =12;break;
  //   default: i=0;break;
  // }
  // setN1_Id(i)

//   return map[station] ?? null
// i = earth.indexOf(N1_earth)
// setN1_earth(map[station])
return (
<div>
    {station}
    {map[station]}
    {N1_earth}
    {/* {i} */}
    <Set_N1_Id/>
    <Set_N1_emperor/>
    {/* {N1_Id} */}

</div>
);
}
