import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import N2_intelligence_1_self from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_1_self'
import N2_intelligence_2_siblings from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_2_siblings'
import N2_intelligence_3_spouse from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_3_spouse'
import N2_intelligence_4_children from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_4_children'
import N2_intelligence_5_wealth from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_5_wealth'
import N2_intelligence_6_health from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_6_health'
import N2_intelligence_7_travel from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_7_travel'
import N2_intelligence_8_friends from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_8_friends'
import N2_intelligence_9_career from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_9_career'
import N2_intelligence_10_property from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_10_property'
import N2_intelligence_11_mental from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_11_mental'
import N2_intelligence_12_parents from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_intelligence_12_parents'
import N2_1_self from './set_N_stars_msg_Folder/N2_intelligence_Folder/N2_1_self'
export default function Set_N_stars_Msg() {
    const{clickStar,setClickStar,}=usePurple()
    // const palace = ['命宮','兄弟','夫妻','子女','財帛','疾厄','遷移','交友','事業','田宅','福德','父母']
    const star =clickStar.split('-')[0]
    const earth =clickStar.split('-')[1]
    const palace =clickStar.split('-')[2]

    let result=''
    switch(palace){
        case '命宮': result=N2_1_self;break;
        default: result='null'
    }
  return (
    <div>
        Set_N_stars_Msg
        <p>{clickStar}-{star}-{palace}</p>
        {star=='天機' && palace=='命宮' && <N2_intelligence_1_self/>}
        {star=='天機' && palace=='兄弟' && <N2_intelligence_2_siblings/>}
        {star=='天機' && palace=='夫妻' && <N2_intelligence_3_spouse/>}
        {star=='天機' && palace=='子女' && <N2_intelligence_4_children/>}
        {star=='天機' && palace=='財帛' && <N2_intelligence_5_wealth/>}
        {star=='天機' && palace=='疾厄' && <N2_intelligence_6_health/>}
        {star=='天機' && palace=='遷移' && <N2_intelligence_7_travel/>}
        {star=='天機' && palace=='交友' && <N2_intelligence_8_friends/>}
        {star=='天機' && palace=='事業' && <N2_intelligence_9_career/>}
        {star=='天機' && palace=='田宅' && <N2_intelligence_10_property/>}
        {star=='天機' && palace=='福德' && <N2_intelligence_11_mental/>}
        {star=='天機' && palace=='父母' && <N2_intelligence_12_parents/>}
        result:{result}
    </div>
  )
}
