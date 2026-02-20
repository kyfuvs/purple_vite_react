import React from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";
import styles from './B6.module.css'
import Star_click_horizontal from './star_click_Folder/Star_click_horizontal';
import Star_click from './star_click_Folder/Star_click';

export default function B6({boxId}) {
    const { 
      showGrid,
      lyy, 
      // Annual 12
        // 歲建 a1_yearLeader
        // 晦氣 a2_gloomAir
        // 喪門 a3_funeralGate
        // 貫索 a4_stuckRope
        // 官符 a5_officialTalisman
        // 小耗 a6_minorLoss
        // 大耗 a7_majorLoss
        // 龍德 a8_dragonVirtue
        // 白虎 a9_whiteTiger
        // 天德 a10_skyVirtue
        // 弔客 a11_mourningGuest
        // 病符 a12_illnessTalisman
        a1_yearLeader, setA1_yearLeader,
        a2_gloomAir, setA2_gloomAir,
        a3_funeralGate, setA3_funeralGate,
        a4_stuckRope, setA4_stuckRope,
        a5_officialTalisman, setA5_officialTalisman,
        a6_minorLoss, setA6_minorLoss,
        a7_majorLoss, setA7_majorLoss,
        a8_dragonVirtue, setA8_dragonVirtue,
        a9_whiteTiger, setA9_whiteTiger,
        a10_skyVirtue, setA10_skyVirtue,
        a11_mourningGuest, setA11_mourningGuest,
        a12_illnessTalisman, setA12_illnessTalisman,
        
        // GeneralFront12 -將前十二星
        // 將星 g1_general
        // 攀鞍 g2_mountingSaddle
        // 歲驛 g3_yearTravelingHorse
        // 息神 g4_restingSpirit
        // 華蓋 g5_elegantCanopy
        // 劫煞 g6_robberySuddenLoss
        // 災煞 g7_disasterSuddenLoss
        // 天煞 g8_skySuddenLoss
        // 指背 g9_pointingBack
        // 咸池 g10_saltPool
        // 月煞 g11_monthlySuddenLoss
        // 亡神 g12_deadSpirit
        g1_general_Id, setG1_general_Id,

        g1_general, setG1_general,
        g2_mountingSaddle, setG2_mountingSaddle,
        g3_yearTravelingHorse, setG3_yearTravelingHorse,
        g4_restingSpirit, setG4_restingSpirit,
        g5_elegantCanopy, setG5_elegantCanopy,
        g6_robberySuddenLoss, setG6_robberySuddenLoss,
        g7_disasterSuddenLoss, setG7_disasterSuddenLoss,
        g8_skySuddenLoss, setG8_skySuddenLoss,
        g9_pointingBack, setG9_pointingBack,
        g10_saltPool, setG10_saltPool,
        g11_monthlySuddenLoss, setG11_monthlySuddenLoss,
        g12_deadSpirit, setG12_deadSpirit,
    
    } = usePurple();
    
// const i = (boxId - s1_Birth_Id + 12+1) % 12 || 12
// const j = mf === '陽男'||mf === '陰女' ? i : (s1_Birth_Id - boxId + 12+1) % 12 || 12
// const j = (s1_Birth_Id - boxId + 12+1) % 12 || 12
// const k = mf === '陽男'||mf === '陰女' ? i : j

// ★「生年」安博士十二神，依據生年祿存星所在位置定出博士位置，
// 在依據生年地支陰(偶數)陽(奇數)來分別陽男陰女順行，陰男陽女逆行，
// 在依序安：博士>力士>青龍>小耗>將軍>奏書>飛廉>喜神>病符>大耗>伏兵>官府。
// const x = (boxId - aux1_lucky_Id + 12+1) % 12 || 12
// const y = (aux1_lucky_Id - boxId + 12+1) % 12 || 12
// const z = mf === '陽男'||mf === '陰女' ? x : y

// ★「生年」安歲前十二星，依據生年地支位定出歲建位置，不分男女陰陽，一律順行，
// 歲建>晦氣>喪門>貫索>官符>小耗>大耗>龍德>白虎>天德>弔客>病符。
 const earth = '子丑寅卯辰巳午未申酉戌亥';
 const lyy_Id = earth.indexOf(lyy.slice(1,2)) + 1;
 const i = (boxId - lyy_Id + 12+1) % 12 || 12
 const j = (boxId - g1_general_Id + 12+1) % 12 || 12

//  ★「生年」安將前十二星，先依據生年地支起將星，對照表如下：
// 生年地支為寅、午、戌，將星定位在午位。
// 生年地支為申、子、辰，將星定位在子位。
// 生年地支為巳、酉、丑，將星定位在酉位。
// 生年地支為亥、卯、未，將星定位在卯位。
// 不分男女陰陽，一律順行，將星>攀鞍>歲驛>息神>華蓋>劫煞>災煞>天煞>指背>咸池>月煞>亡神。
  return (
    <div className={`
    relative
    flex items-center justify-end leading-none
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
            {/* <p>{j}</p> */}
            <div className='
            relative h-1/2
            text-[0.45rem] sm:text-sm md:text-[0.45rem] lg:text-[0.5rem]'>
               <div className="absolute bottom-0 right-0 leading-none whitespace-nowrap">
                 {i===1 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a1_yearLeader} />
                  </span>
                  }
                   {i===2 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a2_gloomAir} />
                  </span>
                  }
                  {i===3 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a3_funeralGate} />
                  </span>
                  }
                  {i===4 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a4_stuckRope} />
                  </span>
                  }
                  {i===5 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a5_officialTalisman} />
                  </span>
                  }
                  {i===6 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a6_minorLoss} />
                  </span>
                  }
                  {i===7 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a7_majorLoss} />
                  </span>
                  }
                  {i===8 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a8_dragonVirtue} />
                  </span>
                  }
                  {i===9 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a9_whiteTiger} />
                  </span>
                  }
                  {i===10 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a10_skyVirtue} />
                  </span>
                  }
                   {i===11 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a11_mourningGuest} />
                  </span>
                  }
                  {i===12 &&
                  <span className="text-blue-300"> 
                    <Star_click_horizontal boxId={boxId} star={a12_illnessTalisman} />
                  </span>
                  }
                 
                </div>
              </div>

              <div className=' 
              relative h-1/2
              text-[0.45rem] sm:text-sm md:text-[0.45rem] lg:text-[0.55rem]'>
                <div className='absolute top-0 right-0 leading-none whitespace-nowrap'>
                   {j===1 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g1_general} />
                  </span>
                  }
                  {j===2 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g2_mountingSaddle} />
                  </span>
                  }
                  {j===3 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g3_yearTravelingHorse} />
                  </span>
                  }
                  {j===4 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g4_restingSpirit} />
                  </span>
                  }
                  {j===5 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g5_elegantCanopy} />
                  </span>
                  }
                  {j===6 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g6_robberySuddenLoss} />
                  </span>
                  }
                  {j===7 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g7_disasterSuddenLoss} />
                  </span>
                  }
                  {j===8 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g8_skySuddenLoss} />
                  </span>
                  }
                  {j===9 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g9_pointingBack} />
                  </span>
                  }
                  {j===10 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g10_saltPool} />
                  </span>
                  }
                  {j===11 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g11_monthlySuddenLoss} />
                  </span>
                  }
                  {j===12 &&
                  <span className="text-violet-400 flex"> 
                     <Star_click_horizontal boxId={boxId} star={g12_deadSpirit} />
                  </span>
                  }
               </div>
              </div>
      </div>
        
    </div>
  )
}
