import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import GeneralFront_Map from './GeneralFront_Folder/GeneralFront_Map'

export default function GeneralFront() {
    const {
        lyy,
        g1_general_Id, setG1_general_Id,
    }=usePurple()
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

// ★「生年」安將前十二星，先依據生年地支起將星，對照表如下：
// 生年地支為寅、午、戌，將星定位在午位。
// 生年地支為申、子、辰，將星定位在子位。
// 生年地支為巳、酉、丑，將星定位在酉位。
// 生年地支為亥、卯、未，將星定位在卯位。
// 不分男女陰陽，一律順行，將星>攀鞍>歲驛>息神>華蓋>劫煞>災煞>天煞>指背>咸池>月煞>亡神。
const earth = '子丑寅卯辰巳午未申酉戌亥';
const lyy_earth = lyy.slice(1,2)
setG1_general_Id(earth.indexOf(GeneralFront_Map[lyy_earth]) + 1)
  return (
    <div>
        GeneralFront
        <p>{lyy}-{lyy_earth}</p>
        <p>{g1_general_Id}</p>
    </div>
  )
}
