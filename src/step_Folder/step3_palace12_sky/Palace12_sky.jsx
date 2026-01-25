import React from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../../context/PurpleContext";
import Sky_yan from './Sky_yan';

export default function Palace12_sky() {
  const { 
    lyy,
    sky_yan, setSky_yan,
   } = usePurple();
  setSky_yan(Sky_yan({lyy}));
  return (
    <div>
      Palace12_sky {lyy}-{sky_yan}
      {/* <Sky_yan lyy={lyy}/> */}
    
    </div>
  
  )
}
