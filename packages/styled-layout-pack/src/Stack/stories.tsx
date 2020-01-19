import React from 'react'
import styled from 'styled-components'
import { color, space, ColorProps, SpaceProps } from 'styled-system'
import * as Stack from '.'

const Box = styled.div<ColorProps & SpaceProps>`
  ${ color }
  ${ space }
`

export default {
  title: 'Stack',
}

export const withSingleGutter = () => (
  <Stack.Container gutter="1rem">
    <Stack.Row>
      <Box bg="#4788e8" p="1rem" />
    </Stack.Row>
    <Stack.Row>
      <Box bg="#4788e8" p="1rem" />
    </Stack.Row>
    <Stack.Row>
      <Box bg="#4788e8" p="1rem" />
    </Stack.Row>
  </Stack.Container>
)

export const withResponsiveGutter = () => (
  <Stack.Container gutter={ ["1rem", "2rem"] }>
    <Stack.Row>
      <Box bg="#4788e8" p="1rem" />
    </Stack.Row>
    <Stack.Row>
      <Box bg="#4788e8" p="1rem" />
    </Stack.Row>
    <Stack.Row>
      <Box bg="#4788e8" p="1rem" />
    </Stack.Row>
  </Stack.Container>
)
