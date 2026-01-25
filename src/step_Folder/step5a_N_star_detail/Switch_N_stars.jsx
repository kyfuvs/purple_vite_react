import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import N2_intelligence_details from './N_star_Folder/N2_intelligence/N2_intelligence_details';

function renderComponent(selection) {
    switch (selection) {
        case '紫微':
        return '紫微_details';
        case '天機':
        return <N2_intelligence_details/>;
        default:
        return 'null';
    }
}

export default function Switch_N_stars() {
    const{clickStar,setClickStar}=usePurple()
    const star = clickStar.split('-')[0]
    const star_earth = clickStar.split('-')[1]
    const star_palace = clickStar.split('-')[2]

  return (
    <div>
        
        <p>Switch_N_star-{clickStar}</p>
        <p>star:{star}</p>
        <p>star_earth:{star_earth}</p>
        <p>star_palace:{star_palace}</p>
        {renderComponent(star)}
    </div>
  )
}
