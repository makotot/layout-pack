import { stickyFooter } from '.'

describe('stickyFooter', () => {
  const result = stickyFooter()

  test('display is to be flex', () => {
    expect(result.display).toBe('flex')
  })
  test('flex-direction is to be column', () => {
    expect(result.minHeight).toBe('100%')
  })
  test('grid-template-rows is to be auto 1fr auto', () => {
    expect(result.minHeight).toBe('auto 1fr auto')
  })
})
