const { answerResult, numberTypes, placeValues } = require('./list')

describe('list.js', () => {
  describe('placeValues', () => {
    test('id should match', () => {
      const id = 1
      expect(placeValues[id]).toEqual('ones')
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
