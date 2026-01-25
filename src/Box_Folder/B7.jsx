import React from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";
import Palace12 from '../step_Folder/step1_life_body/Palace12';

export default function B7({ boxId }) {
  const { user, setUser, userId, setUserId,
    new_Old_Option, setNew_Old_Option, 
    showForm, setShowForm,
    life_Index, setLife_Index,
    showGrid
   } = usePurple();

   const palace = Palace12({boxId, life_Index});
  return (
    <>
      <style>{`
        .force-bottom-left {
          position: absolute !important;
          bottom: 2px !important;
          left: 2px !important;
          right: auto !important;
          top: auto !important;
          line-height: 1 !important;
        }
      `}</style>

      <div
        className="
          relative
          bg-white dark:bg-black
          text-black dark:text-white
          w-[20px] h-[20px]
          sm:w-[100px] sm:h-[50px]
          md:w-[30px] md:h-[30px]
          lg:w-[30px] lg:h-[30px]
          ${showGrid ? 'border border-blue-500 border-dashed' : ''}
        "
      >
        <div
          className="
            force-bottom-left
            text-orange-600 dark:text-orange-400
            text-[0.5rem] sm:text-sm md:text-[0.6rem] lg:text-[0.65rem]
          "
        >
          {/* {boxId}-{life_Index} */}
          {/* <Palace12 boxId={boxId} life_Index={life_Index} /> */}
          {palace}
        </div>
      </div>
    </>
  )
}
