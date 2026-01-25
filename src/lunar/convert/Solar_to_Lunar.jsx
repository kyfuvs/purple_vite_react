import React from 'react'
// import { usePurple } from '../context/PurpleContext'
import { usePurple } from '../../context/PurpleContext'
import { Solar } from 'lunar-javascript'
// import YearToNum from './convert/YearToNum';
import YearToNum from './YearToNum';
import MonthToNum from './MonthToNum';
import DayToNum from './DayToNum';
import SCToTC from './SCToTC';
import HOB_to_earth from './HOB_to_earth';
import { GetEarthBranchFromTime } from './GetEarthBranchFromTime';

export default function Solar_to_Lunar({dob,hob}) {
  const { 
    ly, setLy,
    lm, setLm,
    ld, setLd,
    lh, setLh,
    lyy, setLyy,
    animal_12, setAnimal_12,
    
   } = usePurple();
    const y = dob.split('-')[0];
    const m = dob.split('-')[1];
    const d = dob.split('-')[2];
    const h = hob.split(':')[0];
    // const earth_HOB = HOB_to_earth(hob);
    // setLh(HOB_to_earth(hob));
    setLh(GetEarthBranchFromTime(hob));

    const solar = Solar.fromYmdHms(parseInt(y), parseInt(m), parseInt(d), parseInt(h), 0, 0)
    // Lunar part
    const lunar = solar.getLunar()
    const ny = lunar.getYearInChinese()
    setLy(YearToNum(ny));
    const nm = lunar.getMonthInChinese()
    setLm(MonthToNum(nm));
    const nd = lunar.getDayInChinese()
    setLd(DayToNum(nd))
    const animal_sc = lunar.getYearShengXiao()
    const animal_tc = SCToTC(animal_sc)
    const nyy = lunar.getYearInGanZhi()
    const lmm = lunar.getMonthInGanZhi()
    const ldd = lunar.getDayInGanZhi()
    const ltt = lunar.getTimeInGanZhi()

    setAnimal_12(animal_tc);
    setLyy(nyy);
  return (
    <div>
        {/* <h1>Solar_to_Lunar</h1>
        <p>{y}年{m}月{d}日{h}时</p> */}
        {/* <div>{ly}-{YearToNum(ly)}年 {lm}-{MonthToNum(lm)}月 {ld}-{DayToNum(ld)}日 {ltt.slice(1)}時 {animal_tc}年</div> */}
      <div className='
        m-0 p-0
        text-[0.35rem] sm:text-base md:text-[0.6rem] lg:text-[0.6rem]'>
          <div>{lyy}
            {YearToNum(ny)}年 
            {ly}年
            {lm}月 
            {/* {DayToNum(ld)}日  */}
            {ld}日 
            {lh}時</div>
      </div>
    </div>
  )
}
