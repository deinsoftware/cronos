import dateToWords from 'date-to-words'

export const isValidDate = (date) => {
  if (!date) {
    return false
  }
  return !isNaN(date.valueOf())
}

export const addYear = (amount = 1, date = new Date()) => {
  if (!amount || isNaN(amount)) {
    throw new TypeError('Invalid amount parameters')
  }
  if (!date || !isValidDate(date)) {
    throw new TypeError('Invalid date parameters')
  }

  const year = date.getFullYear() + amount
  return new Date(date.setFullYear(year))
}

export const getYear = (date) => {
  if (!date || !isValidDate(date)) {
    throw new TypeError('Invalid date parameters')
  }

  return date.getFullYear()
}

export const getDateToWords = (date) => {
  if (!date || !isValidDate(date)) {
    throw new TypeError('Invalid date parameters')
  }

  const words = dateToWords(date)
  return words
}

export const getYearToWords = (date) => {
  if (!date || !isValidDate(date)) {
    throw new TypeError('Invalid date parameters')
  }

  const words = dateToWords(date)
  return words.split(',')[1].trim()
}

export const randomDateBetween = (min, max = new Date()) => {
  if (!isValidDate(min) || !isValidDate(max)) {
    throw new TypeError('Invalid date parameters')
  }

  return new Date(
    min.getTime() + Math.random() * (max.getTime() - min.getTime())
  )
}

export const formatDate = (value) => {
  return new Intl.DateTimeFormat('en-US').format(value)
}
