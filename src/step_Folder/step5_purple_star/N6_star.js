import React from 'react'
import { usePurple } from '../../context/PurpleContext'
import Row_water from './D30_Folder/Row_water'
import Row_wood from './D30_Folder/Row_wood'
import Row_gold from './D30_Folder/Row_gold'
import Row_earth from './D30_Folder/Row_earth'
import Row_fire from './D30_Folder/Row_fire'

export default function N6_star(station,ld) {
    // const {station,ld}= usePurple()

    // let result = 'null'
    switch(station) {
        case '水2局': return Row_water(ld);
        case '木3局': return Row_wood(ld);
        case '金4局': return Row_gold(ld);
        case '土5局': return Row_earth(ld);
        case '火6局': return Row_fire(ld);
        default: return 'null';
    }
    // return result
  
}
