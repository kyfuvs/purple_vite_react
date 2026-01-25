import React from 'react'
import ThemeToggle from './ThemeToggle'
import { usePurple } from "../context/PurpleContext";
import User_select from './User_select'
import GridViewIcon from '@mui/icons-material/GridView';

export default function NavBar() {
  const { showGrid, setShowGrid } = usePurple();

  const handleClick = () => {
    setShowGrid(prev => !prev);
  };

  return (
    <div className="
      p-6 flex justify-between items-center
      text-[0.5rem] sm:text-base md:text-[0.8rem] lg:text-[0.9rem]
    ">
      <div className='flex flex-row'>
      <User_select />
      <GridViewIcon 
        className="cursor-pointer"
        onClick={handleClick}
      />
      </div>
    
      <h1 className="font-bold">Yik App</h1>
      <ThemeToggle />
    </div>
  )
}
