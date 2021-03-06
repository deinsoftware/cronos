export const randomNumberBetween = (min, max) => {
  if (!min) {
    min = 0
  }

  const random = Math.random()
  const result = random * (max - min) + min / 2

  return Math.round(result)
}

export const randomPlaces = (decimalPlaces = 1) => {
  const min = decimalPlaces === 1 ? 0 : decimalPlaces
  const max = decimalPlaces * 10 - 1

  return randomNumberBetween(min, max)
}

export const formatCardinal = (value) => {
  return new Intl.NumberFormat(process.env.REACT_APP_LOCALE).format(value)
}

export const formatOrdinal = (value) => {
  const suffixes = {
    1: 'st',
    2: 'nd',
    3: 'rd',
  }
  const defaultSuffix = 'th'

  let result = new Intl.NumberFormat(process.env.REACT_APP_LOCALE).format(value)

  result += suffixes[value] || defaultSuffix

  return result
}
