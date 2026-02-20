import React,{useState} from 'react'
// import { usePurple } from "./context/PurpleContext";
import { usePurple } from "../context/PurpleContext";
import styles from './B2.module.css'
import Star_click from './star_click_Folder/Star_click';
import R1_solvingGod_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R1_solvingGod_Map';
import R2_skyWitch_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R2_skyWitch_Map';
import R3_skyMoon_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R3_skyMoon_Map';
import R4_hiddenDanger_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R4_hiddenDanger_Map';
import R5_serveringVoid_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R5_severingVoid_Map';
import R6_loneliness_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R6_loneliness_Map';
import R7_widow_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R7_widow_Map';
import R8_skyOfficer_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R8_skyOfficer_Map';
import R9_skyFortune_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R9_skyFortune_Map';
import R10_skyCry_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R10_skyCry_Map';
import R11_skyEmpty_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R11_skyEmpty_Map';
import R12_dragonPool_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R12_dragonPool_Map';
import R13_phoenixPavilion_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R13_phoenixPavilion_Map';
import R14_redPhoenix_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R14_redPhoenix_Map';
import R15_skyJoy_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R15_skyJoy_Map';
import R16_rumorsJustice_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R16_rumorsJustice_Map';
import R17_breakage_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R17_breakage_Map';
import R18_artCanopy_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R18_artCanopy_Map';
import R19_saltPool_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R19_saltPool_Map';
import R20_skyChef_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R20_skyChef_Map';
import R21_interceptRoad_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R21_interceptRoad_Map';
import R22_emptyDeath_Map from '../step_Folder/step11_Misc_star/Misc_star_Folder/R22_emptyDeath_Map'; 

// import MUI_messageBox from '../components_MUI/MUI_messageBox'
// import MUI_messageBox from '../components_MUI/MUI_messageBox'

