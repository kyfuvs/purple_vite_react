const CN_MONTH = {
  正: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6,
  七: 7, 八: 8, 九: 9, 十: 10, 冬: 11, 腊: 12
}

const MonthToNum = (cn) => CN_MONTH[cn];

export default MonthToNum;