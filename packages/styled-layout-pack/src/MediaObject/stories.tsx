import React from 'react'
import styled from 'styled-components'
import { color, space, ColorProps, SpaceProps } from 'styled-system'
import * as MediaObject from '.'

const Body = styled.div<ColorProps & SpaceProps>`
  ${ color }
  ${ space }
`
const Media = styled.div<ColorProps & SpaceProps>`
  ${ color }
  ${ space }
`
const StyledP = styled.p<SpaceProps>`
  ${ space }
`
const P = () => <StyledP m="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </StyledP>

export default {
  title: 'Media Object',
}

export const withSingleGutter = () => (
  <MediaObject.Container gutter="1rem">
    <MediaObject.Media>
      <Media p="2rem" bg="#4788e8" />
    </MediaObject.Media>
    <MediaObject.Body>
      <Body><P /></Body>
    </MediaObject.Body>
  </MediaObject.Container>
)

export const withResponsiveGutter = () => (
  <MediaObject.Container gutter={ ["1rem", "2rem"] }>
    <MediaObject.Media>
      <Media p="2rem" bg="#4788e8" />
    </MediaObject.Media>
    <MediaObject.Body>
      <Body><P /></Body>
    </MediaObject.Body>
  </MediaObject.Container>
)
