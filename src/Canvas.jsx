import React from 'react'
import { usePurple } from './context/PurpleContext'
import MUI_messageBox from './components_MUI/MUI_messageBox'
// import B6 from './BS_Folder/B6'
import BS1 from './BS_Folder/BS1'
import BS2 from './BS_Folder/BS2'
import BS3 from './BS_Folder/BS3'
import BS4 from './BS_Folder/BS4'
import BS5 from './BS_Folder/BS5'
import BS6 from './BS_Folder/BS6'
import BS7 from './BS_Folder/BS7'
import BS8 from './BS_Folder/BS8'
import BS9 from './BS_Folder/BS9'
import BS10 from './BS_Folder/BS10'
import BS11 from './BS_Folder/BS11'
import BS12 from './BS_Folder/BS12'
import BL from './BL_Folder/BL'


export default function Canvas() {
  const{
    msgOpen,setMsgOpen,
    msgText, setMsgText,
  }=usePurple()
  return (
    <div className='px-5 flex flex-col justify-center items-center '>
        <MUI_messageBox
            open={msgOpen}
            onClose={() => setMsgOpen(false)}
            message={msgText}
          />

        {/* 1st Row */}
        <div className='flex flex-row'>
           <BS6 />
           <BS7 />
           <BS8 />
           <BS9 />
        </div>
        {/* 2nd Row */}
        <div className='flex flex-row'>
            <div>
              <BS5 />
              <BS4 />
            </div>
            <div>
                <BL />
            </div>
            <div>
              <BS10 />
              <BS11 />
            </div>
        </div>
        {/* 3rd Row */}
        <div className='flex flex-row'>
           <BS3 />
           <BS2 />
           <BS1 />
           <BS12 />
        </div>
       
    </div>
  )
}
