import React from 'react'
import { usePurple } from "../context/PurpleContext";

export default function B() {
  const { showGrid } = usePurple();

  return (
    <div>
      <div
        className={`
          bg-white dark:bg-black
          text-black dark:text-white
          w-[30px] h-[25px]
          sm:w-[100px] sm:h-[50px]
          md:w-[30px] md:h-[30px]
          lg:w-[30px] lg:h-[30px]
          ${showGrid ? 'border border-blue-500 border-dashed' : ''}
        `}
      >
        <p className="text-xs sm:text-sm md:text-base lg:text-[0.65rem]">
          
        </p>
      </div>
    </div>
  )
}