export default function B3({boxId}) {
    // const [open, setOpen] = useState(false)
    const { 
        showGrid,
        lm,ld,lh,lyy,mf,
        life_Index,body_Index,
        N1_Id,
        S1_Id,
        n1, setN1,
        n2, setN2,
        click_boxId,setClick_boxId,
        msgOpen, setMsgOpen,
        msgText, setMsgText,
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        clickStar,setClickStar,
        aux2_leftAssistant_Id, setAux2_leftAssistant_Id,
        aux2_rightAssistant_Id, setAux2_rightAssistant_Id,
        aux3_manC_Id, setAux3_manC_Id,
        aux3_manK_Id, setAux3_manK_Id,

        // Honor star
        // 台輔 → platformSupport
        // 封誥 → officialRecognition 
        // 三台 → threePlatforms 
        // 八座 → eightSeats 
        honor1_platformSupport, setHonor1_platformSupport,
        honor2_officialRecognition, setHonor2_officialRecognition,
        honor3_threePlatforms, setHonor3_threePlatforms,
        honor4_eightSeats, setHonor4_eightSeats,
        
        // Hardship
        // 天刑 → skyDiscipline
        // 天傷 → skyWound 
        // 天哭 → skyCry
        // 天虛 → skyEmpty
        // 陰煞 → hiddenDanger
        // 截空 → severingVoid
        // 破碎 → breakage
        hardship1_skyDiscipline, setHardship1_skyDiscipline,
        hardship2_skyWound, setHardship2_skyWound,
        hardship3_skyCry, setHardship3_skyCry,
        hardship4_skyEmpty, setHardship4_skyEmpty,
        hardship5_hiddenDanger, setHardship5_hiddenDanger,
        hardship6_severingVoid, setHardship6_severingVoid,
        hardship7_breakage, setHardship7_breakage,
        // 截路、空亡
        hardship8_interceptRoad, setHardship8_interceptRoad,
        hardship9_emptyDeath, setHardship9_emptyDeath,

        // Romance star
        // 天姚 → skyAllure
        // 紅鸞 → redPhoenix 
        // 天喜 → skyJoy 
        // 咸池 → saltPool 
        romance1_skyAllure, setRomance1_skyAllure,
        romance2_redPhoenix, setRomance2_redPhoenix,
        romance3_skyJoy, setRomance3_skyJoy,
        romance4_saltPool, setRomance4_saltPool,
       

        //  Talent star
        // 天才 → skyTalent 
        // 天巫 → skyWitch
        // 華蓋 → artCanopy
        talent1_skyTalent, setTalent1_skyTalent,
        talent2_skyWitch, setTalent2_skyWitch,
        talent3_artCanopy, setTalent3_artCanopy,

        // Blessing
        // 天壽 → skyAge
        // 天廚 → skyChef
        // 天官 → skyOfficer
        // 天福 → skyFortune
        // 恩光 → graceLight
        // 天貴 → skyNobel
        // 天使 → skyAngel
        blessing1_skyAge, setBlessing1_skyAge,
        blessing2_skyChef, setBlessing2_skyChef,
        blessing3_skyOfficer, setBlessing3_skyOfficer,
        blessing4_skyFortune, setBlessing4_skyFortune,
        blessing5_graceLight, setBlessing5_graceLight,
        blessing6_skyNobel, setBlessing6_skyNobel,
        blessing7_skyAngel, setBlessing7_skyAngel,

        // Life 
        // 孤辰 → loneliness
        // 寡宿 → widow
        life1_loneliness, setLife1_loneliness,
        life2_widow, seLife2_widow,

        // Resolution
        // 解神 → solvingGod
        // 蜚廉 → rumorsJustice
        // 龍池 → dragonPool
        // 鳳閣 → phoenixPavilion
        resolution1_solvingGod, setResolution_solvingGod,
        resolution2_rumorsJustice, setResolution2_rumorsJustice,
        resolution3_dragonPool, setResolution3_dragonPool,
        resolution4_phoenixPavilion, setResolution4_phoenixPavilion,
       
        // Illness
        // 天月 → skyMoon
        illness1_skyMoon, setIllness1_skyMoon,

    
    } = usePurple();
    // 紫微星>天機星>空一格>太陽星>武曲星>天同星>空二格>廉貞星
    // const N_stars=['紫微','天機','','太陽','武曲','天同','','','廉貞']
    // const i = (((boxId - N1_Id )*-1)+12)%12 +1
    // const S_stars=['天府','太陰','貪狼','巨門','天相','天梁','七殺','','','','破軍']
    // const j = (((boxId - S1_Id ))+12)%12 +1
    // const [n1_star,n1_earth,n1_palace,n1_change]=n1_emperor.split('-')
    // const [n2_star,n2_earth,n2_palace,n2_change]=n2_intelligence.split('-')
    // const [n4_star,n4_earth,n4_palace,n4_change]=n4_sun.split('-')
    // const [n5_star,n5_earth,n5_palace,n5_change]=n5_finance.split('-')
    // const [n6_star,n6_earth,n6_palace,n6_change]=n6_enjoyment.split('-')
    // const [n9_star,n9_earth,n9_palace,n9_change]=n9_justice.split('-')

    // const [s1_star,s1_earth,s1_palace,s1_change]=s1_treasury.split('-')
    // const [s2_star,s2_earth,s2_palace,s2_change]=s2_moon.split('-')
    // const [s3_star,s3_earth,s3_palace,s3_change]=s3_greedyWolf.split('-')
    // const [s4_star,s4_earth,s4_palace,s4_change]=s4_mouth.split('-')
    // const [s5_star,s5_earth,s5_palace,s5_change]=s5_minister.split('-')
    // const [s6_star,s6_earth,s6_palace,s6_change]=s6_longevity.split('-')
    // const [s7_star,s7_earth,s7_palace,s7_change]=s7_sevenKiller.split('-')
    // const [s11_star,s11_earth,s11_palace,s11_change]=s11_brokenArmy.split('-')
    const sky = '甲乙丙丁戊己庚辛壬癸';
    const earth = '子丑寅卯辰巳午未申酉戌亥';

    // 台輔-honor1_platformSupport-從午位開始順時針排列到生時定位，
    // const start = '午'
    // const start_Id = Number(earth.indexOf(start)+1)
    // const lh_Id = Number(earth.indexOf(lh))
    const honor1_Id = (Number(earth.indexOf('午')+1) + Number(earth.indexOf(lh)))%12 || 12
    
    // 封誥-寅宮來起子，順到生時是貴方
    const honor2_Id = (Number(earth.indexOf('寅')+1) + Number(earth.indexOf(lh)))%12 || 12
    // 天刑-從酉起正月，順至生月便安之
   const hardship1_Id =((earth.indexOf('酉') + Number(lm)) % 12) || 12
    // 天姚-丑宮起正月，順到生月即停留
    const romance1_Id = (Number(earth.indexOf('丑')) + Number(lm))%12 || 12
    // 天才-由命宮起子，順行至本生年支安之
    const talent1_Id = (Number(life_Index) + Number(earth.indexOf(lyy.slice(1,2))))%12 || 12
    // 天壽-由身宮起子，順行至本生年支安之
    const blessing1_Id = (Number(body_Index) + Number(earth.indexOf(lyy.slice(1,2))))%12 || 12
    // 解神-正二月在申; 三四月在戌; 五六月在子; 七八月在寅; 九十月坐於辰宮; 十一十二月在午宮
    const solvingGod_Id = earth.indexOf(R1_solvingGod_Map[Number(lm)])+1
    // 天巫-正五九月在巳，二六十月在申，三七十一在寅，四八十二在亥
    const skyWitch_Id = earth.indexOf(R2_skyWitch_Map[Number(lm)])+1
    // 天月- 一月在戌; 二月在巳; 三月在辰; 四月在寅; 五月在未; 六月在卯; 
    // 七月在亥; 八月在未; 九月在寅; 十月在午; 十一月在戌; 十二月在寅
    const skyMoon_Id = earth.indexOf(R3_skyMoon_Map[Number(lm)])+1
    // 陰煞-正七月在寅，二八月在子，三九月在戌，四十月在申，五十一在午，六十二在辰
    const hiddenDanger_Id = earth.indexOf(R4_hiddenDanger_Map[Number(lm)])+1
    // 截空-甲己空申酉，乙庚午未求，丙辛空辰巳，丁壬寅卯憂，戊癸空子丑
    const lyy_sky = lyy.slice(0,1)
    const severingVoid_Id =earth.indexOf(R5_serveringVoid_Map[lyy.slice(0,1)])+1
    // 孤辰、寡宿
    // 出生年支為寅、卯、辰，孤辰在巳位，寡宿在丑位。
    // 出生年支為巳、午、未，孤辰在申位，寡宿在辰位。
    // 出生年支為申、酉、戌，孤辰在亥位，寡宿在未位。
    // 出生年支為亥、子、丑，孤辰在寅位，寡宿在戌位
     const loneliness_Id = earth.indexOf(R6_loneliness_Map[lyy.slice(1,2)])+1
     const widow_Id = earth.indexOf(R7_widow_Map[lyy.slice(1,2)])+1
    //  天官、天福
    // 甲年干出生天官在未位，天福在酉位。
    // 乙年干出生天官在辰位，天福在申位。
    // 丙年干出生天官在巳位，天福在子位。
    // 丁年干出生天官在寅位，天福在亥位。
    // 戊年干出生天官在卯位，天福在卯位。
    // 己年干出生天官在酉位，天福在寅位。
    // 庚年干出生天官在亥位，天福在午位。
    // 辛年干出生天官在酉位，天福在巳位。
    // 壬年干出生天官在戌位，天福在午位。
    // 癸年干出生天官在午位，天福在巳位。
    const skyOfficer_Id= earth.indexOf(R8_skyOfficer_Map[lyy.slice(0,1)])+1
    const skyFortune_Id= earth.indexOf(R9_skyFortune_Map[lyy.slice(0,1)])+1

    // 天哭、天虛
    // 出生年支子，天哭在午位，天虛在午位。
    // 出生年支丑，天哭在巳位，天虛在未位。
    // 出生年支寅，天哭在辰位，天虛在申位。
    // 出生年支卯，天哭在卯位，天虛在酉位。
    // 出生年支辰，天哭在寅位，天虛在戌位。
    // 出生年支巳，天哭在丑位，天虛在亥位。
    // 出生年支午，天哭在子位，天虛在子位。
    // 出生年支未，天哭在亥位，天虛在丑位。
    // 出生年支申，天哭在戌位，天虛在寅位。
    // 出生年支酉，天哭在酉位，天虛在卯位。
    // 出生年支戌，天哭在申位，天虛在辰位。
    // 出生年支亥，天哭在未位，天虛在巳位。
    const skyCry_Id =earth.indexOf(R10_skyCry_Map[lyy.slice(1,2)])+1
    const skyEmpty_Id =earth.indexOf(R11_skyEmpty_Map[lyy.slice(1,2)])+1

    // 天傷、天使 - 天傷在僕役，天使在疾厄
    const skyWound_Id = (((life_Index - 7))+12)%12 || 12
    const skyAngel_Id = (((life_Index - 5))+12)%12 || 12

    // 龍池、鳳閣
    // 出生年支子，龍池在辰位，鳳閣在戌位。
    // 出生年支丑，龍池在巳位，鳳閣在酉位。
    // 出生年支寅，龍池在午位，鳳閣在申位。
    // 出生年支卯，龍池在未位，鳳閣在未位。
    // 出生年支辰，龍池在申位，鳳閣在午位。
    // 出生年支巳，龍池在酉位，鳳閣在巳位。
    // 出生年支午，龍池在戌位，鳳閣在辰位。
    // 出生年支未，龍池在亥位，鳳閣在卯位。
    // 出生年支申，龍池在子位，鳳閣在寅位。
    // 出生年支酉，龍池在丑位，鳳閣在丑位。
    // 出生年支戌，龍池在寅位，鳳閣在子位。
    // 出生年支亥，龍池在卯位，鳳閣在亥位。
    const dragonPool_Id = earth.indexOf(R12_dragonPool_Map[lyy.slice(1,2)])+1
    const phoenixPavilion_Id = earth.indexOf(R13_phoenixPavilion_Map[lyy.slice(1,2)])+1

    // 紅鸞、天喜
    // 出生年支子，紅鸞在卯位，天喜在酉位。
    // 出生年支丑，紅鸞在寅位，天喜在申位。
    // 出生年支寅，紅鸞在丑位，天喜在未位。
    // 出生年支卯，紅鸞在子位，天喜在午位。
    // 出生年支辰，紅鸞在亥位，天喜在巳位。
    // 出生年支巳，紅鸞在戌位，天喜在辰位。
    // 出生年支午，紅鸞在酉位，天喜在卯位。
    // 出生年支未，紅鸞在申位，天喜在寅位。
    // 出生年支申，紅鸞在未位，天喜在丑位。
    // 出生年支酉，紅鸞在午位，天喜在子位。
    // 出生年支戌，紅鸞在巳位，天喜在亥位。
    // 出生年支亥，紅鸞在辰位，天喜在戌位。
    const redPhoenix_Id = earth.indexOf(R14_redPhoenix_Map[lyy.slice(1,2)])+1
    const skyJoy_Id = earth.indexOf(R15_skyJoy_Map[lyy.slice(1,2)])+1

    // 蜚廉-子丑寅年在申酉戌，卯辰巳年在巳午未，午未申年在寅卯辰，酉戌亥年在亥子丑。
     const rumorsJustice_Id = earth.indexOf(R16_rumorsJustice_Map[lyy.slice(1,2)])+1

    //  破碎-子午卯酉年安巳宮，寅申巳亥年安酉宮，辰戌丑未年安丑宮。
      const breakage_Id = earth.indexOf(R17_breakage_Map[lyy.slice(1,2)])+1

      // 華蓋-子辰申年在辰，丑巳酉年在丑，寅午戌年在戌，卯未亥年在未
    const artCanopy_Id = earth.indexOf(R18_artCanopy_Map[lyy.slice(1,2)])+1

    // 咸池-子辰申年在酉，丑巳酉年在午，寅午戌年在卯，卯未亥年在子
    const saltPool_Id = earth.indexOf(R19_saltPool_Map[lyy.slice(1,2)])+1

    // 三台、八座-由左輔之宮位起初一，順行至生日安三台，由右弼之宮位起初一，逆行至生日安八座。
    const threePlatforms_Id = (aux2_leftAssistant_Id + ld -1)%12 || 12
    const eightSeats_Id = (aux2_rightAssistant_Id - ld +1 +12)%12 || 12

    // 恩光、天貴-由文昌之宮位起初一，順行至生日再退一步起恩光，由文曲之宮位起初一，順行至生日再退一步起天貴。
    const graceLight_Id = (aux3_manC_Id + ld -2)%12 || 12
    const skyNobel_Id = (aux3_manK_Id + ld -2)%12 || 12

    // 天廚
    // 出生年為甲年、丁年，天廚在巳位。
    // 出生年為乙年、戊年、辛年，天廚在午位。
    // 出生年為丙年，天廚在子位。
    // 出生年為己年，天廚在申位。
    // 出生年為庚年，天廚在寅位。
    // 出生年為壬年，天廚在酉位。
    // 出生年為癸年，天廚在亥位。
    const skyChef_Id = earth.indexOf(R20_skyChef_Map[lyy.slice(0,1)])+1

    // 截路、空亡
    // 甲年、己年：生人安在「申、酉」二宮。
    // 乙年、庚年：生人安在「午、未」二宮。
    // 丙年、辛年：生人安在「辰、巳」二宮。
    // 丁年、壬年：生人安在「寅、卯」二宮。
    // 戊年、癸年：生人安在「子、丑」二宮。 
    const interceptRoad_Id = earth.indexOf(R21_interceptRoad_Map[lyy.slice(0,1)])+1
    const emptyDeath_Id = earth.indexOf(R22_emptyDeath_Map[lyy.slice(0,1)])+1

  return (
   
    <div className={`
    relative
    bg-white dark:bg-black 
    text-black dark:text-white 
    w-[30px] h-[40px]
    sm:w-[100px] sm:h-[50px]
    md:w-[30px] md:h-[30px]
    lg:w-[30px] lg:h-[40px]
    ${showGrid ? 'border border-blue-500 border-dashed' : ''}
    ${styles["box-in-hover"]}
    
    `}
    >
      {/* <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        grid grid-cols-4
        gap-x-2 gap-y-1
        place-content-center
        place-items-center
        text-[0.4rem] sm:text-sm md:text-[0.45rem] lg:text-[0.45rem]
      "> */}

       <div className="
  absolute top-0 left-1/2 -translate-x-1/2
  grid grid-cols-4
  gap-x-[0.45rem] gap-y-[0.15rem]
  place-content-center
  place-items-center
  text-[0.4rem] sm:text-sm md:text-[0.45rem] lg:text-[0.45rem]
">
         {/* <p>{mf}</p> */}
          {/* <p>{graceLight_Id}</p> */}
          {/* 台輔 */}
          {Number(boxId)===honor1_Id &&
          <span className="text-yellow-300">
            {/* <p>{boxId}-{honor1_Id}</p> */}
            <Star_click boxId={boxId} star={honor1_platformSupport} />
          </span>
          }

          {/* 封誥 */}
          {Number(boxId)===honor2_Id &&
          <span className="text-yellow-300">
            {/* <p>{boxId}-{honor1_Id}</p> */}
            <Star_click boxId={boxId} star={honor2_officialRecognition} />
          </span>
          }

         {/* 天刑 */}
         {Number(boxId)===hardship1_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship1_skyDiscipline} />
          </span>
          }

         {/* 天姚 */}
          {Number(boxId)===romance1_Id &&
          <span className="text-yellow-300">
            {/* <p>{boxId}-{honor1_Id}</p> */}
            <Star_click boxId={boxId} star={romance1_skyAllure} />
          </span>
          }

          {/* 天才 */}
          {Number(boxId)===talent1_Id &&
          <span className="text-yellow-300">
            {/* <p>{boxId}-{honor1_Id}</p> */}
            <Star_click boxId={boxId} star={talent1_skyTalent} />
          </span>
          }

          {/* 天壽 */}
           {Number(boxId)===blessing1_Id &&
          <span className="text-yellow-300">
            {/* <p>{boxId}-{honor1_Id}</p> */}
            <Star_click boxId={boxId} star={blessing1_skyAge} />
          </span>
          }

          {/* 解神 */}
          {Number(boxId)===solvingGod_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={resolution1_solvingGod} />
          </span>
          }

          {/* 天巫 */}
          {Number(boxId)===skyWitch_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={talent2_skyWitch} />
          </span>
          }

          {/* 天月 */}
          {Number(boxId)===skyMoon_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={illness1_skyMoon} />
          </span>
          }

          {/* 陰煞 */}
           {Number(boxId)===hiddenDanger_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship5_hiddenDanger} />
          </span>
          }

          {/* 截空 */}
          {Number(boxId)===severingVoid_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship6_severingVoid} />
          </span>
          }

          {/* 孤辰 */}
         {Number(boxId)===loneliness_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={life1_loneliness} />
          </span>
          }

          {/* 寡宿 */}
          {Number(boxId)===widow_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={life2_widow} />
          </span>
          }

          {/* 天官 */}
          {Number(boxId)===skyOfficer_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={blessing3_skyOfficer} />
          </span>
          }

          {/* 天福 */}
          {Number(boxId)===skyFortune_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={blessing4_skyFortune} />
          </span>
          }

          {/* 天哭 */}
          {Number(boxId)===skyCry_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship3_skyCry} />
          </span>
          }

          {/* 天虛 */}
         {Number(boxId)===skyEmpty_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship4_skyEmpty} />
          </span>
          }

          {/* 天傷 */}
          {Number(boxId)===skyWound_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship2_skyWound} />
          </span>
          }

          {/* 天使 */}
           {Number(boxId)===skyAngel_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={blessing7_skyAngel} />
          </span>
          }

          {/* 龍池 */}
         {Number(boxId)===dragonPool_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={resolution3_dragonPool} />
          </span>
          }

          {/* 鳳閣 */}
         {Number(boxId)===phoenixPavilion_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={resolution4_phoenixPavilion} />
          </span>
          }

          {/* 紅鸞 */}
          {Number(boxId)===redPhoenix_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={romance2_redPhoenix} />
          </span>
          }

          {/* 天喜 */}
          {Number(boxId)===skyJoy_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={romance3_skyJoy} />
          </span>
          }

          {/* 蜚廉 */}
          {Number(boxId)===rumorsJustice_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={resolution2_rumorsJustice} />
          </span>
          }

          {/* 破碎 */}
          {Number(boxId)===breakage_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship7_breakage} />
          </span>
          }

          {/* 華蓋 */}
          {Number(boxId)===artCanopy_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={talent3_artCanopy} />
          </span>
          }

          {/* 咸池 */}
          {Number(boxId)===saltPool_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={romance4_saltPool} />
          </span>
          }
  
          {/* 三台 */}
          {Number(boxId)===threePlatforms_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={honor3_threePlatforms} />
          </span>
          }

          {/* 八座 */}
          {Number(boxId)===eightSeats_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={honor4_eightSeats} />
          </span>
          }

          {/* 恩光 */}
          {Number(boxId)===graceLight_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={blessing5_graceLight} />
          </span>
          }

          {/* 天貴 */}
          {Number(boxId)===skyNobel_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={blessing6_skyNobel} />
          </span>
          }

          {/* 天廚 */}
          {Number(boxId)===skyChef_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={blessing2_skyChef} />
          </span>
          }

          {/* 截路 */}
          {Number(boxId)===interceptRoad_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship8_interceptRoad} />
          </span>
          }

          {/* 空亡 */}
          {Number(boxId)===emptyDeath_Id &&
          <span className="text-yellow-300">
            <Star_click boxId={boxId} star={hardship9_emptyDeath} />
          </span>
          }

          
        </div>      
    </div>
  )
}
