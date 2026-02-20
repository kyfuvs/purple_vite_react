import React,{useState} from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";
import styles from './B2.module.css'
import Star_click from './star_click_Folder/Star_click';


// import MUI_messageBox from '../components_MUI/MUI_messageBox'
// import MUI_messageBox from '../components_MUI/MUI_messageBox'

export default function B2({boxId}) {
    // const [open, setOpen] = useState(false)
    const { 
        showGrid,
        life_Index,
        N1_Id,
        S1_Id,
        n1, setN1,
        n2, setN2,
        click_boxId,setClick_boxId,
        msgOpen, setMsgOpen,
        msgText, setMsgText,
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        clickStar,setClickStar,
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

    
    } = usePurple();
    // 紫微星>天機星>空一格>太陽星>武曲星>天同星>空二格>廉貞星
    const N_stars=['紫微','天機','','太陽','武曲','天同','','','廉貞']
    const i = (((boxId - N1_Id )*-1)+12)%12 +1
    const S_stars=['天府','太陰','貪狼','巨門','天相','天梁','七殺','','','','破軍']
    const j = (((boxId - S1_Id ))+12)%12 +1
    const [n1_star,n1_earth,n1_palace,n1_change,n1_brightness]=n1_emperor.split('-')
    const [n2_star,n2_earth,n2_palace,n2_change,n2_brightness]=n2_intelligence.split('-')
    const [n4_star,n4_earth,n4_palace,n4_change,n4_brightness]=n4_sun.split('-')
    const [n5_star,n5_earth,n5_palace,n5_change,n5_brightness]=n5_finance.split('-')
    const [n6_star,n6_earth,n6_palace,n6_change,n6_brightness]=n6_enjoyment.split('-')
    const [n9_star,n9_earth,n9_palace,n9_change,n9_brightness]=n9_justice.split('-')

    const [s1_star,s1_earth,s1_palace,s1_change,s1_brightness]=s1_treasury.split('-')
    const [s2_star,s2_earth,s2_palace,s2_change,s2_brightness]=s2_moon.split('-')
    const [s3_star,s3_earth,s3_palace,s3_change,s3_brightness]=s3_greedyWolf.split('-')
    const [s4_star,s4_earth,s4_palace,s4_change,s4_brightness]=s4_mouth.split('-')
    const [s5_star,s5_earth,s5_palace,s5_change,s5_brightness]=s5_minister.split('-')
    const [s6_star,s6_earth,s6_palace,s6_change,s6_brightness]=s6_longevity.split('-')
    const [s7_star,s7_earth,s7_palace,s7_change,s7_brightness]=s7_sevenKiller.split('-')
    const [s11_star,s11_earth,s11_palace,s11_change,s11_brightness]=s11_brokenArmy.split('-')




 
  return (
   
    <div className={`
    relative
    bg-white dark:bg-black 
    text-black dark:text-white 
    w-[30px] h-[40px]
    sm:w-[100px] sm:h-[50px]
    md:w-[30px] md:h-[30px]
    lg:w-[30px] lg:h-[40px]
    ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    ${styles["box-in-hover"]}
    
    `}
    >
        <div className="
          absolute top-0 left-1/2 -translate-x-1/2
          flex items-start gap-1
          whitespace-nowrap
          text-[0.45rem] sm:text-sm md:text-[0.45rem] lg:text-[0.6rem]
        ">
          {/* <span className="text-violet-300">
            <Star_click boxId={boxId} star={N_stars[i]} />
          </span> */}

          {i===1 &&
          // <span className="text-violet-300 flex items-center gap-0.5">
          <span className="text-violet-300 ">
            {/* <p>{i}</p> */}
            <Star_click boxId={boxId} star={n1_star} change={n1_change} brightness={n1_brightness}/>
          </span>
          }

          {i===2 &&
          <span className="text-violet-300">
            <Star_click boxId={boxId} star={n2_star} change={n2_change} brightness={n2_brightness}/>
          </span>
          }

          {i===4 &&
          <span className="text-violet-300">
            <Star_click boxId={boxId} star={n4_star} change={n4_change} brightness={n4_brightness} />
          </span>
          }

           {i===5 &&
          <span className="text-violet-300">
            <Star_click boxId={boxId} star={n5_star} change={n5_change} brightness={n5_brightness} />
          </span>
          }

          {i===6 &&
          <span className="text-violet-300">
            <Star_click boxId={boxId} star={n6_star} change={n6_change}  brightness={n6_brightness}/>
          </span>
          }

           {i===9 &&
          <span className="text-violet-300">
            <Star_click boxId={boxId} star={n9_star} change={n9_change} brightness={n9_brightness} />
          </span>
          }
          {/* <span className="text-yellow-500">
            <p>{j}</p>
            <Star_click boxId={boxId} star={S_stars[j]} />
          </span> */}
         {j===1 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s1_star} change={s1_change} brightness={s1_brightness} />
          </span>
          }

          {j===2 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s2_star} change={s2_change} brightness={s2_brightness}/>
          </span>
          }

          {j===3 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s3_star} change={s3_change} brightness={s3_brightness} />
          </span>
          }

           {j===4 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s4_star} change={s4_change} brightness={s4_brightness} />
          </span>
          }

          {j===5 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s5_star} change={s5_change} brightness={s5_brightness}/>
          </span>
          }

          {j===6 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s6_star} change={s6_change} brightness={s6_brightness} />
          </span>
          }

          {j===7 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s7_star} change={s7_change} brightness={s7_brightness} />
          </span>
          }

          {j===11 &&
          <span className="text-yellow-500">
            <Star_click boxId={boxId} star={s11_star} change={s11_change} brightness={s11_brightness} />
          </span>
          }
        </div>



      
    </div>
  )
}
