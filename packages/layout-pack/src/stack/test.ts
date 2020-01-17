import { stack } from '.'

describe('stack', () => {
  const result = stack({
    child: '.child',
    gutter: '1rem',
  })

  test('display is to be flex', () => {
    expect(result.display).toBe('flex')
  })
  test('flex-direction is to be column', () => {
    expect(result.flexDirection).toBe('column')
  })
  test('child selector is defined', () => {
    expect(result['> .child + .child']).toBeDefined()
  })
  test('child selector has margin-top: 1rem', () => {
    expect(result['> .child + .child']).toEqual({
      marginTop: '1rem',
    })
  })
})
