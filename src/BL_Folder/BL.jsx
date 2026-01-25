import React from 'react'
import { usePurple } from "../context/PurpleContext";
import DOBPicker from '../components_MUI/DOBPicker';
import BL_Form from './BL_Form';
import BL_User from './BL_User';


export default function BL() {
  const { 
    new_Old_Option, setNew_Old_Option, showForm, setShowForm,
    nuDOB, setNuDOB
   } = usePurple();
  
  return (
    <div>
      <div
        className={`
          bg-white dark:bg-black
          text-black dark:text-white
          w-[122px] h-[122px]
          sm:w-[100px] sm:h-[50px]
          md:w-[182px] md:h-[182px]
          lg:w-[182px] lg:h-[182px]
        `}
      >
        <p className="text-xs sm:text-sm md:text-base lg:text-[0.65rem]">
          {/* BL
          <DOBPicker /> */}
          {showForm && <BL_Form/> }
          {!showForm && <BL_User/>}
        </p>
      </div>
    </div>
  )
}
