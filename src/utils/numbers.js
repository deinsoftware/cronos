export const randomBetween = (min = 0, max) => {
  const random = Math.random()
  const result = random * (max - min + 1) + min / 2
  return Math.round(result)
}

export const randomPlaces = (decimalPlaces = 1) => {
  const min = decimalPlaces === 1 ? 0 : decimalPlaces
  const max = decimalPlaces * 10 - 1
  const result = randomBetween(min, max)
  return result
}

export const formatNumber = (value) => {
  const result = new Intl.NumberFormat(process.env.REACT_APP_LOCALE).format(
    value
  )
  return result
}
