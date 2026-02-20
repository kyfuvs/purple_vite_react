import React from 'react'
import B from '../Box_Folder/B'
import B1 from '../Box_Folder/B1'
import B2 from '../Box_Folder/B2'
import B3 from '../Box_Folder/B3'
import B4 from '../Box_Folder/B4'
import B5 from '../Box_Folder/B5'
import B6 from '../Box_Folder/B6'
import B7 from '../Box_Folder/B7'
import B9 from '../Box_Folder/B9'

export default function BS8() {
  return (
    <div className='border border-blue-500'>
        <div className='flex flex-row'>
            <B1 boxId="8"/>
            <B2 boxId="8"/>
            <B3 boxId="8"/>
        </div>
        <div className='flex flex-row'>
            <B4 boxId="8"/>
            <B5 boxId="8" />
             <B6 boxId="8" />
        </div>
        <div className='flex flex-row'>
            <B7 boxId="8" />
            <B />
            <B9 boxId="8" />
        </div>
       
    </div>
  )
}
