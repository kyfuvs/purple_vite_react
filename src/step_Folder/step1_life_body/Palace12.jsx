import React from 'react'

export default function Palace12({boxId,life_Index}) {
    // const palace = ['命宮','父母','福德','田宅','事業','交友','遷移','疾厄','財帛','子女','夫妻','兄弟']
    const palace = ['命宮','兄弟','夫妻','子女','財帛','疾厄','遷移','交友','事業','田宅','福德','父母']

    // const palace_i = (life_Index - boxId + 11) % 12;

    const palace_Index=life_Index-boxId;
    const palace_i = (palace_Index <=0) ? (palace_Index +12)%12 : palace_Index;
// return (
//     <div className='
//     text-[0.5rem] sm:text-sm md:text-[0.6rem] lg:text-[0.65rem]
//     '>
//         {boxId}-{life_Index}-{palace_i}
//         {palace[palace_i]}
//         {/* {palace[0]} */}
//     </div>
//   )
return palace[palace_i]
}
