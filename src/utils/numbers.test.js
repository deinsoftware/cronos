const { randomBetween, randomPlaces, formatNumber } = require('./numbers')

describe('numbers.js', () => {
  describe('random', () => {
    beforeEach(() => {
      const randomValue = 0.5
      jest.spyOn(global.Math, 'random').mockReturnValue(randomValue)
    })

    describe('randomNumber', () => {
      test('should return the value in the middle of the range', () => {
        const min = 0
        const max = 9
        const result = randomBetween(min, max)
        expect(result).toBe(5)
      })

      test('should use 0 as default min value and return the value in the middle of the range', () => {
        const max = 9
        const result = randomBetween(undefined, max)
        expect(result).toBe(5)
      })

      test('should return Not a Number (NaN) when max value is not defined', () => {
        const min = 0
        const result = randomBetween(min)
        expect(result).toBeNaN()
      })
    })

    test('should use ones as default decimal places and return 5', () => {
      const result = randomPlaces()
      expect(result).toBe(5)
    })

    describe('randomNumberPlaces', () => {
      test('should return 50 for tens decimal places', () => {
        const decimalPlaces = 10
        const result = randomPlaces(decimalPlaces)
        expect(result).toBe(50)
      })

      test('should return 500 for hundreds decimal places', () => {
        const decimalPlaces = 100
        const result = randomPlaces(decimalPlaces)
        expect(result).toBe(500)
      })
    })

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore()
    })
  })

  describe('format', () => {
    describe('formatNumber', () => {
      test('should ', () => {
        const value = 1000
        const result = formatNumber(value)
        expect(result).toBe('1,000')
      })
    })
  })
})
