import React, {useEffect} from 'react'
import { usePurple } from '../../context/PurpleContext'
import B1_n1_emperor_Map from './brightness_Folder/B1_n1_emperor_Map'
import B2_n2_intelligence_Map from './brightness_Folder/B2_n2_intelligence_Map'
import B3_n4_sun_Map from './brightness_Folder/B3_n4_sun_Map'
import B4_n5_finance_Map from './brightness_Folder/B4_n5_finance_Map'
import B5_n6_enjoyment_Map from './brightness_Folder/B5_n6_enjoyment_Map'
import B6_n9_justice_Map from './brightness_Folder/B6_n9_justice_Map'
import B7_s1_treasury_Map from './brightness_Folder/B7_s1_treasury_Map'
import B8_s2_moon_Map from './brightness_Folder/B8_s2_moon_Map'
import B9_s3_greedyWolf_Map from './brightness_Folder/B9_s3_greedyWolf_Map'
import B10_s4_mouth_Map from './brightness_Folder/B10_s4_mouth_Map'
import B11_s5_minister_Map from './brightness_Folder/B11_s5_minister_Map'
import B12_s6_longevity_Map from './brightness_Folder/B12_s6_longevity_Map'
import B13_s7_sevenKiller_Map from './brightness_Folder/B13_s7_sevenKiller_Map'
import B14_s11_brokenArmy_Map from './brightness_Folder/B14_s11_brokenArmy_Map'
import B15_aux3_manC_Map from './brightness_Folder/B15_aux3_manC_Map'
import B16_aux3_manK_Map from './brightness_Folder/B16_aux3_manK_Map'
import B17_aux4_fire_Map from './brightness_Folder/B17_aux4_fire_Map'
import B18_aux4_bell_Map from './brightness_Folder/B18_aux4_bell_Map'
import B19_aux1_lucky_Map from './brightness_Folder/B19_aux1_lucky_Map'
import B20_aux1_goat_Map from './brightness_Folder/B20_aux1_goat_Map'
import B21_aux1_spinner_Map from './brightness_Folder/B21_aux1_spinner_Map'


