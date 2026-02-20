import React from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";

export default function B9({boxId}) {
  const { 
    // earth,
    showGrid,
    sky_yan, setSky_yan,
  } = usePurple();
  const 寅 = 3;
  const sky=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
  const earth=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
  const name = earth[boxId -1];
  const sky_index = sky.indexOf(sky_yan);
  const box_index = boxId - 寅 < 0 ? boxId - 寅 +12 : boxId - 寅;
  const sky_name = sky[(box_index +sky_index) % 10];
  //  let name = ''

  //   if (boxId) {
  //   ({ name } = earth[boxId - 1])
  //   }


  return (
    <>
    <style>{`
      .force-bottom-right {
        position: absolute !important;
        bottom: 2px !important;
        right: 2px !important;
        left: auto !important;
        top: auto !important;
        line-height: 1 !important;
      }
    `}</style>
    
    <div
    className={`
        relative
        bg-white dark:bg-black 
        text-black dark:text-white 
        w-[30px] h-[25px]
        sm:w-[100px] sm:h-[50px]
        md:w-[30px] md:h-[30px]
        lg:w-[30px] lg:h-[30px]
        ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    `}
    >

    <div
    className="
        force-bottom-right
        text-[0.5rem] sm:text-sm md:text-[0.6rem] lg:text-[0.65rem]
    "
    >
      <p>{boxId}</p>
      <p>{sky_name}{name}</p>
    {/* {boxId}{sky_name}{name} */}
    </div>
    </div>
    </>
  )
}