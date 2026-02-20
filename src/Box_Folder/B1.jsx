import React,{useState} from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";
import styles from './B2.module.css'
import Star_click from './star_click_Folder/Star_click';
import R1_manK_Map from '../step_Folder/step8_Aux3_hour_earth/Aux3_Map/R1_manK_Map';
import R2_manC_Map from '../step_Folder/step8_Aux3_hour_earth/Aux3_Map/R2_manC_Map';
import R1_Left_Assistant_Map from '../step_Folder/step7_Aux2_month/Aux2_Map/R1_Left_Assistant_Map';
import R2_right_Assistant_Map from '../step_Folder/step7_Aux2_month/Aux2_Map/R2_right_Assistant_Map';
// import MUI_messageBox from '../components_MUI/MUI_messageBox'
// import MUI_messageBox from '../components_MUI/MUI_messageBox'

export default function B1({boxId}) {
    // const [open, setOpen] = useState(false)
    const { 
        showGrid,
        life_Index,
        N1_Id,
        S1_Id,
        lm,lh,
        n1, setN1,
        n2, setN2,
        click_boxId,setClick_boxId,
        n1_emperor, n2_intelligence,
        msgOpen, setMsgOpen,
        msgText, setMsgText,
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        clickStar,setClickStar,

        aux1_lucky_Id, setAux1_lucky_Id,
        aux1_goat_Id, setAux1_goat_Id,
        aux1_spinner_Id, setAux1_spinner_Id,

        aux1_lucky, setAux1_lucky,
        aux1_goat, setAux1_goat,
        aux1_spinner, setAux1_spinner,
        aux1_tinGrey, setAux1_tinGrey,
        aux1_tinYue, setAux1_tinYue,
        aux2_leftAssistant, setAux2_leftAssistant,
        aux2_rightAssistant, setAux2_rightAssistant,
        aux2_skyHorse, setAux2_skyHorse,
        aux3_manK, setAux3_manK,
        aux3_manC, setAux3_manC,
        aux3_earthEmpty, setAux3_earthEmpty,
        aux3_earthThief, setAux3_earthThief,

        aux4_fire_Id, setAux4_fire_Id,
        aux4_bell_Id, setAux4_bell_Id,
        aux4_fire, setAux4_fire,
        aux4_bell, setAux4_bell,

    
    } = usePurple();
    const earth = '子丑寅卯辰巳午未申酉戌亥';
    // const [lucky_star,lucky_earth]=aux1_lucky.split('-')
    // const lucky_Id = earth.indexOf(lucky_earth)+1
    // const [lucky_star, lucky_earth] = (aux1_lucky ?? '').split('-')
    // const lucky_Id = lucky_earth ? earth.indexOf(lucky_earth) + 1: -1
    // const lucky_index = Number(boxId) - Number(lucky_Id)
    const [aux1_lucky_star,,,,aux1_lucky_brightness] = (aux1_lucky ?? '').split('-')
    const [aux1_goat_star,,,,aux1_goat_brightness] = (aux1_goat ?? '').split('-')
    const [aux1_spinner_star,,,,aux1_spinner_brightness] = (aux1_spinner ?? '').split('-')

    // const [goat_star, goat_earth] = (aux1_goat ?? '').split('-')
    // const goat_Id = goat_earth ? earth.indexOf(goat_earth) + 1: -1
    // const goat_index = Number(boxId) - Number(goat_Id)

    // const [spinner_star, spinner_earth] = (aux1_spinner ?? '').split('-')
    // const spinner_Id = spinner_earth ? earth.indexOf(spinner_earth) + 1: -1
    // const spinner_index = Number(boxId) - Number(spinner_Id)
    
    const [tinGrey_star, tinGrey_earth] = (aux1_tinGrey ?? '').split('-')
    const tinGrey_Id = tinGrey_earth ? earth.indexOf(tinGrey_earth) + 1: -1
    const tinGrey_index = Number(boxId) - Number(tinGrey_Id)

    const [tinYue_star, tinYue_earth] = (aux1_tinYue ?? '').split('-')
    const tinYue_Id = tinYue_earth ? earth.indexOf(tinYue_earth) + 1: -1
    const tinYue_index = Number(boxId) - Number(tinYue_Id)

    const leftAssistant = R1_Left_Assistant_Map[lm]
    // const [leftAssistant_star, leftAssistant_earth] = (aux2_leftAssistant ?? '').split('-')
    const [leftAssistant_star, leftAssistant_earth] = (leftAssistant ?? '').split('-')
    const leftAssistant_Id = leftAssistant_earth ? earth.indexOf(leftAssistant_earth) + 1: -1
    const leftAssistant_index = Number(boxId) - Number(leftAssistant_Id)
    const [, , ,leftAssistant_change] = (aux2_leftAssistant ?? '').split('-')

    // setAux2_rightAssistant(R2_right_Assistant_Map[Number(lm)])
    const rightAssistant = R2_right_Assistant_Map[lm]
    // const [rightAssistant_star, rightAssistant_earth] = (aux2_rightAssistant ?? '').split('-')
    const [rightAssistant_star, rightAssistant_earth] = (rightAssistant ?? '').split('-')
    const rightAssistant_Id = rightAssistant_earth ? earth.indexOf(rightAssistant_earth) + 1: -1
    const rightAssistant_index = Number(boxId) - Number(rightAssistant_Id)
    const [, , ,rightAssistant_change] = (aux2_rightAssistant ?? '').split('-')

    const [skyHorse_star, skyHorse_earth] = (aux2_skyHorse ?? '').split('-')
    const skyHorse_Id = skyHorse_earth ? earth.indexOf(skyHorse_earth) + 1: -1
    const skyHorse_index = Number(boxId) - Number(skyHorse_Id)

    const manK = R1_manK_Map[lh]
    // const [manK_star, manK_earth] = (aux3_manK ?? '').split('-')
    const [manK_star, manK_earth] = (manK ?? '').split('-')
    const manK_Id = manK_earth ? earth.indexOf(manK_earth) + 1: -1
    const manK_index = Number(boxId) - Number(manK_Id)
    const [, , ,manK_change,manK_brightness] = (aux3_manK ?? '').split('-')
    // setAux3_manK(R1_manK_Map[lh])
    // setAux3_manC(R2_manC_Map[lh])

    const manC = R2_manC_Map[lh]
    const [manC_star, manC_earth] = (manC ?? '').split('-')
    const manC_Id = manC_earth ? earth.indexOf(manC_earth) + 1: -1
    const manC_index = Number(boxId) - Number(manC_Id)
    const [, , ,manC_change,manC_brightness] = (aux3_manC ?? '').split('-')

    const [earthEmpty_star, earthEmpty_earth] = (aux3_earthEmpty ?? '').split('-')
    const earthEmpty_Id = earthEmpty_earth ? earth.indexOf(earthEmpty_earth) + 1: -1
    const earthEmpty_index = Number(boxId) - Number(earthEmpty_Id)

    const [earthThief_star, earthThief_earth] = (aux3_earthThief ?? '').split('-')
    const earthThief_Id = earthThief_earth ? earth.indexOf(earthThief_earth) + 1: -1
    const earthThief_index = Number(boxId) - Number(earthThief_Id)

    // const [fire_star, fire_earth] = (aux4_fire ?? '').split('-')
    // const fire_Id = fire_earth ? earth.indexOf(fire_earth) + 1: -1
    // const fire_index = Number(boxId) - Number(fire_Id)
   
    // const [bell_star, bell_earth] = (aux4_bell ?? '').split('-')
    // const bell_Id = bell_earth ? earth.indexOf(bell_earth) + 1: -1
    // const bell_index = Number(boxId) - Number(bell_Id)
    const [aux4_fire_star,,,,aux4_fire_brightness] = (aux4_fire ?? '').split('-')
    const [aux4_bell_star,,,,aux4_bell_brightness] = (aux4_bell ?? '').split('-')
    
 
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
          flex items-start 
          whitespace-nowrap
          text-[0.4rem] sm:text-sm md:text-[0.45rem] lg:text-[0.5rem]
        ">
        
         {/* {lucky_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={lucky_star} />
          </span>
         } */}

        {Number(aux1_lucky_Id)===Number(boxId) && 
          <span className="text-green-500">
            <Star_click boxId={boxId} star={aux1_lucky_star} brightness={aux1_lucky_brightness} />
          </span>
         }

         {Number(aux1_goat_Id)===Number(boxId) && 
          <span className="text-green-500">
            <Star_click boxId={boxId} star={aux1_goat_star} brightness={aux1_goat_brightness} />
          </span>
         }

        {Number(aux1_spinner_Id)===Number(boxId) && 
          <span className="text-green-500">
            <Star_click boxId={boxId} star={aux1_spinner_star} brightness={aux1_spinner_brightness} />
          </span>
         }

         {/* {goat_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={goat_star} />
          </span>
         } */}

          {/* {spinner_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={spinner_star} />
          </span>
         } */}

         {tinGrey_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={tinGrey_star} />
          </span>
         }

         {tinYue_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={tinYue_star} />
          </span>
         }

         {leftAssistant_index===0 &&
          <span className="text-green-500">
            {/* <Star_click boxId={boxId} star={leftAssistant_star} /> */}
            <Star_click boxId={boxId} star={leftAssistant_star} change={leftAssistant_change} />

          </span>
         }

         {rightAssistant_index===0 &&
          <span className="text-green-500">
            {/* <Star_click boxId={boxId} star={rightAssistant_star} /> */}
            {/* <p>{aux2_rightAssistant}</p> */}
            <Star_click boxId={boxId} star={rightAssistant_star} change={rightAssistant_change} />
          </span>
         }

         {skyHorse_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={skyHorse_star} />
          </span>
         }

         {manK_index===0 &&
          <span className="text-green-500">
            {/* <Star_click boxId={boxId} star={manK_star} /> */}
            <Star_click boxId={boxId} star={manK_star} change={manK_change} brightness={manK_brightness} />
          </span>
         }

          {manC_index===0 &&
          <span className="text-green-500">
            {/* <Star_click boxId={boxId} star={manC_star} /> */}
            {/* <p>{manC_change}</p> */}
            {/* <p>{aux3_manC}</p> */}
            <Star_click boxId={boxId} star={manC_star} change={manC_change} brightness={manC_brightness} />
          </span>
         }

         {earthEmpty_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={earthEmpty_star} />
          </span>
         }

         {earthThief_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={earthThief_star} />
          </span>
         }

         {/* {fire_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={fire_star} />
          </span>
         } */}
          {/* <p>{aux4_fire_Id}-{boxId}-{aux4_fire_star}</p>  */}
         {Number(aux4_fire_Id)===Number(boxId) && 
          <span className="text-green-500">
            <Star_click boxId={boxId} star={aux4_fire_star} brightness={aux4_fire_brightness} />
          </span>
         }

        {Number(aux4_bell_Id)===Number(boxId) && 
          <span className="text-green-500">
            <Star_click boxId={boxId} star={aux4_bell_star} brightness={aux4_bell_brightness} />
          </span>
         }

         {/* {bell_index===0 &&
          <span className="text-green-500">
            <Star_click boxId={boxId} star={bell_star} />
          </span>
         } */}
          {/* <span className="text-yellow-500">
            <Star_click boxId={boxId} star={S_stars[j]} />
          </span> */}
        
          



      </div>
    </div>
  )
}
