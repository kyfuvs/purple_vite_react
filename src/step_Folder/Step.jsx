import React from 'react'
import { usePurple } from '../context/PurpleContext'
import User_info from './User_info'
import Set_User_info from './Set_User_info'
import Life from './step1_life_body/Life'
import Palace12_sky from './step3_palace12_sky/Palace12_sky'
import Station6 from './step4_station6/Station6'
// import Purple_star from './step5_purple_star/Purple_star'
import N1_emperor_earth from './step5_N1_emperor_earth/N1_emperor_earth'
// import N_star_desc from './step5a_N_star_desc/N_star_desc'
// import Switch_N_star from './step5a_N_star_desc/Switch_N_star'
import Switch_N_stars from './step5a_N_star_detail/Switch_N_stars'
import S1_treasury_earth from './step5_S1_treasury_earth/S1_treasury_earth'
import Set_S_stars from './step5_S1_treasury_earth/S_star_Folder/Set_S_stars'
import Star_Details from './stepEnd_star_Detail/Star_Details'
import Aux1_yearSky from './step6_Aux1_yearSky/Aux1_yearSky'
import Aux2_month from './step7_Aux2_month/Aux2_month'
import Aux3_hour_earth from './step8_Aux3_hour_earth/Aux3_hour_earth'
import Aux4_year_hour from './step8_Aux4_year_hour/Aux4_year_hour'
import Change4_star from './step9_change4_star/Change4_star'
import Big10_limit from './step10_big_small_limit/Big10_limit'
import Misc_star from './step11_Misc_star/Misc_star'
import LifeStage from './step12_lifeStage/LifeStage'
import Doctor from './step13_Doctor12/Doctor'
import Annual from './step14_Annual12/Annual'
import GeneralFront from './step15_generalFront12/GeneralFront'
import Brightness from './step16_brightness/Brightness'

export default function Step() {
  const{showGrid,showMsgBox}=usePurple()
  return (
     <div className={`
      w-[25rem] 
      ${showGrid ? 'border border-blue-500 border-dashed' : ''}
      `}>
    {/* <div className='text-[0.5rem] sm:text-sm md:text-base lg:text-[0.7rem]'> */}
    <div className="
            text-[0.75rem] sm:text-sm md:text-base lg:text-[0.75rem]
            max-h-[22rem]
            overflow-y-auto
            pr-2
        "
        >
        Step
        <div className='hidden'>
           <User_info />
           <Set_User_info/>
           <Life/>
           <Palace12_sky/>
           <Station6/>
           <N1_emperor_earth/>
           <S1_treasury_earth/>
           {/* <Set_S_stars/> */}
           <Aux1_yearSky/> 
           <Aux2_month/>
           <Aux3_hour_earth/>
           <Aux4_year_hour/>
           <Change4_star/>
           <Big10_limit/>
            <Misc_star/>
            <LifeStage/>
            <Doctor/>
            <Annual/>
            <GeneralFront/>
            {/* <Star_Details/> */}
        </div>
       
       
        <div>
          <Aux1_yearSky/> 
         <Brightness/>
           
        </div>
       
    </div>
    </div>
  )
}
