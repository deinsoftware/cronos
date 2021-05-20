const { menuOptions } = require('./menu')

describe('menu.js', () => {
  describe('menuOptions', () => {
    test('path should match', () => {
      expect(menuOptions[0].path).toEqual('n2w')
    })
  })
})
