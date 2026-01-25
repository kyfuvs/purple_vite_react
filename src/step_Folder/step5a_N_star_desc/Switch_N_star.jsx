import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import N0_null_desc from './N_star_desc_Folder/N0_null_desc_Folder/N0_null_desc';
import N1_emperor_desc from './N_star_desc_Folder/N1_emperor_desc_Folder/N1_emperor_desc';
// import N2_intelligence_desc from './N_star_desc_Folder/N2_intelligence_desc_Folder/N2_intelligence_desc';
import Switch_N2_intelligence_by_palace from './N_star_desc_Folder/N2_intelligence_desc_Folder/Switch_N2_intelligence_by_palace';

function renderComponent(selection) {
    switch (selection) {
        case '紫微':
        return <N1_emperor_desc />;
        case '天機':
        return <Switch_N2_intelligence_by_palace />;
        default:
        return <N0_null_desc />;
    }
}

export default function Switch_N_star() {
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
