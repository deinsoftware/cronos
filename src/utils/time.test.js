import { isValidHour, isValidMinute, getTimeToWords, randomTime } from './time'

describe('time.js', () => {
  describe('validations', () => {
    const invalidOptions = [undefined, '', 'A', 61]

    test('should return true when hour is valid', () => {
      const hour = 12
      const result = isValidHour(hour)

      expect(result).toBe(true)
    })
    for (const invalid of invalidOptions) {
      test('should return false when hour is not valid', () => {
        const hour = invalid
        const result = isValidHour(hour)

        expect(result).toBe(false)
      })
    }

    test('should return true when minutes is valid', () => {
      const minutes = 60
      const result = isValidMinute(minutes)

      expect(result).toBe(true)
    })
    for (const invalid of invalidOptions) {
      test('should return false when minutes is not valid', () => {
        const minutes = invalid
        const result = isValidMinute(minutes)

        expect(result).toBe(false)
      })
    }
  })

  describe('timeToWords', () => {
    test('should return time in words', () => {
      const time = {
        hour: 12,
        minutes: 45,
      }
      const result = getTimeToWords(time)

      expect(result).toBe('quarter to thirteen')
    })

    test('should throw an exception when has invalid hour parameter', () => {
      expect(() => {
        const time = {
          hour: '',
          minutes: 45,
        }

        getTimeToWords(time)
      }).toThrow('Invalid hour parameter')
    })

    test('should throw an exception when has invalid minutes parameter', () => {
      expect(() => {
        const time = {
          hour: 12,
          minutes: '',
        }

        getTimeToWords(time)
      }).toThrow('Invalid minutes parameter')
    })
  })

  describe('randomTime', () => {
    beforeEach(() => {
      const randomValue = 0.5

      jest.spyOn(global.Math, 'random').mockReturnValue(randomValue)
    })

    test('should return random values', () => {
      const result = randomTime()

      expect(result).toStrictEqual({ hour: 6, minutes: 30 })
    })

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore()
    })
  })
})
