const { capitalize, compareText } = require('./text')

describe('text.js', () => {
  describe('compare', () => {
    describe('compareText', () => {
      test('should return true when text are equal', () => {
        const first = 'Test'
        const second = 'test'
        const result = compareText(first, second)
        expect(result).toBe(true)
      })

      test('should return false when text are different', () => {
        const first = 'Test'
        const second = 'Tests'
        const result = compareText(first, second)
        expect(result).toBe(false)
      })
    })
  })

  describe('format', () => {
    describe('capitalize', () => {
      test('should return the word capitalized', () => {
        const text = 'test'
        const result = capitalize(text)
        expect(result).toBe('Test')
      })

      test('should return each word capitalized', () => {
        const text = 'test multiple words'
        const result = capitalize(text)
        expect(result).toBe('Test Multiple Words')
      })

      test('should return empty when has no parameters', () => {
        const result = capitalize()
        expect(result).toBe('')
      })
    })
  })
})
