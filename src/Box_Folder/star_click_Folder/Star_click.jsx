import React,{useState} from 'react'
import { usePurple } from '../../context/PurpleContext';
import Palace12 from '../../step_Folder/step1_life_body/Palace12';
import styles from './Star_click.module.css'

export default function Star_click({boxId, star, change, brightness}) {
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
        ${styles["star-vertical"]}
      `}
      onClick={() => {
        setClick_boxId(boxId)
        setClickStar(
          star + '-' + e + '-' + palace+'-'+ (brightness ? brightness : '')+'-'+ (change && change !== 'undefined' ? change : '')  +'-clickStar'
        )
        setMsgBoxText(
          star + '-' + e + '-' + palace+'-'+ (brightness ? brightness : '')+'-'+ (change && change !== 'undefined' ? change : '') +'-msg'
        )
        setShowMsgBox(true)
      }}
    >
      {/* 主星 */}
      {star.split('').map((c, i) => (
        <span key={`s-${i}`}>{c}</span>
      ))}

    
      {/* 亮度 */}
      {brightness && (
        <span className="text-blue-400 font-bold">
          {brightness}
        </span>
      )}
      {/* 四化 */}
      {change && change !== 'undefined' && (
        <span className="text-pink-400 font-bold">
          {change}
        </span>
      )}
    </div>

  )
}
