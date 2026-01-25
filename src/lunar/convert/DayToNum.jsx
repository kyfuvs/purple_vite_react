const DayToNum = (cn) => {
  // const map = { 初: 0, 十: 10, 廿: 20, 三: 30 }
  const map = { 初: 0, 十: 10, 廿: 20, 卅: 30 }
  const nums = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5,
                 六: 6, 七: 7, 八: 8, 九: 9 }

  if (cn === '初十') return 10
  if (cn === '二十') return 20
  if (cn === '三十') return 30

  let total = 0
  for (const c of cn) {
    if (map[c]) total += map[c]
    if (nums[c]) total += nums[c]
  }
  return total
}


export default DayToNum;