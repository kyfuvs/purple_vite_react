import React from 'react'
import { usePurple } from '../context/PurpleContext'
import styles from "./User_select.module.css";
import User_set from './User_set';
// import Git_User_set from '../../../../Git_User_set';
import Step from '../step_Folder/Step';

export default function User_select() {
  const { 
    user, setUser,
    userId, setUserId,
    showMsgBox, setShowMsgBox,
    msgBoxText, setMsgBoxText,
  
  } = usePurple();
  const [userSelect, setUserSelect] = React.useState('1');
  
  const userOptions = [
  { label: 'Terrie', value: '1' },
  { label: 'Leo', value: '2' },
  { label: 'Son', value: '3' },
  { label: 'Daughter', value: '4' },
  { label: 'M', value: '5' },
  { label: 'A', value: '6' },
];
  return (
    <div>
        {/* <h1>User_Select</h1> */}
        <select 
        value={userSelect} 
        // onChange={e => setUserSelect(e.target.value)}
        onChange={e => {
          setUserSelect(e.target.value)
          setUserId(e.target.value)
          setShowMsgBox(false)
          setMsgBoxText('null')
        }}
        className={`
            ${styles["box-in-hover"]}
            bg-white text-black dark:bg-gray-800 dark:text-white p-2 
            rounded shadow-md m-4
        `}
        >
            {userOptions.map(u => (
            <option key={u.value} value={u.value}>{u.label}</option>
            ))}
        </select>
         <User_set/> 
        {/*<Git_User_set/>*/}
        {/* <div className='hidden'>
          <Step/>
        </div> */}
      </div>
  )
}
