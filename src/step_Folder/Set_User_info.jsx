import React, {useEffect} from 'react'
import { usePurple } from "../context/PurpleContext";
import Solar_to_Lunar from '../lunar/convert/Solar_to_Lunar'
import Adjust_DOB from '../lunar/convert/Adjust_DOB';

export default function Set_User_info() {
    const { 
    new_Old_Option, setNew_Old_Option, showForm, setShowForm,
    nuDOB, setNuDOB,
    nuHOB, setHOB,
    dob, setDOB
   } = usePurple();

   useEffect(() => {
         if (!nuDOB || !nuHOB) return
   
         const adjusted = Adjust_DOB(
           nuDOB.format('YYYY-MM-DD'),
           nuHOB
         )
   
         setDOB(adjusted)
       }, [nuDOB, nuHOB, setDOB])

  return (
    <div>
        Set_User_info-{dob.format("YYYY-MM-DD")}
        <Solar_to_Lunar dob={dob.format("YYYY-MM-DD")} hob={nuHOB}/>
    </div>
  )
}
