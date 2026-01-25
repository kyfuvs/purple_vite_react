import React from 'react'
import B from '../Box_Folder/B'
import B2 from '../Box_Folder/B2'
import B5 from '../Box_Folder/B5'
import B7 from '../Box_Folder/B7'
import B9 from '../Box_Folder/B9'

export default function BS7() {
  return (
    <div className='border border-blue-500'>
        <div className='flex flex-row'>
            <B />
            <B2 boxId="7"/>
            <B />
        </div>
        <div className='flex flex-row'>
            <B />
            <B5 boxId="7" />
            <B />
        </div>
        <div className='flex flex-row'>
            <B7 boxId="7" />
            <B />
            <B9 boxId="7" />
        </div>
       
    </div>
  )
}
