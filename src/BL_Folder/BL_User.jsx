import React, {useState} from 'react'
import { usePurple } from "../context/PurpleContext"
import Reset_Btn from '../components/Reset_Btn'
import YearToNum from '../lunar/convert/YearToNum';
import MonthToNum from '../lunar/convert/MonthToNum';
import DayToNum from '../lunar/convert/DayToNum';
import styles from './BL_User.module.css'
import MUI_messageBox from '../components_MUI/MUI_messageBox'
import msg_1_body_meaning from '../message/msg_1_body_meaning'

export default function BL_User() {
  const [open, setOpen] = useState(false)
  const { 
     nuName, nuGender, nuDOB, nuHOB, 
     mf, station,big10yr_Direction,animal_12,
     dob, setDOB,
     ly, setLy,
     lm, setLm,
     ld, setLd,
     lh, setLh,
     lyy, setLyy,
     life_Index, setLife_Index,
     body_Index, setBody_Index,

       } = usePurple()

   const nu_dob = nuDOB ? nuDOB.format('YYYY-MM-DD') : ''
   const y = nu_dob ? nu_dob.slice(0,4) : '';
   const m = nu_dob ? nu_dob.slice(5,7) : '';
   const d = nu_dob ? nu_dob.slice(8,10) : '';
   const hob = nuHOB;

   const earth="子丑寅卯辰巳午未申酉戌亥";
    const L_earth = life_Index ? earth.charAt(life_Index - 1) : ''
    const B_earth = body_Index ? earth.charAt(body_Index - 1) : ''

    const big10Direction = big10yr_Direction === 'clock' ? '順行' : '逆行'
  return (
    <div>
      {/* Snackbar */}
      <MUI_messageBox
        open={open}
        onClose={() => setOpen(false)}
        message={msg_1_body_meaning}
      />
      <h1>紫微斗數</h1>
      {/* 1st Row */}
        <div className='flex flex-row
        text-orange-600 dark:text-orange-400 gap-1 items-center
        text-[0.45rem] sm:text-base md:text-[0.7rem] lg:text-[0.65rem] 
        '>
             {nuName==='' ? <p>name</p> : <p>{nuName}</p>}
             {nuGender==='F' ? <p>女</p> : <p>男</p>}
             <p>{mf}({big10Direction})</p>
             <p>{station}</p>
             <p>生肖 {animal_12}</p> 
        </div>

           {/* 2nd Row */}
         <div className='flex flex-row items-center gap-4
        text-[0.4rem] sm:text-base md:text-[0.65rem] lg:text-[0.65rem] 
        '>
            <div>
                <h1>生辰</h1>
            </div>
           <div className="leading-tight m-0 p-0">
              {/* <div>{dob}-{y}{m}-{d}-{earth_HOB}</div> */}
                <div className="m-0 p-0">陽曆 西元{y}-{m}-{d}-{hob}</div>
                 {/* 陰曆 */}
                <div className="m-0 p-0">陰曆 {lyy}{ly}年{lm}月{ld}日{lh}時</div>  
            </div>
         </div>

          {/* 3rd Row */}
            <div className='flex flex-col
            text-[0.4rem] sm:text-base md:text-[0.65rem] lg:text-[0.65rem] 
            '>
               <div className="flex">
                  <p>命宮 - {L_earth}</p>
        
                  <div className="flex ml-2">
                    <p
                      className={styles["box-in-hover"]}
                      onClick={() => setOpen(true)} // ✅ THIS triggers Snackbar
                    >
                      身宮 -
                    </p>
                    <p>{B_earth}</p>
                  </div>
                </div>
            </div>
        
          <div>
            <p>{dob.format('YYYY-MM-DD')}</p>
            <Reset_Btn/>
          </div>
      
    </div>
  )
}
