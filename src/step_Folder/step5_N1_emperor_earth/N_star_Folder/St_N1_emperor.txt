import React from 'react'
import { usePurple } from '../../../context/PurpleContext'

export default function Set_N1_emperor() {
    const{
        life_Index, setLife_Index,
        N1_earth,N1_Id,
        click_boxId,setClick_boxId,
        n1_emperor, setN1_emperor,
        n2_intelligence, setN2_intelligence,
        n3_sun, setN3_sun,
        n4_finance, setN4_finance,
        n5_enjoyment, setN5_enjoyment,
        n8_justice, setN8_justice,
        msgBoxText,setMsgBoxText,
        clickStar,setClickStar,
    }=usePurple()
     const N_stars=['紫微','天機','','太陽','武曲','天同','','','廉貞','']
     const earth = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
     const palace = ['命宮','兄弟','夫妻','子女','財帛','疾厄','遷移','交友','事業','田宅','福德','父母']
    //  const earth = '子丑寅卯辰巳午未申酉戌亥';
     const i = (((click_boxId - N1_Id )*-1)+12)%12
     const j =click_boxId - 1 
    //  const p1_index = (12-(n1_index-life_Index))%12
    // const k = (12-(N1_Id-life_Index))%12
    const k = ((life_Index-click_boxId)+12)%12
    // where n1_index=N1_Id
     let n1='';let n2='';let n3='';let n4='';let n5='';let n6='';
    //  let n2=''
     switch(i){
        // case 0: n1='紫微';setN1_emperor('紫微');break;
        case 0: n1=N_stars[0]+'-'+ earth[j]+'-'+palace[k];setN1_emperor(n1);setClickStar(n1+'-'+'clickStar');setMsgBoxText(n1+'-'+'msg');break;
        case 1: n2=N_stars[1]+'-'+ earth[j]+'-'+palace[k];setN2_intelligence(n2);setClickStar(n2+'-'+'clickStar');setMsgBoxText(n2+'-'+'msg');break;
        case 3: n3=N_stars[3]+'-'+ earth[j]+'-'+palace[k];setN3_sun(n3);setClickStar(n3+'-'+'clickStar');setMsgBoxText(n3+'-'+'msg');break;
        case 4: n4=N_stars[4]+'-'+ earth[j]+'-'+palace[k];setN4_finance(n4);setClickStar(n4+'-'+'clickStar');setMsgBoxText(n4+'-'+'msg');break;
        case 5: n5=N_stars[5]+'-'+ earth[j]+'-'+palace[k];setN5_enjoyment(n5);setClickStar(n5+'-'+'clickStar');setMsgBoxText(n5+'-'+'msg');break;
        case 8: n6=N_stars[8]+'-'+ earth[j]+'-'+palace[k];setN8_justice(n6);setClickStar(n6+'-'+'clickStar');setMsgBoxText(n6+'-'+'msg');break;
        default:break;
     }
   
  return (
    <div>
        <p>Set_N1_emperor</p>
        <p>{N1_Id}-{N1_earth}</p>
        <p>click_boxId:{click_boxId}-life_Index:{life_Index}</p>
        <p>i:{i}-k:{k}</p>
        <p>n1:{n1}-n2:{n2}-n3:{n3}</p>
        <p>n4:{n4}-n5:{n5}-n6:{n6}</p>
        <p>{n1_emperor}</p>
        <p>{n2_intelligence}</p>
        <p>{n3_sun}</p>
        <p>{n4_finance}</p>
        <p>{n5_enjoyment}</p>
        <p>{n8_justice}</p>
        
        
    </div>
  )
}
