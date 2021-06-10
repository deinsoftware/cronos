const DARK_MODE = 'dark'
const LIGHT_MODE = 'light'

export const getTheme = () => {
  const savedTheme = localStorage.getItem('theme')

  const userPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const current = savedTheme ?? (userPrefersDark ? DARK_MODE : LIGHT_MODE)

  setTheme(current)
}

export const setTheme = (mode) => {
  const html = document.querySelector('html')

  html.dataset.theme = mode
  localStorage.setItem('theme', mode)
}
