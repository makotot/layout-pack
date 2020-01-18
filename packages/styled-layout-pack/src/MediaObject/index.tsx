import styled from 'styled-components'
import { mediaObject } from 'layout-pack'
import { SpaceProps } from 'styled-system'

export const Media = styled.div``
export const Body = styled.div``

export const Container = styled.div`
  ${
    ({ gutter }: { gutter: SpaceProps['ml'] }) => mediaObject(
      {
        body: Body,
        media: Media,
        gutter,
      })
   }
`