export default function Brightness() {
    const{
        box_index, setBox_index,
        N1_Id, setN1_Id,
        S1_Id, setS1_Id,
        n1_emperor, setN1_emperor,
        n2_intelligence, setN2_intelligence,
        n4_sun, setN4_sun,
        n5_finance, setN5_finance,
        n6_enjoyment, setN6_enjoyment,
        n9_justice, setN9_justice,

        s1_treasury, setS1_treasury,
        s2_moon, setS2_moon,
        s3_greedyWolf, setS3_greedyWolf,
        s4_mouth, setS4_mouth,
        s5_minister, setS5_minister,
        s6_longevity, setS6_longevity,
        s7_sevenKiller, setS7_sevenKiller,
        s11_brokenArmy, setS11_brokenArmy,

        aux1_lucky_Id, setAux1_lucky_Id,
        aux1_goat_Id, setAux1_goat_Id,
        aux1_spinner_Id, setAux1_spinner_Id,
        aux1_lucky, setAux1_lucky,
        aux1_goat, setAux1_goat,
        aux1_spinner, setAux1_spinner,

        aux3_manC, setAux3_manC,
        aux3_manK, setAux3_manK,
        aux3_manC_Id, setAux3_manC_Id,
        aux3_manK_Id, setAux3_manK_Id,

        // Aux4 star 
        aux4_fire_Id, setAux4_fire_Id,
        aux4_bell_Id, setAux4_bell_Id,
        aux4_fire, setAux4_fire,
        aux4_bell, setAux4_bell,

    }=usePurple()
    const earth = '子丑寅卯辰巳午未申酉戌亥';
    const n1 = earth.charAt((N1_Id-1 +12)%12);
    const n2 = earth.charAt((N1_Id-2 +12)%12);
    const n4 = earth.charAt((N1_Id-4 +12)%12);
    const n5 = earth.charAt((N1_Id-5 +12)%12);
    const n6 = earth.charAt((N1_Id-6 +12)%12);
    const n9 = earth.charAt((N1_Id-9 +12)%12);

    // const n1_emperor_brightness = B1_n1_emperor_Map[n1]
     const s1 = earth.charAt((S1_Id-1 +12)%12);
     const s2 = earth.charAt((S1_Id-1+1 +12)%12);
     const s3 = earth.charAt((S1_Id-1+2 +12)%12);
     const s4 = earth.charAt((S1_Id-1+3 +12)%12);
     const s5 = earth.charAt((S1_Id-1+4 +12)%12);
     const s6 = earth.charAt((S1_Id-1+5 +12)%12);
     const s7 = earth.charAt((S1_Id-1+6 +12)%12);
     const s11 = earth.charAt((S1_Id-1+10 +12)%12); 

     const manC_earth = earth.charAt(aux3_manC_Id-1);
     const manK_earth = earth.charAt(aux3_manK_Id-1);

     const [aux4_fire_star, aux4_fire_earth] = (aux4_fire ?? '').split('-')
     const [aux4_bell_star, aux4_bell_earth] = (aux4_bell ?? '').split('-')
     const aux4_fire_brightness = B17_aux4_fire_Map[earth.charAt(aux4_fire_Id-1)]
     const aux4_bell_brightness = B18_aux4_bell_Map[earth.charAt(aux4_bell_Id-1)]

     const aux1_lucky_brightness = B19_aux1_lucky_Map[earth.charAt(aux1_lucky_Id-1)]
     const aux1_goat_brightness = B20_aux1_goat_Map[earth.charAt(aux1_goat_Id-1)]
     const aux1_spinner_brightness = B21_aux1_spinner_Map[earth.charAt(aux1_spinner_Id-1)]

        useEffect(() => {
            // setN1_emperor(`${n1_emperor.split('-')[0]}---${n1_emperor.split('-')[3]}-${n1_emperor_brightness}`)
            setN1_emperor(`${n1_emperor.split('-')[0]}---${n1_emperor.split('-')[3]}-${B1_n1_emperor_Map[n1]}`)
            setN2_intelligence(`${n2_intelligence.split('-')[0]}---${n2_intelligence.split('-')[3]}-${B2_n2_intelligence_Map[n2]}`)
            setN4_sun(`${n4_sun.split('-')[0]}---${n4_sun.split('-')[3]}-${B3_n4_sun_Map[n4]}`)
            setN5_finance(`${n5_finance.split('-')[0]}---${n5_finance.split('-')[3]}-${B4_n5_finance_Map[n5]}`)
            setN6_enjoyment(`${n6_enjoyment.split('-')[0]}---${n6_enjoyment.split('-')[3]}-${B5_n6_enjoyment_Map[n6]}`)
            setN9_justice(`${n9_justice.split('-')[0]}---${n9_justice.split('-')[3]}-${B6_n9_justice_Map[n9]}`)

            setS1_treasury(`${s1_treasury.split('-')[0]}---${s1_treasury.split('-')[3]}-${B7_s1_treasury_Map[s1]}`)
            setS2_moon(`${s2_moon.split('-')[0]}---${s2_moon.split('-')[3]}-${B8_s2_moon_Map[s2]}`)
            setS3_greedyWolf(`${s3_greedyWolf.split('-')[0]}---${s3_greedyWolf.split('-')[3]}-${B9_s3_greedyWolf_Map[s3]}`)
            setS4_mouth(`${s4_mouth.split('-')[0]}---${s4_mouth.split('-')[3]}-${B10_s4_mouth_Map[s4]}`)
            setS5_minister(`${s5_minister.split('-')[0]}---${s5_minister.split('-')[3]}-${B11_s5_minister_Map[s5]}`)
            setS6_longevity(`${s6_longevity.split('-')[0]}---${s6_longevity.split('-')[3]}-${B12_s6_longevity_Map[s6]}`)
            setS7_sevenKiller(`${s7_sevenKiller.split('-')[0]}---${s7_sevenKiller.split('-')[3]}-${B13_s7_sevenKiller_Map[s7]}`)
            setS11_brokenArmy(`${s11_brokenArmy.split('-')[0]}---${s11_brokenArmy.split('-')[3]}-${B14_s11_brokenArmy_Map[s11]}`)

            setAux3_manC(`${aux3_manC.split('-')[0]}---${aux3_manC.split('-')[3]}-${B15_aux3_manC_Map[manC_earth]}`)
            setAux3_manK(`${aux3_manK.split('-')[0]}---${aux3_manK.split('-')[3]}-${B16_aux3_manK_Map[manK_earth]}`)

            setAux4_fire(`${aux4_fire.split('-')[0]}----${aux4_fire_brightness}`)
            setAux4_bell(`${aux4_bell.split('-')[0]}----${aux4_bell_brightness}`)

            setAux1_lucky(`${aux1_lucky.split('-')[0]}----${aux1_lucky_brightness}`)
            setAux1_goat(`${aux1_goat.split('-')[0]}----${aux1_goat_brightness}`)
            setAux1_spinner(`${aux1_spinner.split('-')[0]}----${aux1_spinner_brightness}`)
           
        }, [N1_Id, S1_Id])
      
    // setN1_emperor(n1_emperor+'-X')
  return (
    <div>
        Brightness
        {/* <p>{N1_Id}</p>
        <p>{((N1_Id-1 +12)%12)+1}-n1:{n1}-{n1_emperor}</p>
        <p>{((N1_Id-2 +12)%12)+1}-n2:{n2}-{n2_intelligence}</p>
        <p>{((N1_Id-4 +12)%12)+1}-n4:{n4}-{n4_sun}</p>
        <p>{((N1_Id-5 +12)%12)+1}-n5:{n5}-{n5_finance}</p>
        <p>{((N1_Id-6 +12)%12)+1}-n6:{n6}-{n6_enjoyment}</p>
        <p>{((N1_Id-9 +12)%12)+1}-n9:{n9}-{n9_justice}</p>
        <p>{n1_emperor}</p> */}
        
        {/* <p>{S1_Id}</p>
         <p>{((S1_Id-1 +12)%12)+1}-s1:{s1}-{s1_treasury}</p>
         <p>{((S1_Id-1+1 +12)%12)+1}-s2:{s2}-{s2_moon}</p>
         <p>{((S1_Id-1+2 +12)%12)+1}-s3:{s3}-{s3_greedyWolf}</p>
         <p>{((S1_Id-1+3 +12)%12)+1}-s4:{s4}-{s4_mouth}</p>
         <p>{((S1_Id-1+4 +12)%12)+1}-s5:{s5}-{s5_minister}</p>
         <p>{((S1_Id-1+5 +12)%12)+1}-s6:{s6}-{s6_longevity}</p>
         <p>{((S1_Id-1+6 +12)%12)+1}-s7:{s7}-{s7_sevenKiller}</p>
         <p>{((S1_Id-1+10 +12)%12)+1}-s11:{s11}-{s11_brokenArmy}</p>  */}

         {/* <p>{aux3_manC_Id}-{manC_earth} {aux3_manC}</p>
         <p>{aux3_manK_Id}-{manK_earth} {aux3_manK}</p> */}
         {/* <p>{aux4_fire_brightness} {aux4_fire}</p>
         <p>{aux4_bell_Id}-{aux4_bell_brightness} {aux4_bell}</p> */}
         <p>{aux1_lucky_Id}-{aux1_lucky_brightness} {aux1_lucky}</p>
         <p>{aux1_goat_Id}-{aux1_goat_brightness} {aux1_goat}</p>
         <p>{aux1_spinner_Id}-{aux1_spinner_brightness} {aux1_spinner}</p>
    </div>
  )
}
