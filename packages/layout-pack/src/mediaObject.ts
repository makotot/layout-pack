import css from '@styled-system/css'
import { SpaceProps } from 'styled-system'

interface MediaObjectProps {
  body: string;
  media: string;
  gutter: SpaceProps['marginLeft'];
}

export const mediaObject = ({ body, media, gutter = 0 }: MediaObjectProps) => css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  [`${ media } + ${ body }`]: {
    marginLeft: gutter,
  },
  [`${ body } + ${ media }`]: {
    marginRight: gutter,
  },
})()
