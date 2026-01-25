import React from 'react'
import { usePurple } from "../../context/PurpleContext"

export default function Input_1_Name() {
  const { nuName, setNuName } = usePurple()

  return (
    <input
      type="text"
      placeholder="Name"
      value={nuName}
      onChange={(e) => setNuName(e.target.value)}
      className="
        border border-black dark:border-white rounded
        bg-white text-black dark:bg-black dark:text-white
        text-[0.6rem] sm:text-sm md:text-[0.7rem] lg:text-[0.7rem]
        px-1 py-[1px]
        w-14 sm:w-24 md:w-22 lg:w-20
      "
    />
  )
}
