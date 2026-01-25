import React, {useEffect} from 'react'
import { usePurple } from "../context/PurpleContext"
import Input_1_Name from './form_Folder/Input_1_Name'
import Input_2_Gender from './form_Folder/Input_2_Gender'
import Input_3_DOB from './form_Folder/Input_3_DOB'
import Input_4_HOB from './form_Folder/Input_4_HOB'
import Adjust_DOB from '../lunar/convert/Adjust_DOB'
import Submit_Form from './form_Folder/Submit_Form'


export default function BL_Form() {
    const { nuName, nuGender, nuDOB, nuHOB, 
      dob, setDOB
     } = usePurple()

  // useEffect(() => {
  //     if (!nuDOB || !nuHOB) return

  //     const adjusted = Adjust_DOB(
  //       nuDOB.format('YYYY-MM-DD'),
  //       nuHOB
  //     )

  //     setDOB(adjusted)
  //   }, [nuDOB, nuHOB, setDOB])

  return (
    <div className='
    flex flex-col gap-1
    text-[0.45rem] sm:text-sm md:text-[0.6rem] lg:text-[0.75rem]
    font-bold
    '>
        <h1>紫微斗數</h1>
        <div className='flex flex-row gap-2'>
            <p className='flex items-center'>姓名: <Input_1_Name/></p>
            <p><Input_2_Gender/></p>
        </div>

         <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1">
              DOB: <Input_3_DOB />
            </div>

            <div className="flex items-center">
              <Input_4_HOB />
            </div>
          </div>

     
        {/* <p>{nuName}-{nuGender}</p> */}
        <div className='flex flex-row items-top gap-2'>
          <p>{nuDOB.format('YYYY-MM-DD')} {nuHOB}</p>
          <Submit_Form/>
        </div>
        
        {/* <p>{dob.format('YYYY-MM-DD')}</p> */}
    </div>
  )
}
