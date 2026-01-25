import React from 'react'
import N2_intelligence_palace_9_career_data from '../N2_intelligence_by_palace_data/N2_intelligence_palace_9_career_data'

export default function N2_intelligence_palace_9_career() {
    const jsonString = JSON.stringify(N2_intelligence_palace_9_career_data);
    // 天機-丑-事業
    const data_main = N2_intelligence_palace_9_career_data?.['intelligence']?.['career']?.main
    const result_main = data_main?`${data_main.main1}\n${data_main.main2}`:'null'
    const data =
    //  N2_intelligence_palace_9_career_data?.['天機']?.['事業']?.['地支']?.['丑']
      N2_intelligence_palace_9_career_data?.['intelligence']?.['career']?.['earth']?.['e2']
     const result = data
        // ? `${data.狀態}\n${data.內容}`
        // : '沒有資料'
        ? `${data.status}\n${data.content}`
        : 'null'
    // const jsonString = JSON.stringify(N2_in_career);
    // 天機-丑-事業
  // const data =
  // N2_in_career?.['天機']?.['事業']?.['地支']?.['丑']
  // 總論-通論
  // const result = data
  //   ? `${data.狀態}\n${data.內容}`
  //   : '沒有資料'

// const starKey = 'intelligence'   
// const palaceKey = 'career'     
// const earthIndex = 2           
// const earthKey = `e${earthIndex}`

// const data_e =
//   N2_in_9_career?.[starKey]?.[palaceKey]?.earth?.[earthKey]

// const result_e = data_e
//   ? `${data_e.status}\n${data_e.content}`
//   : 'no data'

  // const data_intelligence_in_career =
  // N2_in_9_career?.[starKey]?.[palaceKey]

  // const result_main = data_intelligence_in_career
  // ? `${data_intelligence_in_career.main.main1}\n${data_intelligence_in_career.main.main2}`
  // : 'no data'
  return (
    <div>
        N2_intelligence_palace_9_career
        <p>{result_main}</p>
        <p>{result}</p>

    </div>
  )
}
