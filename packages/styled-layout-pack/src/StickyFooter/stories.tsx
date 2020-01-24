import React from 'react'
import styled from 'styled-components'
import { color, space, ColorProps, SpaceProps, layout, LayoutProps } from 'styled-system'
import * as StickyFooter from './'

const Box = styled.div<ColorProps & SpaceProps & LayoutProps>`
  ${ color }
  ${ space }
  ${ layout }
`

export default {
  title: 'StickyFooter',
}

export const withParentHeight100vh = () => (
  <Box height="100vh">
    <StickyFooter.Container>
      <Box bg="#fff" p="1rem" />
      <Box bg="#0088e8" p="1rem" />
    </StickyFooter.Container>
  </Box>
)
