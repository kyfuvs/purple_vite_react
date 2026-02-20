import React from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";
import styles from './B4.module.css'
import Star_click_horizontal from './star_click_Folder/Star_click_horizontal';
import Star_click from './star_click_Folder/Star_click';

export default function B4({boxId}) {
    const { 
      showGrid,
      station,life_Index,mf,
       // LifeStage 長生十二星
        // 長生 s1_Birth 
        // 沐浴 s2_Bathing 
        // 冠帶 s3_Dressing
        // 臨官 s4_Official
        // 帝旺 s5_Prosperity
        // 衰 s6_Weakening
        // 病 s7_Sickness
        // 死 s8_Death
        // 墓 s9_Tomb 
        // 絕 s10_Extinction
        // 胎 s11_Fetus
        // 養 s12_Nourishment 
        s1_Birth_Id, setS1_Birth_Id,

        s1_Birth, setS1_Birth,
        s2_Bathing, setS2_Bathing,
        s3_Dressing, setS3_Dressing,  
        s4_Official, setS4_Official,
        s5_Prosperity, setS5_Prosperity,
        s6_Weakening, setS6_Weakening,
        s7_Sickness, setS7_Sickness,
        s8_Death, setS8_Death,
        s9_Tomb, setS9_Tomb,
        s10_Extinction, setS10_Extinction,
        s11_Fetus, setS11_Fetus,
        s12_Nourishment, setS12_Nourishment,

        aux1_lucky_Id, setAux1_lucky_Id,
        // Dr12 Stars (博士十二神) 
        // 博士 d1_Doctor
        // 力士 d2_Hercules
        // 青龍 d3_GreenDragon
        // 小耗 d4_MinorExpenditure
        // 將軍 d5_General
        // 奏書 d6_RoyalDocument
        // 飛廉 d7_FlyingJustice
        // 喜神 d8_JoyGod
        // 病符 d9_SicknessTalisman
        // 大耗 d10_MajorExpenditure
        // 伏兵 d11_HiddenSoldier
        // 官府 d12_GovernmentOffice
        d1_Doctor, setD1_Doctor,
        d2_Hercules, setD2_Hercules,
        d3_GreenDragon, setD3_GreenDragon,
        d4_MinorExpenditure, setD4_MinorExpenditure,
        d5_General, setD5_General,
        d6_RoyalDocument, setD6_RoyalDocument,
        d7_FlyingJustice, setD7_FlyingJustice,
        d8_JoyGod, setD8_JoyGod,
        d9_SicknessTalisman, setD9_SicknessTalisman,
        d10_MajorExpenditure, setD10_MajorExpenditure,
        d11_HiddenSoldier, setD11_HiddenSoldier,
        d12_GovernmentOffice, setD12_GovernmentOffice,
     
    
    } = usePurple();
    
    // const age_start = parseInt(station.slice(1,2));
    // const distance =
    //   big10yr_Direction === 'clock'
    //      ? (boxId - life_Index + 12) % 12
    //     : (life_Index - boxId + 12) % 12

    // const age = age_start + distance * 10
    // const age_end = age + 9;
// 二、操作方式：
// ★「生年」安長生十二星，依據五行局而定出長生位置，
// 水二局長生在申，
// 木三局長生在亥，
// 金四局長生在巳，
// 土五局長生在申，
// 火六局長生在寅，
// 在依據生年地支陰(偶數)陽(奇數)來分別陽男陰女順行，陰男陽女逆行，
// 在依序安：長生>沐浴>冠帶>臨官>帝旺>衰>病>死>墓>絕>胎>養。
// const i = mf === '陽男'||'陰女' ?(boxId - s1_Birth_Id + 12+1) % 12 || 12;
// const i = mf === '陽男' ?(boxId - s1_Birth_Id + 12+1) % 12 || 12 : (s1_Birth_Id - boxId + 12+1) % 12 || 12;
const i = (boxId - s1_Birth_Id + 12+1) % 12 || 12
// const j = mf === '陽男'||mf === '陰女' ? i : (s1_Birth_Id - boxId + 12+1) % 12 || 12
const j = (s1_Birth_Id - boxId + 12+1) % 12 || 12
const k = mf === '陽男'||mf === '陰女' ? i : j

// ★「生年」安博士十二神，依據生年祿存星所在位置定出博士位置，
// 在依據生年地支陰(偶數)陽(奇數)來分別陽男陰女順行，陰男陽女逆行，
// 在依序安：博士>力士>青龍>小耗>將軍>奏書>飛廉>喜神>病符>大耗>伏兵>官府。
const x = (boxId - aux1_lucky_Id + 12+1) % 12 || 12
const y = (aux1_lucky_Id - boxId + 12+1) % 12 || 12
const z = mf === '陽男'||mf === '陰女' ? x : y
  return (
    <div className={`
    relative
    flex items-center justify-start leading-none
    bg-white dark:bg-black 
    text-black dark:text-white 
    w-[30px] h-[30px]
    sm:w-[100px] sm:h-[50px]
    md:w-[30px] md:h-[30px]
    lg:w-[30px] lg:h-[30px]
    ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    ${styles["box-in-hover"]}
    
    `}
    >
           <div className='
           absolute 
           flex flex-col gap-0 leading-none
           '>
            <div className='
            relative h-1/2
            text-[0.45rem] sm:text-sm md:text-[0.45rem] lg:text-[0.5rem]'>
               <div className="absolute bottom-0 left-0 leading-none whitespace-nowrap">
                 {k===1 &&
                  <span className="text-violet-300"> 
                    <Star_click_horizontal boxId={boxId} star={s1_Birth} />
                  </span>
                  }
                 
                  {k===2 &&
                  <span className="text-violet-300 "> 
                    <Star_click_horizontal boxId={boxId} star={s2_Bathing} />
                  </span>
                  }
                 
                   {k===3 &&
                  <span className="text-violet-300 "> 
                    <Star_click_horizontal boxId={boxId} star={s3_Dressing} />
                  </span>
                  }

                  {k===4 &&
                  <span className="text-violet-300 "> 
                    <Star_click_horizontal boxId={boxId} star={s4_Official} />
                  </span>
                  }

                  {k===5 &&
                  <span className="text-violet-300 "> 
                     <Star_click_horizontal boxId={boxId} star={s5_Prosperity} />
                  </span>
                  }

                  {k===6 &&
                  <span className="text-violet-300 "> 
                     <Star_click_horizontal boxId={boxId} star={s6_Weakening} />
                  </span>
                  }

                  {k===7 &&
                  <span className="text-violet-300 "> 
                     <Star_click_horizontal boxId={boxId} star={s7_Sickness} />
                  </span>
                  }

                   {k===8 &&
                  <span className="text-violet-300 "> 
                     <Star_click_horizontal boxId={boxId} star={s8_Death} />
                  </span>
                  }

                   {k===9 &&
                  <span className="text-violet-300 "> 
                     <Star_click_horizontal boxId={boxId} star={s9_Tomb} />
                  </span>
                  }

                   {k===10 &&
                  <span className="text-violet-300 flex"> 
                     <Star_click_horizontal boxId={boxId} star={s10_Extinction} />
                  </span>
                  }

                   {k===11 &&
                  <span className="text-violet-300 "> 
                     <Star_click_horizontal boxId={boxId} star={s11_Fetus} />
                  </span>
                  }

                    {k===12 &&
                  <span className="text-violet-300 "> 
                     <Star_click_horizontal boxId={boxId} star={s12_Nourishment} />
                  </span>
                  }
                </div>
              </div>

              <div className=' 
              relative h-1/2
              text-[0.45rem] sm:text-sm md:text-[0.45rem] lg:text-[0.55rem]'>
               {/* <div className='absolute top-0 left-0 leading-none w-full h-full flex items-center justify-center'> */}
                <div className='absolute top-0 left-0 leading-none whitespace-nowrap'>
                   {z===1 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d1_Doctor} />
                  </span>
                  }
                  {z===2 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d2_Hercules} />
                  </span>
                  }
                  {z===3 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d3_GreenDragon} />
                  </span>
                  }
                  {z===4 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d4_MinorExpenditure} />
                  </span>
                  }
                  {z===5 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d5_General} />
                  </span>
                  }
                   {z===6 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d6_RoyalDocument} />
                  </span>
                  }
                   {z===7 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d7_FlyingJustice} />
                  </span>
                  }
                  {z===8 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d8_JoyGod} />
                  </span>
                  }
                   {z===9 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d9_SicknessTalisman} />
                  </span>
                  }
                   {z===10 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d10_MajorExpenditure} />
                  </span>
                  }
                   {z===11 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d11_HiddenSoldier} />
                  </span>
                  }
                  {z===12 &&
                  <span className="text-pink-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={d12_GovernmentOffice} />
                  </span>
                  }
               </div>
              </div>
      </div>
        
    </div>
  )
}
