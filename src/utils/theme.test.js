import MatchMediaMock from 'jest-matchmedia-mock'

import { getTheme, setTheme } from '../utils/theme'
import { localStorageMock } from '../../test/mocks'

let matchMedia

const DARK_MODE = 'dark'
const LIGHT_MODE = 'light'
const modes = [DARK_MODE, LIGHT_MODE]

describe('theme.js', () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock()

    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
  })

  describe('getTheme', () => {
    for (const mode of modes) {
      it(`should return ${mode} theme from media ${mode}`, () => {
        const mediaQuery = `(prefers-color-scheme: ${mode})`

        matchMedia.useMediaQuery(mediaQuery)
        getTheme()
        const result = localStorage.getItem('theme')

        expect(result).toBe(mode)
      })
    }

    it('should return light when media not found', () => {
      getTheme()
      const result = localStorage.getItem('theme')

      expect(result).toBe(LIGHT_MODE)
    })
  })

  describe('setTheme', () => {
    for (const mode of modes) {
      it(`should return ${mode} when set theme as ${mode}`, () => {
        setTheme(mode)
        const result = localStorage.getItem('theme')

        expect(result).toBe(mode)
      })
    }
  })

  afterEach(() => {
    matchMedia.clear()
    localStorage.clear()
  })
})
