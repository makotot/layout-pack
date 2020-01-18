import styled from 'styled-components'
import { stack } from 'layout-pack'
import { SpaceProps } from 'styled-system'

export const Row = styled.div``

export const Container = styled.div`
  ${
    ({ gutter }: { gutter: SpaceProps['mt'] }) => stack(
      {
        child: Row,
        gutter,
      })
   }
`
