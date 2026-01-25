import React, { useEffect } from 'react'
import { usePurple } from "../context/PurpleContext";
import dayjs from 'dayjs'
import HOB_to_earth from '../lunar/convert/HOB_to_earth';

export default function User_set() {
  const { 
    userId,
    setNuName,
    setNuDOB,
    nuHOB,setNuHOB,
    setEarth_HOB,
    setNuGender,
  } = usePurple();

  useEffect(() => {
    switch (userId) {
      case '1':
        setNuName('Terrie');
        setNuDOB(dayjs('1978-01-01'));
        setNuHOB('23:30');
        setEarth_HOB(HOB_to_earth('23:30'));
        setNuGender('F');
        break;

      case '2':
        setNuName('Leo');
        setNuDOB(dayjs('1981-01-01'));
        setNuHOB('04:00');
        setNuGender('M');
        break;

      case '3':
        setNuName('Son');
        setNuDOB(dayjs('2013-01-01'));
        setNuHOB('00:30');
        setNuGender('M');
        break;

      case '4':
        setNuName('Daughter');
        setNuDOB(dayjs('2015-01-01'));
        setNuHOB('22:30');
        setNuGender('F');
        break;

      case '5':
        setNuName('M');
        setNuDOB(dayjs('1970-01-01'));
        setNuHOB('08:30');
        setNuGender('F');
        break;

      case '6':
        setNuName('A');
        setNuDOB(dayjs('1970-01-01'));
        setNuHOB('13:30');
        setNuGender('M');
        break;

      default:
        break;
    }
  }, [userId]); // 🔑 only runs when userId changes

  setEarth_HOB(HOB_to_earth(nuHOB));
  return (
    <div>
      {/* User_set: {userId} */}
    </div>
  )
}
