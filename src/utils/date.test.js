const {
  addYear,
  formatDate,
  getDateToWords,
  getYear,
  getYearToWords,
  isValidDate,
  randomDateBetween,
} = require('./date')

describe('date.js', () => {
  beforeEach(() => {
    const randomValue = 0.5

    jest.spyOn(global.Math, 'random').mockReturnValue(randomValue)

    const DateReal = global.Date
    const mockDate = new Date('2021-06-18T15:24:05.000Z')

    jest.spyOn(global, 'Date').mockImplementation((...args) => {
      if (args.length) {
        return new DateReal(...args)
      }

      return mockDate
    })
  })

  describe('validations', () => {
    describe('isValidDate', () => {
      test('should return true when date is valid', () => {
        const date = new Date()
        const result = isValidDate(date)

        expect(result).toBe(true)
      })
      test('should return false when date is not valid', () => {
        const date = ''
        const result = isValidDate(date)

        expect(result).toBe(false)
      })
    })
  })

  describe('operation', () => {
    describe('addYear', () => {
      test('should return current date plus 1 years when has no parameters', () => {
        const result = addYear().toJSON()

        expect(result).toBe('2022-06-18T15:24:05.000Z')
      })

      test('should return current date plus 10 years', () => {
        const amount = 10
        const result = addYear(amount, new Date()).toJSON()

        expect(result).toBe('2031-06-18T15:24:05.000Z')
      })

      test('should throw an exception when has invalid amount parameter', () => {
        expect(() => {
          const amount = ''

          addYear(amount)
        }).toThrow('Invalid amount parameter')
      })

      test('should throw an exception when has invalid amount parameter', () => {
        expect(() => {
          const amount = 10
          const date = ''

          addYear(amount, date)
        }).toThrow('Invalid date parameter')
      })
    })

    describe('getYear', () => {
      test('should return current year', () => {
        const date = new Date()
        const result = getYear(date)

        expect(result).toBe(2021)
      })

      test('should throw an exception when has invalid date parameter', () => {
        expect(() => {
          const date = ''

          getYear(date)
        }).toThrow('Invalid date parameter')
      })
    })

    describe('getDateToWords', () => {
      test('should return date in words', () => {
        const date = new Date()
        const result = getDateToWords(date)

        expect(result).toBe('June the eighteenth, twenty twenty-one')
      })

      test('should throw an exception when has invalid date parameter', () => {
        expect(() => {
          const date = ''

          getDateToWords(date)
        }).toThrow('Invalid date parameter')
      })
    })

    describe('getYearToWords', () => {
      test('should return year in words', () => {
        const date = new Date()
        const result = getYearToWords(date)

        expect(result).toBe('twenty twenty-one')
      })

      test('should throw an exception when has invalid date parameter', () => {
        expect(() => {
          const date = ''

          getYearToWords(date)
        }).toThrow('Invalid date parameter')
      })
    })
  })

  describe('random', () => {
    describe('randomNumber', () => {
      test('should return the value in the middle of the range', () => {
        const min = new Date('2012-01-01T00:00:00.000Z')
        const result = randomDateBetween(min).toJSON()

        expect(result).toBe('2016-09-24T07:42:02.500Z')
      })

      test('should return throw an exception when has no parameters', () => {
        expect(() => {
          randomDateBetween()
        }).toThrow(TypeError)
      })

      test('should throw an exception when has no date parameters', () => {
        const min = ''
        const max = ''

        expect(() => {
          randomDateBetween(min, max)
        }).toThrow('Invalid date parameter')
      })
    })
  })

  describe('random', () => {
    describe('format', () => {
      describe('formatCardinal', () => {
        test('should return 1000 with thousand points as 1,000', () => {
          const date = new Date()
          const result = formatDate(date)

          expect(result).toBe('6/18/2021')
        })
      })
    })
  })

  afterEach(() => {
    jest.spyOn(global, 'Date').mockRestore()
  })
})
