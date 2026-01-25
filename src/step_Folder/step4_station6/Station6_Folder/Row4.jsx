import React from 'react'

export default function Row4({life_earth}) {
    const element5 = "AB水木金土火";
    const earth = "子丑寅卯辰巳午未申酉戌亥";
    let result = '';
    switch(life_earth) {
        case '子': result = '木'; break;
        case '丑': result = '木'; break;
        case '寅': result = '金'; break;
        case '卯': result = '金'; break;
        case '辰': result = '火'; break;
        case '巳': result = '火'; break;
        case '午': result = '水'; break;
        case '未': result = '水'; break;
        case '申': result = '土'; break;
        case '酉': result = '土'; break;
        case '戌': result = '金'; break;
        case '亥': result = '金'; break;
    }

    const station_index = element5.indexOf(result);
    const station = result + station_index + '局'  ;
  return station
//   return (
//     <div>Row4 {life_earth} {station} </div>
//   )
}
