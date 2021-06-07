const { imageType } = require('./images')

describe('test.js', () => {
  describe('imageType', () => {
    test('id should match', () => {
      const id = 'svg'

      expect(imageType[id]).toEqual('svg+xml')
    })

    test('if id not exist should return anything', () => {
      const id = 'png'

      expect(imageType[id]).toBeUndefined()
    })
  })
})
