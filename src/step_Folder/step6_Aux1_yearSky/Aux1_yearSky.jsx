import React,{useEffect} from 'react'
import { usePurple } from '../../context/PurpleContext'
import R1_Lucky_Map from './Aux1_Map/R1_Lucky_Map'
import R2_Goat_Map from './Aux1_Map/R2_Goat_Map'
import R3_Spinner_Map from './Aux1_Map/R3_Spinner_Map'
import R4_TinGrey_Map from './Aux1_Map/R4_TinGrey_Map'
import R5_TinYue_Map from './Aux1_Map/R5_TinYue_Map'

export default function Aux1_yearSky() {
    const{
        lyy,
        aux1_lucky_Id, setAux1_lucky_Id,
        aux1_goat_Id, setAux1_goat_Id,
        aux1_spinner_Id, setAux1_spinner_Id,
        aux1_lucky, setAux1_lucky,
        aux1_goat, setAux1_goat,
        aux1_spinner, setAux1_spinner,
        aux1_tinGrey, setAux1_tinGrey,
        aux1_tinYue, setAux1_tinYue
    }=usePurple()
    const earth = '子丑寅卯辰巳午未申酉戌亥';
    const lyy_sky = lyy.slice(0,1)
    const [lucky_star,lucky_earth] = (R1_Lucky_Map[lyy_sky] ?? '').split('-')
    const [goat_star,goat_earth] = (R2_Goat_Map[lyy_sky] ?? '').split('-')
    const [spinner_star,spinner_earth] = (R3_Spinner_Map[lyy_sky] ?? '').split('-')

    useEffect(() => {
    setAux1_lucky_Id(earth.indexOf(lucky_earth)+1)
    setAux1_goat_Id(earth.indexOf(goat_earth)+1)
    setAux1_spinner_Id(earth.indexOf(spinner_earth)+1)
    }, [lyy])
    // setAux1_lucky(R1_Lucky_Map[lyy_sky])
    // const [lucky_name, lucky_earth] = aux1_lucky.split('-')
    // setAux1_lucky_Id(earth.indexOf(lucky_earth)+1)
    // setAux1_goat(R2_Goat_Map[lyy_sky])
    // setAux1_spinner(R3_Spinner_Map[lyy_sky])
    // setAux1_tinGrey(R4_TinGrey_Map[lyy_sky])
    // setAux1_tinYue(R5_TinYue_Map[lyy_sky])
  return (
    <div>
        Aux1_yearSky
        {/* <p>{lyy}-{lyy_sky}</p>
        <p>{aux1_lucky}</p>
        <p>{lucky_earth}-{aux1_lucky_Id}</p>
        <p>{aux1_goat}</p>
        <p>{aux1_spinner}</p>
        <p>{aux1_tinGrey}</p>
        <p>{aux1_tinYue}</p> */}
        <p>lucky:{aux1_lucky_Id}-{lucky_earth}</p>
        <p>goat:{aux1_goat_Id}-{goat_earth}</p>
        <p>spinner:{aux1_spinner_Id}-{spinner_earth}</p>
    </div>
  )
}
