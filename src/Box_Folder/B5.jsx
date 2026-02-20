import React from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";

export default function B5({boxId}) {
    const { 
      showGrid,
      station,life_Index,
      big10yr_Direction, setBig10yr_Direction,
    
    } = usePurple();
    // const element5 = "AB水木金土火";
    // const station_index = "AB水木金土火".indexOf(station)
    const age_start = parseInt(station.slice(1,2));
    // const diff = boxId -life_Index;
    // const different = diff < 0 ? diff +12 : diff;
    // let age = 0;
    // age = parseInt(age_start) + different * 10;
    // if (big10yr_Direction === 'antiClock') {
    //   const age = (110+ age_start) - (parseInt(age_start) + diff * -10);
    // } else {
    //   const age = parseInt(age_start) + different * 10;
    // }

    const distance =
      big10yr_Direction === 'clock'
        // ? (life_Index - boxId + 12) % 12
        // : (boxId - life_Index + 12) % 12
         ? (boxId - life_Index + 12) % 12
        : (life_Index - boxId + 12) % 12

    const age = age_start + distance * 10
    const age_end = age + 9;



  return (
    <div className={`
    flex items-center justify-center
    bg-white dark:bg-black 
    text-black dark:text-white 
    w-[30px] h-[30px]
    sm:w-[100px] sm:h-[50px]
    md:w-[30px] md:h-[30px]
    lg:w-[30px] lg:h-[30px]
    ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    
    `}
    >
        <p className='text-[0.3rem] sm:text-sm md:text-[0.45rem] lg:text-[0.45rem]'>
            {/* B5{boxId} */}
            {age}-{age_end}
        </p>
        
    </div>
  )
}
