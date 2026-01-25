export default function HOB_to_earth(time) {
  if (!time) return ''

  const hour = Number(time.split(':')[0])

  if (hour === 23 || hour < 1) return '子'
  if (hour < 3) return '丑'
  if (hour < 5) return '寅'
  if (hour < 7) return '卯'
  if (hour < 9) return '辰'
  if (hour < 11) return '巳'
  if (hour < 13) return '午'
  if (hour < 15) return '未'
  if (hour < 17) return '申'
  if (hour < 19) return '酉'
  if (hour < 21) return '戌'
  return '亥'
}
