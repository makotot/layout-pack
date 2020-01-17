import css from '@styled-system/css'
import { SpaceProps } from 'styled-system'

interface StackProps {
  child: string;
  gutter?: SpaceProps['mt'];
}

export const stack = ({ child, gutter = 0 }: StackProps) => css({
  display: 'flex',
  flexDirection: 'column',
  [`${ child } + ${ child }`]: {
    marginTop: gutter,
  },
})()
