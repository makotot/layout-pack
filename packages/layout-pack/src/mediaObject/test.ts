import { mediaObject } from '.'

describe('mediaObject', () => {
  const result = mediaObject({
    body: '.body',
    media: '.media',
    gutter: '1rem',
  })

  test('display is to be flex', () => {
    expect(result.display).toBe('flex')
  })
  test('flex-direction is to be row', () => {
    expect(result.flexDirection).toBe('row')
  })
  test('align-items is to be flex-start', () => {
    expect(result.alignItems).toBe('flex-start')
  })
  test('child selector is defined', () => {
    expect(result['> .body + .media']).toBeDefined()
    expect(result['> .media + .body']).toBeDefined()
  })
  test('child selector has margin-left: 1rem', () => {
    expect(result['> .body + .media']).toEqual({
      marginLeft: '1rem',
    })
    expect(result['> .media + .body']).toEqual({
      marginLeft: '1rem',
    })
  })
})
