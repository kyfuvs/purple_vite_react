import dayjs from 'dayjs'

export default function Adjust_DOB(date, time) {
  const hour = Number(time.split(':')[0])

  if (hour === 23) {
    return dayjs(date).add(1, 'day')
  }

  return dayjs(date)
}
