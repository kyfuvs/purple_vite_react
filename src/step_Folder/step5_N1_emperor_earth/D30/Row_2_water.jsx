import React,{useEffect} from 'react'
import { usePurple } from '../../../context/PurpleContext'

export default function Row_2_water() {
  const {ld,
    N1_earth, setN1_earth,
    N1_Id, setN1_Id, 
  } = usePurple()
  const sky = '甲乙丙丁戊己庚辛壬癸';
  const earth = '子丑寅卯辰巳午未申酉戌亥';
  // const day= Number(ld)
  let result = 'null'
    switch(ld){
      case 1: result = '丑'; break;
      case 2: result = '寅'; break;
      case 3: result = '寅'; break;
      case 4: result = '卯'; break;
      case 5: result = '卯'; break;
      case 6: result = '辰'; break;
      case 7: result = '辰'; break;
      case 8: result = '巳'; break;
      case 9: result = '巳'; break;
      case 10: result = '午'; break;
      case 11: result = '午'; break;
      case 12: result = '未'; break;
      case 13: result = '未'; break;
      case 14: result = '申'; break;
      case 15: result = '申'; break;
      // 16-30
      case 16: result = '酉'; break;
      case 17: result = '酉'; break;
      case 18: result = '戌'; break;
      case 19: result = '戌'; break;
      case 20: result = '亥'; break;
      case 21: result = '亥'; break;
      case 22: result = '子'; break;
      case 23: result = '子'; break;
      case 24: result = '丑'; break;
      case 25: result = '丑'; break;
      case 26: result = '寅'; break;
      case 27: result = '寅'; break;
      case 28: result = '卯'; break;
      case 29: result = '卯'; break;
      case 30: result = '辰'; break;
      default: break;

    }
    setN1_earth(result)
  return <div>{result}</div>
}
