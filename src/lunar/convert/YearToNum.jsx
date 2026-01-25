const CN_NUM = {
  〇: '0', 一: '1', 二: '2', 三: '3', 四: '4',
  五: '5', 六: '6', 七: '7', 八: '8', 九: '9'
}

const YearToNum = (cn) =>
  Number([...cn].map(c => CN_NUM[c]).join(''))


export default YearToNum;