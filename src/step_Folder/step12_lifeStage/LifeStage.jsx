// 二、操作方式：
// ★「生年」安長生十二星，依據五行局而定出長生位置，
// 水二局長生在申，
// 木三局長生在亥，
// 金四局長生在巳，
// 土五局長生在申，
// 火六局長生在寅，
// 在依據生年地支陰(偶數)陽(奇數)來分別陽男陰女順行，陰男陽女逆行，
// 在依序安：長生>沐浴>冠帶>臨官>帝旺>衰>病>死>墓>絕>胎>養。

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
import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import Birth_Map from './lifeStage_Folder/Birth_Map'

export default function LifeStage() {
    const {
        station,life_Index,
        s1_Birth_Id, setS1_Birth_Id,
    } = usePurple();
   const earth = '子丑寅卯辰巳午未申酉戌亥';
   const birth_earth = Birth_Map[station]
   setS1_Birth_Id(earth.indexOf(birth_earth)+1)

  return (
    <div>
        LifeStage
        <p> {station}</p> 
        <p> {birth_earth}</p>
        <p> {s1_Birth_Id}</p>
    </div>
  )
}
