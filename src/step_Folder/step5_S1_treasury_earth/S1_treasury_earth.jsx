import React from 'react'
import { usePurple } from '../../context/PurpleContext'

export default function S1_treasury_earth() {
    const{
      N1_Id,Set_N1_Id,
      n1_emperor, setN1_emperor,
      S1_Id, setS1_Id,

    }=usePurple()
    // let S1_i =''
    switch(N1_Id){
        case 1: setS1_Id(5);break;
        case 2: setS1_Id(4);break;
        case 3: setS1_Id(3);break;
        case 4: setS1_Id(2);break;
        case 5: setS1_Id(1);break;
        case 6: setS1_Id(12);break;
        case 7: setS1_Id(11);break;
        case 8: setS1_Id(10);break;
        case 9: setS1_Id(9);break;
        case 10: setS1_Id(8);break;
        case 11: setS1_Id(7);break;
        case 12: setS1_Id(6);break;
        default:break;
    }
  return (
    <div>
        S1_treasury_earth
        <p>{N1_Id}-{n1_emperor}-{S1_Id}</p>
    </div>
  )
}
