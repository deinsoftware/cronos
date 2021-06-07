import timeInWords from 'time-in-words'

import { isValidDate } from './date'
import { randomNumberBetween } from './numbers'

const HOUR_RANGE = { MIN: 1, MAX: 12 }
const MINUTE_RANGE = { MIN: 0, MAX: 60 }

export const isValidHour = (hour) => {
  if (!hour || Number.isNaN(hour)) {
    return false
  } else {
    return hour >= HOUR_RANGE.MIN && hour <= HOUR_RANGE.MAX
  }
}

export const isValidMinute = (minutes) => {
  if (!(minutes || minutes === 0) || Number.isNaN(minutes)) {
    return false
  } else {
    return minutes >= MINUTE_RANGE.MIN && minutes <= MINUTE_RANGE.MAX
  }
}

export const getTimeToWords = ({ hour, minutes }) => {
  if (!isValidDate(hour)) {
    throw new TypeError(`Invalid hour parameter: ${hour}`)
  }
  if (!isValidMinute(minutes)) {
    throw new TypeError(`Invalid minutes parameter: ${minutes}`)
  }

  return timeInWords(hour, minutes)
}

export const randomTime = () => {
  const hour = randomNumberBetween(HOUR_RANGE.MIN, HOUR_RANGE.MAX)
  const minutes = randomNumberBetween(MINUTE_RANGE.MIN, MINUTE_RANGE.MAX)

  return { hour, minutes }
}
