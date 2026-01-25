const SCToTC = (animal_sc) => {
  const map = {
    鼠: '鼠',
    牛: '牛',
    虎: '虎',
    兔: '兔',
    龙: '龍',
    蛇: '蛇',
    马: '馬',
    羊: '羊',
    猴: '猴',
    鸡: '雞', // ⭐ only difference
    狗: '狗',
    猪: '豬'
  }

  return map[animal_sc] || animal_sc
}

export default SCToTC
