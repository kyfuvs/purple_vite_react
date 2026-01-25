import React,{useState} from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";
import styles from './B2.module.css'
// import MUI_messageBox from '../components_MUI/MUI_messageBox'
// import MUI_messageBox from '../components_MUI/MUI_messageBox'

export default function B2({boxId}) {
    // const [open, setOpen] = useState(false)
    const { 
        showGrid,
        life_Index,
        N1_Id,
        n1, setN1,
        n2, setN2,
        click_boxId,setClick_boxId,
        n1_emperor, n2_intelligence,
        msgOpen, setMsgOpen,
        msgText, setMsgText,
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        clickStar,setClickStar,

    
    } = usePurple();
    // 紫微星>天機星>空一格>太陽星>武曲星>天同星>空二格>廉貞星
    const N_stars=['紫微','天機','','太陽','武曲','天同','','','廉貞']
    const i = (((boxId - N1_Id )*-1)+12)%12
 
  return (
    
    <div className={`
    flex items-top justify-center
    bg-white dark:bg-black 
    text-black dark:text-white 
    w-[20px] h-[20px]
    sm:w-[100px] sm:h-[50px]
    md:w-[30px] md:h-[30px]
    lg:w-[30px] lg:h-[30px]
    ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    ${styles["box-in-hover"]}
    
    `}
    >
        
      
        {/* <p>{N_stars[i]}</p> */}
        <p className='
        text-violet-300
        text-[0.3rem] sm:text-sm md:text-[0.45rem] lg:text-[0.4rem]
        
        '>
          {/* {boxId}-{N1_Id}-{i} */}
          <div>
            <div 
            className={`
                ${styles["star-in-hover"]} 
                [writing-mode:vertical-rl]
                
                `}
            onClick={() => {
            // setClickStar(N_star)
            // setMsgBoxText(N_star)
            setClick_boxId(boxId)
            setMsgBoxText('testing')
            setShowMsgBox(prev => !prev)
            }}
            >
            {N_stars[i]}
            </div>
          </div>
        </p>
      
    </div>
  )
}
