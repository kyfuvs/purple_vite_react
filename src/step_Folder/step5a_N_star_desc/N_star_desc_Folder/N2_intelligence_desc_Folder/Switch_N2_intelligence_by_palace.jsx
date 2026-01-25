import React from 'react'
import { usePurple } from '../../../../context/PurpleContext'
// import N0_null_desc from './N_star_desc_Folder/N0_null_desc_Folder/N0_null_desc';
import N0_null_desc from '../N0_null_desc_Folder/N0_null_desc';
// import N1_emperor_desc from './N_star_desc_Folder/N1_emperor_desc_Folder/N1_emperor_desc';
import N1_emperor_desc from '../N1_emperor_desc_Folder/N1_emperor_desc';
// import N2_intelligence_desc from './N_star_desc_Folder/N2_intelligence_desc_Folder/N2_intelligence_desc';
import N2_intelligence_palace_1_self from './N2_intelligence_by_palace/N2_intelligence_palace_1_self';
import N2_intelligence_palace_2_siblings from './N2_intelligence_by_palace/N2_intelligence_palace_2_siblings';
import N2_intelligence_palace_3_spouse from './N2_intelligence_by_palace/N2_intelligence_palace_3_spouse';
import N2_intelligence_palace_4_children from './N2_intelligence_by_palace/N2_intelligence_palace_4_children';
import N2_intelligence_palace_5_wealth from './N2_intelligence_by_palace/N2_intelligence_palace_5_wealth';
import N2_intelligence_palace_6_health from './N2_intelligence_by_palace/N2_intelligence_palace_6_health';
import N2_intelligence_palace_7_travel from './N2_intelligence_by_palace/N2_intelligence_palace_7_travel';
import N2_intelligence_palace_8_friends from './N2_intelligence_by_palace/N2_intelligence_palace_8_friends';
import N2_intelligence_palace_9_career from './N2_intelligence_by_palace/N2_intelligence_palace_9_career';
import N2_intelligence_palace_10_property from './N2_intelligence_by_palace/N2_intelligence_palace_10_property';
import N2_intelligence_palace_11_mental from './N2_intelligence_by_palace/N2_intelligence_palace_11_mental';
import N2_intelligence_palace_12_parents from './N2_intelligence_by_palace/N2_intelligence_palace_12_parents';
// const palace = ['命宮','兄弟','夫妻','子女','財帛','疾厄','遷移','交友','事業','田宅','福德','父母']

function renderComponent(selection) {
    switch (selection) {
        case '命宮':
        return <N2_intelligence_palace_1_self />;
        case '兄弟':
        return <N2_intelligence_palace_2_siblings />;
         case '夫妻':
        return <N2_intelligence_palace_3_spouse />;
        case '子女':
        return <N2_intelligence_palace_4_children />;
         case '財帛':
        return <N2_intelligence_palace_5_wealth />;
        case '疾厄':
        return <N2_intelligence_palace_6_health />;
         case '遷移':
        return <N2_intelligence_palace_7_travel />;
        case '交友':
        return <N2_intelligence_palace_8_friends />;
         case '事業':
        return <N2_intelligence_palace_9_career />;
        case '田宅':
        return <N2_intelligence_palace_10_property />;
         case '福德':
        return <N2_intelligence_palace_11_mental />;
        case '父母':
        return <N2_intelligence_palace_12_parents />;
        default:
        return <N0_null_desc />;
    }
}

export default function Switch_N2_intelligence_by_palace() {
    const{clickStar,setClickStar}=usePurple()
    const star = clickStar.split('-')[0]
    const star_earth = clickStar.split('-')[1]
    const star_palace = clickStar.split('-')[2]

  return (
    <div>
        
        <p>Switch_N2_intelligence_by_palace-{clickStar}</p>
        <p>star:{star}</p>
        <p>star_earth:{star_earth}</p>
        <p>star_palace:{star_palace}</p>
        {renderComponent(star_palace)}
    </div>
  )
}
