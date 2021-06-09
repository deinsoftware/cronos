const { IMAGE_TYPE } = require('./images')

describe('test.js', () => {
  describe('IMAGE_TYPE', () => {
    test('id should match', () => {
      const id = 'svg'

      expect(IMAGE_TYPE[id]).toEqual('svg+xml')
    })

    test('if id not exist should return anything', () => {
      const id = 'png'

      expect(IMAGE_TYPE[id]).toBeUndefined()
    })
  })
})
