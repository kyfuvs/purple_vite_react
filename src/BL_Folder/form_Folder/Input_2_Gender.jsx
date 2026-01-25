import React from 'react'
import { usePurple } from "../../context/PurpleContext"

export default function Input_2_Gender() {
  const { nuGender, setNuGender } = usePurple()

  return (
    <select
      value={nuGender}
      onChange={(e) => setNuGender(e.target.value)}
      className="
        border border-black dark:border-white rounded
        bg-white text-black dark:bg-black dark:text-white
        text-[0.45rem] sm:text-sm
        px-1 py-[2px]
        w-9 sm:w-12 md:w-12 lg:w-18
      "
    >
      <option value="M">M</option>
      <option value="F">F</option>
    </select>
  )
}
