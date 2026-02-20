import React,{useState} from 'react'
import { usePurple } from '../../context/PurpleContext';
import Palace12 from '../../step_Folder/step1_life_body/Palace12';
import styles from './Star_click_horizontal.module.css'

export default function Star_click_horizontal({boxId, star, change}) {
    // const [open, setOpen] = useState(false)
    const { 
        showGrid,
        life_Index,
        N1_Id,
        S1_Id,
        n1, setN1,
        n2, setN2,
        click_boxId,setClick_boxId,
        n1_emperor, n2_intelligence,
        msgOpen, setMsgOpen,
        msgText, setMsgText,
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        starDetail, setStarDetail,
        clickStar,setClickStar,
    } = usePurple();
    const earth = '子丑寅卯辰巳午未申酉戌亥';
    const e = earth.charAt(boxId-1)
    const palace = Palace12({boxId, life_Index});

    if (!star) return null
 return (
    <div
      className={`
        ${styles["star-in-hover"]}
      
      `}
      onClick={() => {
        setClick_boxId(boxId)
        setClickStar(
          star + '-' + e + '-' + palace+'-'+ (change ? change : '') +'-clickStar'
        )
        setMsgBoxText(
          star + '-' + e + '-' + palace+'-'+ (change ? change : '') +'-msg'
        )
        setShowMsgBox(true)
      }}
    >
      {/* 主星 */}
      {/* {star.split('').map((c, i) => (
        <span key={`s-${i}`}>{c}</span>
      ))} */}
     {/* <span>{star}</span> */}
     {/* <div>{star}</div> */}
     {star}
     
      {/* 四化 */}
      {/* {change && (
        <span className="text-pink-400 font-bold">
          {change}
        </span>
      )} */}
    </div>

  )
}
