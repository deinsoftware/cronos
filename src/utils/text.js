export const compareText = (first, second) => {
  const cleanFirst = first.trim().toLowerCase()
  const cleanSecond = second.trim().toLowerCase()

  return cleanFirst === cleanSecond
}

export const capitalize = (text) => {
  if (!text) return ''

  const words = text.split(' ')

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
