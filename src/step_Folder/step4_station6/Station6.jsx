import React from 'react'
// import { usePurple } from "../../context/PurpleContext";
import { usePurple } from "../../context/PurpleContext";
import Row1 from './Station6_Folder/Row1';
import Row2 from './Station6_Folder/Row2';
import Row3 from './Station6_Folder/Row3';
import Row4 from './Station6_Folder/Row4';
import Row5 from './Station6_Folder/Row5';
import M_F from './big_10_yr_Folder/M_F';

export default function Station6() {
    const {
        lyy,life_Index,
        station, setStation,
    } = usePurple();
    const sky = '甲乙丙丁戊己庚辛壬癸';
    const earth = '子丑寅卯辰巳午未申酉戌亥';
    const life_earth = earth.charAt(life_Index -1);
    const ly_sky = lyy ? lyy.slice(0, 1) : '';
    let result = '';
    result = Row1({life_earth});
    switch (ly_sky) {
            case '甲': result = Row1({life_earth});break;
            case '乙': result = Row2({life_earth});break;
            case '丙': result = Row3({life_earth});break;
            case '丁': result = Row4({life_earth});break;
            case '戊': result = Row5({life_earth});break;
            case '己': result = Row1({life_earth});break;
            case '庚': result = Row2({life_earth});break;
            case '辛': result = Row3({life_earth});break;
            case '壬': result = Row4({life_earth});break;
            case '癸': result = Row5({life_earth});break;
        }
  setStation(result);
  return (
    <div>
        Station6 {life_Index} {life_earth} {ly_sky}
        {station}
        <M_F/>
        {/* {result} */}
        {/* <Row1 life_earth={life_earth} /> */}
    </div>
  )
}
