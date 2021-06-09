const { MENU_OPTIONS } = require('./menu')

describe('menu.js', () => {
  describe('MENU_OPTIONS', () => {
    test('path should match', () => {
      expect(MENU_OPTIONS[0].path).toEqual('n2w')
    })
  })
})
