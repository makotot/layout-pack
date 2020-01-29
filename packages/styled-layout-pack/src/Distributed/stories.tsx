import React from 'react'
import styled from 'styled-components'
import { color, space, ColorProps, SpaceProps } from 'styled-system'
import { Distributed } from './'

const Box = styled.div<ColorProps & SpaceProps>`
  ${ color }
  ${ space }
`

export default {
  title: 'Distributed',
}

export const with2Col = () => (
  <Distributed>
    <Box bg="#4788e8" p="1rem" />
    <Box bg="#4788e8" p="1rem" />
  </Distributed>
)

export const with3Col = () => (
  <Distributed>
    <Box bg="#4788e8" p="1rem" />
    <Box bg="#4788e8" p="1rem" />
    <Box bg="#4788e8" p="1rem" />
  </Distributed>
)
