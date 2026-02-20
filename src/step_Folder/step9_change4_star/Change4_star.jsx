import React, { useEffect } from 'react'
import { usePurple } from '../../context/PurpleContext'
import Change_Map from './Change4_Map/Change_Map'
import Change_sky_Map from './Change4_Map/Change_sky_Map' 

export default function Change4_star() {
    const{
        lyy,
        life_Index, setLife_Index,
        N1_earth,N1_Id,
        click_boxId,setClick_boxId,
        n1_emperor, setN1_emperor,
        n2_intelligence, setN2_intelligence,
        n4_sun, setN4_sun,
        n5_finance, setN5_finance,
        n6_enjoyment, setN6_enjoyment,
        n9_justice, setN9_justice,
        s1_treasury, setS1_treasury,
        s2_moon, setS2_moon,
        s3_greedyWolf, setS3_greedyWolf,
        s4_mouth, setS4_mouth,
        s5_minister, setS5_minister,
        s6_longevity, setS6_longevity,
        s7_sevenKiller, setS7_sevenKiller,
        s11_brokenArmy, setS11_brokenArmy,
        aux2_leftAssistant, setAux2_leftAssistant,
        aux2_rightAssistant, setAux2_rightAssistant,
        aux3_manC, setAux3_manC,
        aux3_manK, setAux3_manK,
        change4,setChange4,
        msgBoxText,setMsgBoxText,
        clickStar,setClickStar,
    }=usePurple()
     const lyy_sky = lyy.slice(0,1)
     const N_stars=['紫微','天機','','太陽','武曲','天同','','','廉貞','']
     const S_stars=['天府','太陰','貪狼','巨門','天相','天梁','七殺','','','','破軍'] 
     const earth = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
     const palace = ['命宮','兄弟','夫妻','子女','財帛','疾厄','遷移','交友','事業','田宅','福德','父母']
    //  const earth = '子丑寅卯辰巳午未申酉戌亥';
     const i = (((click_boxId - N1_Id )*-1)+12)%12
     const j =click_boxId - 1 
    //  const p1_index = (12-(n1_index-life_Index))%12
    // const k = (12-(N1_Id-life_Index))%12
    const k = ((life_Index-click_boxId)+12)%12
    // where n1_index=N1_Id
     let n1='';let n2='';let n4='';let n5='';let n6='';let n9='';
     let s1='';let s2='';let s3='';let s4='';let s5='';let s6='';let s7='';let s11='';
    //  let n2=''
    // const starName = N_stars[i]
    // const change =Change_Map?.[lyy_sky]?.[starName] ?? ''
  

    //  switch(i){
        // case 0: n1='紫微';setN1_emperor('紫微');break;
        // case 0: n1=N_stars[0]+'-'+ earth[j]+'-'+palace[k];setN1_emperor(n1);setClickStar(n1+'-'+'clickStar');setMsgBoxText(n1+'-'+'msg');break;
        // case 1: n2=N_stars[1]+'-'+ earth[j]+'-'+palace[k];setN2_intelligence(n2);setClickStar(n2+'-'+'clickStar');setMsgBoxText(n2+'-'+'msg');break;
        // case 3: n3=N_stars[3]+'-'+ earth[j]+'-'+palace[k];setN3_sun(n3);setClickStar(n3+'-'+'clickStar');setMsgBoxText(n3+'-'+'msg');break;
        // case 4: n4=N_stars[4]+'-'+ earth[j]+'-'+palace[k];setN4_finance(n4);setClickStar(n4+'-'+'clickStar');setMsgBoxText(n4+'-'+'msg');break;
        // case 5: n5=N_stars[5]+'-'+ earth[j]+'-'+palace[k];setN5_enjoyment(n5);setClickStar(n5+'-'+'clickStar');setMsgBoxText(n5+'-'+'msg');break;
        // case 8: n6=N_stars[8]+'-'+ earth[j]+'-'+palace[k];setN8_justice(n6);setClickStar(n6+'-'+'clickStar');setMsgBoxText(n6+'-'+'msg');break;
    //     case 0: n1=N_stars[0]+'-'+ earth[j]+'-'+palace[k]+'-'+(Change_Map?.[lyy_sky]?.[N_stars[0]] ?? '');setN1_emperor(n1);setClickStar(n1+'-'+'clickStar');break;
    //     case 1: n2=N_stars[1]+'-'+ earth[j]+'-'+palace[k]+'-'+(Change_Map?.[lyy_sky]?.[N_stars[1]] ?? '');setN2_intelligence(n2);setClickStar(n2+'-'+'clickStar');break;
    //     case 3: n3=N_stars[3]+'-'+ earth[j]+'-'+palace[k];setN3_sun(n3);setClickStar(n3+'-'+'clickStar');break;
    //     case 4: n4=N_stars[4]+'-'+ earth[j]+'-'+palace[k];setN4_finance(n4);setClickStar(n4+'-'+'clickStar');break;
    //     case 5: n5=N_stars[5]+'-'+ earth[j]+'-'+palace[k];setN5_enjoyment(n5);setClickStar(n5+'-'+'clickStar');break;
    //     case 8: n6=N_stars[8]+'-'+ earth[j]+'-'+palace[k];setN8_justice(n6);setClickStar(n6+'-'+'clickStar');break;

    //     default:break;
    //  }
     const change_sky=Change_sky_Map[lyy_sky]
     setChange4(change_sky)
    //  n1=N_stars[0]+'-'+ earth[j]+'-'+palace[k]+'-'+(Change_Map?.[lyy_sky]?.[N_stars[0]] ?? '')
     
    // 甲: '廉破武陽',
    // 乙: '機梁紫陰'
    //  丙: '同機昌廉',
   useEffect(() => {
  //  甲: '廉破武陽'
  setN9_justice(`${N_stars[8]}---${Change_Map?.[lyy_sky]?.[N_stars[8]] ?? ''}`)
  setS11_brokenArmy(`${S_stars[10]}---${Change_Map?.[lyy_sky]?.[S_stars[10]] ?? ''}`)
  setN5_finance(`${N_stars[4]}---${Change_Map?.[lyy_sky]?.[N_stars[4]] ?? ''}`)
  setN4_sun(`${N_stars[3]}---${Change_Map?.[lyy_sky]?.[N_stars[3]] ?? ''}`)

 //   乙: '機梁紫陰'
  setN2_intelligence(`${N_stars[1]}---${Change_Map?.[lyy_sky]?.[N_stars[1]] ?? ''}`)
  setS6_longevity(`${S_stars[5]}---${Change_Map?.[lyy_sky]?.[S_stars[5]] ?? ''}`)
  setN1_emperor(`${N_stars[0]}---${Change_Map?.[lyy_sky]?.[N_stars[0]] ?? ''}`)
  setS2_moon(`${S_stars[1]}---${Change_Map?.[lyy_sky]?.[S_stars[1]] ?? ''}`)

 // 丙: '同機昌廉'
  setN6_enjoyment(`${N_stars[5]}---${Change_Map?.[lyy_sky]?.[N_stars[5]] ?? ''}`)
  // 機
  const manC = Change_Map?.[lyy_sky]?.['文昌'] ?? ''
  setAux3_manC(`文昌---${manC}`)
  // 廉

  // 丁: '陰同機巨'
     //   陰同機
     setS4_mouth(`${S_stars[3]}---${Change_Map?.[lyy_sky]?.[S_stars[3]] ?? ''}`)

  //  戊: '貪陰弼機'
     setS3_greedyWolf(`${S_stars[2]}---${Change_Map?.[lyy_sky]?.[S_stars[2]] ?? ''}`)
    //  陰
     const rightAssistant = Change_Map?.[lyy_sky]?.['右弼'] ?? ''
     setAux2_rightAssistant(`右弼---${rightAssistant}`)
    //  機

  // 己: '武貪梁曲'
     //   武貪梁
     const manK = Change_Map?.[lyy_sky]?.['文曲'] ?? ''
     setAux3_manK(`文曲---${manK}`)

  //  庚: '陽武府同'
     setN4_sun(`${N_stars[3]}---${Change_Map?.[lyy_sky]?.[N_stars[3]] ?? ''}`)
    //  武
    setS1_treasury(`${S_stars[0]}---${Change_Map?.[lyy_sky]?.[S_stars[0]] ?? ''}`)
    // 同

  // 辛: '巨陽曲昌',

  //   壬: '梁紫輔武'
    //   梁紫
    const leftAssistant = Change_Map?.[lyy_sky]?.['左輔'] ?? ''
    setAux2_leftAssistant(`左輔---${leftAssistant}`)
    // 武

  //  癸: '破巨陰貪'
}, [lyy_sky])


  return (
    <div>
        <p>Change4_star</p>
        {/* <p>{N1_Id}-{N1_earth}</p>
        <p>click_boxId:{click_boxId}-life_Index:{life_Index}</p>
        <p>i:{i}-k:{k}</p> */}
        <p>{lyy_sky}-{change_sky}</p>
        {lyy_sky ==='甲' &&
         <p>{n9_justice}; {s11_brokenArmy}; {n5_finance}; {n4_sun}</p>
        }
        {lyy_sky ==='乙' &&
         <p>{n2_intelligence}; {s6_longevity}; {n1_emperor}; {s2_moon}</p>
        }
         {lyy_sky ==='丙' &&
         
         <p>{n6_enjoyment}; {n2_intelligence}; {aux3_manC}  ; {n9_justice}</p>
        }

         {lyy_sky ==='丁' &&
         
         <p>{s2_moon}; {n6_enjoyment}; {n2_intelligence}; {s4_mouth}</p>
        }

         {lyy_sky ==='戊' &&
         
         <p>{s3_greedyWolf}; {s2_moon}; {aux2_rightAssistant} ; {n2_intelligence}</p>
        }

        {lyy_sky ==='己' &&
         
         <p>{n5_finance}; {s3_greedyWolf}; {s6_longevity} ; {aux3_manK}</p>
        }

        {lyy_sky ==='庚' &&
         
         <p>{n4_sun}; {n5_finance}; {s1_treasury} ; {n6_enjoyment}</p>
        }

        {lyy_sky ==='辛' &&
         
         <p>{s4_mouth}; {n4_sun}; {aux3_manK} ; {aux3_manC}</p>
        }

        {lyy_sky ==='壬' &&
         
         <p>{s6_longevity}; {n1_emperor}; {aux2_leftAssistant} ; {n5_finance}</p>
        }

        {lyy_sky ==='癸' &&
         
         <p>{s11_brokenArmy}; {s4_mouth}; {s2_moon}; {s3_greedyWolf}</p>
        }
        {/* <p>n1:{n1}-n2:{n2}-n3:{n3}</p>
        <p>n4:{n4}-n5:{n5}-n6:{n6}</p>
        <p>{n1_emperor}</p>
        <p>{n2_intelligence}</p>
        <p>{n3_sun}</p>
        <p>{n4_finance}</p>
        <p>{n5_enjoyment}</p>
        <p>{n8_justice}</p> */}
        {/* 甲: '廉破武陽',
        乙: '機梁紫陰',
        丙: '同機昌廉',
        丁: '陰同機巨',
        戊: '貪陰弼機',
        己: '武貪梁曲',
        庚: '陽武府同',
        辛: '巨陽曲昌',
        壬: '梁紫輔武',
        癸: '破巨陰貪', */}
            
    </div>
  )
}
