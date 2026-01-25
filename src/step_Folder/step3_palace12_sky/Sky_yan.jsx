import React from 'react'

export default function Sky_yan({lyy}) {
    const sky = lyy ? lyy.slice(0, 1) : ''
    let result = '';
// 生年天干為甲年、己年時，一月的天干為「丙」，地支在「寅」。
// 生年天干為乙年、庚年時，一月的天干為「戊」，地支在「寅」，
// 生年天干為丙年、辛年時，一月的天干為「庚」，地支在「寅」。
// 生年天干為丁年、壬年時，一月的天干為「壬」，地支在「寅」。
// 生年天干為戊年、癸年時，一月的天干為「甲」，地支在「寅」。
    switch(sky) {
        case '甲': result = '丙'; break;
        case '乙': result = '戊'; break;
        case '丙': result = '庚'; break;
        case '丁': result = '壬'; break;
        case '戊': result = '甲'; break;
        case '己': result = '丙'; break;
        case '庚': result = '戊'; break;
        case '辛': result = '庚'; break;
        case '壬': result = '壬'; break;
        case '癸': result = '甲'; break;
    }
  return result
  
//   (
//     <div>Sky_yan {lyy}{sky}-{result}</div>
//   )
}
