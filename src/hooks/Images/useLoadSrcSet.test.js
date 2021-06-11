import { renderHook, act } from '@testing-library/react-hooks'

import useLoadScrSet from './useLoadScrSet'

describe('useLoadScrSet.js', () => {
  const setUp = () => {
    return renderHook(
      ({ src, type, sizes }) => useLoadScrSet(src, type, sizes),
      {
        initialProps: { src: '' },
      }
    )
  }

  it('should return an error when not send parameters', async () => {
    await act(async () => {
      const { result, rerender, waitForNextUpdate } = setUp()

      rerender()
      await waitForNextUpdate()
      expect(result.current.error).not.toBeFalsy()
    })
  })

  it('should return the requested image', async () => {
    await act(async () => {
      const { result, rerender, waitForNextUpdate } = setUp()

      const image = { src: 'logo/logo', type: 'png' }

      rerender(image)
      await waitForNextUpdate()
      expect(result.current.srcset[0]).toBe('logo.png')
    })
  })

  it('should return the srcset image', async () => {
    await act(async () => {
      const { result, rerender, waitForNextUpdate } = setUp()

      const image = { src: 'error/404', type: 'png', sizes: [320, 480, 720] }

      rerender(image)
      await waitForNextUpdate()
      const images = [
        '404-320w.png 320w',
        '404-480w.png 480w',
        '404-720w.png 720w',
      ]

      for (const [index, value] of images.entries()) {
        expect(result.current.srcset[index]).toBe(value)
      }
    })
  })
})
