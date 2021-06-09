const { answerResult, numberTypes, PLACE_VALUES } = require('./list')

describe('list.js', () => {
  describe('PLACE_VALUES', () => {
    test('id should match', () => {
      const id = 1

      expect(PLACE_VALUES[id]).toEqual('ones')
    })
  })

  describe('numberTypes', () => {
    test('id should match', () => {
      const id = 'c'

      expect(numberTypes[id]).toEqual('cardinal')
    })
  })

  describe('answerResult', () => {
    test('id should match', () => {
      const id = 'c'

      expect(answerResult[id]).toEqual('correct')
    })
  })
})
