import { createContext, use, useContext, useEffect, useState } from "react"
import dayjs from 'dayjs'
import Box from "@mui/material/Box";
import MUI_messageBox from "../components_MUI/MUI_messageBox";
import S1_treasury_earth from "../step_Folder/step5_S1_treasury_earth/S1_treasury_earth";


// 1. Create context
const PurpleContext = createContext()

// 2. Provider
export function PurpleProvider({ children }) {
const [userId, setUserId] = useState('1');
const [dob, setDOB] = useState(dayjs('1978-06-11'))
// New User
const [nuName, setNuName] = useState('Terrie');
const [nuDOB, setNuDOB] = useState(dayjs('1978-06-11'))
const [nuHOB, setNuHOB] = useState('23:30');
const [earth_HOB, setEarth_HOB] = useState('子時');
const [nuGender, setNuGender] = useState('F');

// new or old user
const [ly, setLy] = useState(1978);
const [lm, setLm] = useState(1);
const [ld, setLd] = useState(5);
const [lh, setLh] = useState('子');
const [lyy, setLyy]= useState('丁巳');
const [animal_12, setAnimal_12]= useState('鼠');
const [station, setStation]= useState('金4局');

// Position
const [life_Index, setLife_Index]= useState(0);
const [body_Index, setBody_Index]= useState(0);
const [sky_yan, setSky_yan]= useState('壬');
const [mf, setMf]= useState('陽女');
const [big10yr_Direction, setBig10yr_Direction]= useState('antiClock');
// Sky, Earth

// Box
const [showGrid, setShowGrid]= useState(true);
// Box_L
const [new_Old_Option, setNew_Old_Option]=useState('new');
const [showForm, setShowForm]=useState(true);

// Stars
const [N1_earth, setN1_earth]= useState('戌')
const [N1_Id, setN1_Id]= useState(11)
const [S1_Id, setS1_Id]= useState(7)

const [n1, setN1]= useState('紫微')
const [n2, setN2]= useState('天機星')
// const N_stars=['紫微','天機','','太陽','武曲','天同','','','廉貞','']
// 紫微星 N1_Emperor
// 天機星 N2_Intelligence
// 太陽星 N4_Sun
// 武曲星 N5_Finance 
// 天同星 N6_Enjoyment
// 廉貞星 N9_Justice 
const [click_boxId,setClick_boxId]=useState(11)
const [n1_emperor, setN1_emperor]= useState('紫微')
const [n2_intelligence, setN2_intelligence]= useState('天機')
const [n4_sun, setN4_sun]= useState('太陽')
const [n5_finance, setN5_finance]= useState('武曲')
const [n6_enjoyment, setN6_enjoyment]= useState('天同')
const [n9_justice, setN9_justice]= useState('廉貞')

// const S_stars=['天府','太陰','貪狼','巨門','天相','天梁','七殺','','','','破軍']  
const [s1_treasury, setS1_treasury]= useState('天府')       
const [s2_moon, setS2_moon]= useState('太陰')
const [s3_greedyWolf, setS3_greedyWolf]= useState('貪狼')
const [s4_mouth, setS4_mouth]= useState('巨門')
const [s5_minister, setS5_minister]= useState('天相')
const [s6_longevity, setS6_longevity]= useState('天梁')
const [s7_sevenKiller, setS7_sevenKiller]= useState('七殺')
const [ s11_brokenArmy, setS11_brokenArmy]= useState('破軍')

// Aux1 Stars
const [aux1_lucky_Id, setAux1_lucky_Id]= useState(0)
const [aux1_goat_Id, setAux1_goat_Id]= useState(0)
const [aux1_spinner_Id, setAux1_spinner_Id]= useState(0)

const [aux1_lucky, setAux1_lucky]= useState('祿存')
const [aux1_goat, setAux1_goat]= useState('擎羊')
const [aux1_spinner, setAux1_spinner]= useState('陀羅')
const [aux1_tinGrey, setAux1_tinGrey]= useState('天魁')
const [aux1_tinYue, setAux1_tinYue]= useState('天鉞')

const [aux2_leftAssistant, setAux2_leftAssistant]=useState('左輔')
const [aux2_rightAssistant, setAux2_rightAssistant]=useState('右弼')
const [aux2_skyHorse, setAux2_skyHorse]=useState('天馬')
const [aux2_leftAssistant_Id, setAux2_leftAssistant_Id]=useState(1)
const [aux2_rightAssistant_Id, setAux2_rightAssistant_Id]=useState(1)

const [aux3_manC, setAux3_manC]=useState('文昌')
const [aux3_manK, setAux3_manK]=useState('文曲')
const [aux3_manC_Id, setAux3_manC_Id]=useState(1)
const [aux3_manK_Id, setAux3_manK_Id]=useState(1)
const [aux3_earthEmpty, setAux3_earthEmpty]=useState('地空')
const [aux3_earthThief, setAux3_earthThief]=useState('地劫')

const[aux4_fire_Id, setAux4_fire_Id]=useState(0)
const[aux4_bell_Id, setAux4_bell_Id]=useState(0)
const [aux4_fire, setAux4_fire]=useState('火星')
const [aux4_bell, setAux4_bell]=useState('鈴星')

// Change4_star_by_lyy_sky
const[change4, setChange4]=useState('貪陰弼機')

// Honor star
const [honor1_platformSupport, setHonor1_platformSupport]=useState('台輔')
const [honor2_officialRecognition, setHonor2_officialRecognition]=useState('封誥')  
const[honor3_threePlatforms, setHonor3_threePlatforms]=useState('三台')
const[honor4_eightSeats, setHonor4_eightSeats]=useState('八座')

// Hardship
const [hardship1_skyDiscipline, setHardship1_skyDiscipline]=useState('天刑')
const [hardship2_skyWound, setHardship2_skyWound]=useState('天傷')
const [hardship3_skyCry, setHardship3_skyCry]=useState('天哭')
const [hardship4_skyEmpty, setHardship4_skyEmpty]=useState('天虛')
const [hardship5_hiddenDanger, setHardship5_hiddenDanger]=useState('陰煞')
const [hardship6_severingVoid, setHardship6_severingVoid]=useState('截空')
const [hardship7_breakage, setHardship7_breakage]=useState('破碎')
const [hardship8_interceptRoad, setHardship8_interceptRoad]=useState('截路')
const [hardship9_emptyDeath, setHardship9_emptyDeath]=useState('空亡')



 // Romance star
 const [romance1_skyAllure, setRomance1_skyAllure]=useState('天姚')   
 const [romance2_redPhoenix, setRomance2_redPhoenix]=useState('紅鸞')
 const [romance3_skyJoy, setRomance3_skyJoy]=useState('天喜')
 const [romance4_saltPool, setRomance4_saltPool]=useState('咸池')

//  Talent star
const [talent1_skyTalent, setTalent1_skyTalent]=useState('天才')
const [talent2_skyWitch, setTalent2_skyWitch]=useState('天巫')
const [talent3_artCanopy, setTalent3_artCanopy]=useState('華蓋')

// Blessing
const [blessing1_skyAge, setBlessing1_skyAge]=useState('天壽')
const [blessing2_skyChef, setBlessing2_skyChef]=useState('天廚')
const [blessing3_skyOfficer, setBlessing3_skyOfficer]=useState('天官')
const [blessing4_skyFortune, setBlessing4_skyFortune]=useState('天福')
const [blessing5_graceLight, setBlessing5_graceLight]=useState('恩光')
const [blessing6_skyNobel, setBlessing6_skyNobel]=useState('天貴')
const [blessing7_skyAngel, setBlessing7_skyAngel]=useState('天使')

 // Life 
const[life1_loneliness, setLife1_loneliness]=useState('孤辰')
const[life2_widow, seLife2_widow]=useState('寡宿')


// Resolution
const [resolution1_solvingGod, setResolution_solvingGod]=useState('解神')
const [resolution2_rumorsJustice, setResolution2_rumorsJustice]=useState('蜚廉')
const [resolution3_dragonPool, setResolution3_dragonPool]=useState('龍池')
const [resolution4_phoenixPavilion, setResolution4_phoenixPavilion]=useState('鳳閣')

// Illness
const [illness1_skyMoon, setIllness1_skyMoon]=useState('天月')

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
const[s1_Birth_Id, setS1_Birth_Id]=useState(0)

const[s1_Birth, setS1_Birth]=useState('長生')
const[s2_Bathing, setS2_Bathing]=useState('沐浴')
const[s3_Dressing, setS3_Dressing]=useState('冠帶')  
const[s4_Official, setS4_Official]=useState('臨官')
const[s5_Prosperity, setS5_Prosperity]=useState('帝旺')
const[s6_Weakening, setS6_Weakening]=useState('衰')
const[s7_Sickness, setS7_Sickness]=useState('病')
const[s8_Death, setS8_Death]=useState('死')
const[s9_Tomb, setS9_Tomb]=useState('墓')
const[s10_Extinction, setS10_Extinction]=useState('絕')
const[s11_Fetus, setS11_Fetus]=useState('胎')
const[s12_Nourishment, setS12_Nourishment]=useState('養')

// Dr12 Stars (博士十二神)      
const[d1_Doctor, setD1_Doctor]=useState('博士')
const[d2_Hercules, setD2_Hercules]=useState('力士')
const[d3_GreenDragon, setD3_GreenDragon]=useState('青龍')
const[d4_MinorExpenditure, setD4_MinorExpenditure]=useState('小耗')
const[d5_General, setD5_General]=useState('將軍')
const[d6_RoyalDocument, setD6_RoyalDocument]=useState('奏書')
const[d7_FlyingJustice, setD7_FlyingJustice]=useState('飛廉')
const[d8_JoyGod, setD8_JoyGod]=useState('喜神')
const[d9_SicknessTalisman, setD9_SicknessTalisman]=useState('病符')
const[d10_MajorExpenditure, setD10_MajorExpenditure]=useState('大耗')
const[d11_HiddenSoldier, setD11_HiddenSoldier]=useState('伏兵')
const[d12_GovernmentOffice, setD12_GovernmentOffice]=useState('官府')
  
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
        const[a1_yearLeader, setA1_yearLeader]=useState('歲建')
        const[a2_gloomAir, setA2_gloomAir]=useState('晦氣')
        const[a3_funeralGate, setA3_funeralGate]=useState('喪門')
        const[a4_stuckRope, setA4_stuckRope]=useState('貫索')
        const[a5_officialTalisman, setA5_officialTalisman]=useState('官符')
        const[a6_minorLoss, setA6_minorLoss]=useState('小耗')
        const[a7_majorLoss, setA7_majorLoss]=useState('大耗')
        const[a8_dragonVirtue, setA8_dragonVirtue]=useState('龍德')
        const[a9_whiteTiger, setA9_whiteTiger]=useState('白虎')
        const[a10_skyVirtue, setA10_skyVirtue]=useState('天德')
        const[a11_mourningGuest, setA11_mourningGuest]=useState('弔客')
        const[a12_illnessTalisman, setA12_illnessTalisman]=useState('病符')

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
        const[g1_general_Id, setG1_general_Id]=useState(0)
        const[g1_general, setG1_general]=useState('將星')
        const[g2_mountingSaddle, setG2_mountingSaddle]=useState('攀鞍')
        const[g3_yearTravelingHorse, setG3_yearTravelingHorse]=useState('歲驛')
        const[g4_restingSpirit, setG4_restingSpirit]=useState('息神')
        const[g5_elegantCanopy, setG5_elegantCanopy]=useState('華蓋')
        const[g6_robberySuddenLoss, setG6_robberySuddenLoss]=useState('劫煞')
        const[g7_disasterSuddenLoss, setG7_disasterSuddenLoss]=useState('災煞')
        const[g8_skySuddenLoss, setG8_skySuddenLoss]=useState('天煞')
        const[g9_pointingBack, setG9_pointingBack]=useState('指背')
        const[g10_saltPool, setG10_saltPool]=useState('咸池')
        const[g11_monthlySuddenLoss, setG11_monthlySuddenLoss]=useState('月煞')
        const[g12_deadSpirit, setG12_deadSpirit]=useState('亡神')
       
// MUI_messageBox
const [msgOpen, setMsgOpen] = useState(false)
const [msgText, setMsgText] = useState('')
//MsgBox
const [showMsgBox, setShowMsgBox]=useState(false)
const [msgBoxText, setMsgBoxText]=useState('testing')
const [starDetail, setStarDetail]=useState('starDetail')
const [clickStar,setClickStar]=useState('')


  

  return (
    <PurpleContext.Provider 
    value={{
        userId, setUserId,
        dob, setDOB,
        // new user
        nuName, setNuName,
        nuDOB, setNuDOB,
        nuHOB, setNuHOB,
        earth_HOB, setEarth_HOB,
        nuGender, setNuGender,

        // new or old user
        animal_12, setAnimal_12,
        ly, setLy,
        lm, setLm,
        ld, setLd,
        lh, setLh,
        lyy, setLyy,
        station, setStation,

        // position
        life_Index, setLife_Index,
        body_Index, setBody_Index,
        sky_yan, setSky_yan,
        mf, setMf,
        big10yr_Direction, setBig10yr_Direction,

        // sky, earth
      
        // box
        showGrid, setShowGrid,

        // box_L
        new_Old_Option, setNew_Old_Option,
        showForm, setShowForm,

        // star
        N1_earth, setN1_earth,
        N1_Id, setN1_Id,
        S1_Id, setS1_Id,
        n1, setN1,
        n2, setN2,
        // const N_stars=['紫微','天機','','太陽','武曲','天同','','','廉貞','']
        // 紫微星 N1_Emperor
        // 天機星 N2_Intelligence
        // 太陽星 N4_Sun
        // 武曲星 N5_Finance 
        // 天同星 N6_Enjoyment
        // 廉貞星 N9_Justice
        click_boxId,setClick_boxId,
        n1_emperor, setN1_emperor,
        n2_intelligence, setN2_intelligence,
        n4_sun, setN4_sun,
        n5_finance, setN5_finance,
        n6_enjoyment, setN6_enjoyment,
        n9_justice, setN9_justice,

        // const S_stars=['天府','太陰','貪狼','巨門','天相','天梁','七殺','','','','破軍']      
        // 天府星 s1_treasury
        // 太陰星 s2_moon
        // 貪狼星 s3_greedyWolf
        // 巨門星 s4_mouth
        // 天相星 s5_minister
        // 天梁星 s6_longevity
        // 七殺星 s7_sevenKiller 
        // 破軍星 s11_brokenArmy 
        s1_treasury, setS1_treasury,
        s2_moon, setS2_moon,
        s3_greedyWolf, setS3_greedyWolf,
        s4_mouth, setS4_mouth,
        s5_minister, setS5_minister,
        s6_longevity, setS6_longevity,
        s7_sevenKiller, setS7_sevenKiller,
        s11_brokenArmy, setS11_brokenArmy,
        
        // Aux1 star
        aux1_lucky_Id, setAux1_lucky_Id,
        aux1_goat_Id, setAux1_goat_Id,
        aux1_spinner_Id, setAux1_spinner_Id,
        
        aux1_lucky, setAux1_lucky,
        aux1_goat, setAux1_goat,
        aux1_spinner, setAux1_spinner,
        aux1_tinGrey, setAux1_tinGrey,
        aux1_tinYue, setAux1_tinYue,

        // Aux2 star
        aux2_leftAssistant, setAux2_leftAssistant,
        aux2_rightAssistant, setAux2_rightAssistant,
        aux2_leftAssistant_Id, setAux2_leftAssistant_Id,
        aux2_rightAssistant_Id, setAux2_rightAssistant_Id,
        aux2_skyHorse, setAux2_skyHorse,

        // Aux3 star
        aux3_manC, setAux3_manC,
        aux3_manK, setAux3_manK,
        aux3_manC_Id, setAux3_manC_Id,
        aux3_manK_Id, setAux3_manK_Id,
        aux3_earthEmpty, setAux3_earthEmpty,
        aux3_earthThief, setAux3_earthThief,

        // Aux4 star 
        aux4_fire_Id, setAux4_fire_Id,
        aux4_bell_Id, setAux4_bell_Id,
        aux4_fire, setAux4_fire,
        aux4_bell, setAux4_bell,
        
        // Change4_star_by_lyy_sky
        change4, setChange4,
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
        // 截路、空亡

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
        // 龍池 - dragonPool
        // 鳳閣 - phoenixPavilion 
        resolution1_solvingGod, setResolution_solvingGod,
        resolution2_rumorsJustice, setResolution2_rumorsJustice,
        resolution3_dragonPool, setResolution3_dragonPool,
        resolution4_phoenixPavilion, setResolution4_phoenixPavilion,
        
        // Illness
        // 天月 → skyMoon
        illness1_skyMoon, setIllness1_skyMoon,

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
        
        // MUI_messageBox
        msgOpen, setMsgOpen,
        msgText, setMsgText,
        // MsgBox
        showMsgBox, setShowMsgBox,
        msgBoxText, setMsgBoxText,
        starDetail, setStarDetail,
        clickStar,setClickStar,

    //   yik, 
    //   showYikTable, setShowYikTable,
    //   showYikDetail, setShowYikDetail,
    //   yikId, setYikId,
    //   option, setOption
      }}>
      {children}
    </PurpleContext.Provider>
  )
}

// 3. Custom hook (best practice)
export function usePurple() {
  return useContext(PurpleContext)
}
