import React,{useEffect} from 'react'
import { usePurple } from "../../../../context/PurpleContext"
import palace12_Map from "../palace12_Map"
import palaceMap from "../palaceMap"
import earthMap from "../earthMap"
import N2_intelligence_data from "../../../../data/main14/N_6/N2_intelligence/N2_intelligence_data"


export default function N2_intelligence_details() {
  const { 
    clickStar,
    msgBoxText, setMsgBoxText,
   } = usePurple()
  const [star, earth, palaceCN] = clickStar.split('-')

  const palace12_Key = palace12_Map[palaceCN]
  const palaceKey = palaceMap[palaceCN]
  const earthKey = earthMap[earth] // 丑 → e2

//   const data =
//     N2_intelligence_data?.intelligence?.[palaceKey]
//   const data=N2_intelligence_data?.palace_9_career?.intelligence?.career
  const data=N2_intelligence_data?.[palace12_Key]?.intelligence?.[palaceKey]
  const changeGas = data?.changeGas
  const main = data?.main
  const earthData = data?.earth?.[earthKey]
  const special = data?.special
//   useEffect(() => {
//   const text = [
//     `【${clickStar}】`,
//     '',
//     main?.main1,
//     main?.main2?.join('、'),
//     earthData ? `${earth}：${earthData.status}` : null,
//     earthData?.content,
//   ]
//     .filter(Boolean)  
//     .join('\n')

//   setMsgBoxText(text)
// }, [clickStar, main, earthData])
setMsgBoxText(
  clickStar + '\n' + 
  star +'-' + earth + '-' + palaceCN + '\n' +
  changeGas?.belongs + '\n' +
  changeGas?.represent + '\n' +
  main?.main1 + '\n' + main?.main2+ '\n' + 
  earth +':' + earthData?.status+ '\n' + earthData?.content
)

  return (
    <>
      <h1>N2_intelligence_details</h1>
      <p>palace12_Key:{palace12_Key}</p>
      <p>palaceCN:{palaceCN};palaceKey:{palaceKey}</p>
      <p>earth:{earth};earthKey:{earthKey}</p>
      <p>{changeGas?.belongs}</p>
      <p>{changeGas?.represent}</p>
      <p>{main?.main1}</p>
      <p>{main?.main2?.join('、')}</p>
      <p>{earth}:{earthData?.status}</p>
      <p>{earthData?.content}</p>
      <p>{special?.special_1}</p>
    </>
  )
}
