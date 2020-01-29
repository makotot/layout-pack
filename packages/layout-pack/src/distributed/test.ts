import { distributed } from '.'

describe('stack', () => {
  const result = distributed()

  test('display is to be flex', () => {
    expect(result.display).toBe('flex')
  })
  test('flex-direction is to be row', () => {
    expect(result.flexDirection).toBe('row')
  })
  test('justify-content is to be space-between', () => {
    expect(result.justifyContent).toBe('space-between')
  })
})
