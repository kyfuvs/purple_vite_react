import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import earthMap from './Map_Folder/earthMap'
import palace12_Map from './Map_Folder/palace12_Map'
import palaceMap from './Map_Folder/palaceMap'
import starData_Map from './Map_Folder/starData_Map'
import starMap from './Map_Folder/starMap'
import Purple_data from '../../data/Purple_data'

export default function Star_Details() {
    const{
        clickStar,
        starDetail, setStarDetail
    }=usePurple()
    if (!clickStar) {
  return <div>請點擊星曜</div>
}
    const[star,earth,palace]=clickStar.split('-')
    // const data=N2_intelligence_data?.[palace12_Key]?.intelligence?.[palaceKey]
    const starDataKey = starData_Map[star]
    const starKey = starMap[star]
    const palace12_Key = palace12_Map[palace]
    const palaceKey = palaceMap[palace]
    const earthKey = earthMap[earth] // 丑 → e2
   
    // const starData = Purple_data.N2_intelligence_data.palace_9_career.intelligence
    // const data = starData.career
    const starData = Purple_data?.[starDataKey]?.[palace12_Key]?.[starKey]
    const data = starData?.[palaceKey]
    

    const changeGas = data?.changeGas
    const main = data?.main
    const earthData = data?.earth?.[earthKey]
    const special = data?.special
//     setMsgBoxText(
//   clickStar + '\n' + 
//   star +'-' + earth + '-' + palaceCN + '\n' +
//   changeGas?.belongs + '\n' +
//   changeGas?.represent + '\n' +
//   main?.main1 + '\n' + main?.main2+ '\n' + 
//   earth +':' + earthData?.status+ '\n' + earthData?.content
// )
    // setStarDetail(
    //   changeGas?.belongs + '\n' +
    //   changeGas?.represent + '\n' +
    //   main?.main1 + '\n' + main?.main2+ '\n' + 
    //   earth +':' + earthData?.status+ '\n' + earthData?.content
    // )

setStarDetail(
  (changeGas?.belongs || '') + '\n' +
  (changeGas?.represent || '') + '\n' +
  (main?.main1 || '') + '\n' +
  (main?.main2?.join('、') || '') + '\n' +
  
  (earthData?.status || '') + '\n' +
  (earthData?.content || '')
)

  return (
    <div>
        Star_Details
        <p>{clickStar}</p>
        <p>{star}-{earth}-{palace}</p>
        <p>palace12_Key:{palace12_Key}</p>
      <p>palace:{palace};palaceKey:{palaceKey}</p>
      <p>earth:{earth};earthKey:{earthKey}</p>
      <p>{changeGas?.belongs}</p>
      <p>{changeGas?.represent}</p>
      <p>{main?.main1}</p>
      <p>{main?.main2?.join('、')}</p>
      <p>{earth}:{earthData?.status}</p>
      <p>{earthData?.content}</p>
      <p>{special?.special_1}</p>
      <br />
      <p>{starDetail}</p>
    </div>
  )
}
