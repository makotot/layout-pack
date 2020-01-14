import css from '@styled-system/css'
import { SpaceProps } from 'styled-system'

interface StackProps {
  child: string;
  mt?: SpaceProps['mt'];
}

export const stack = ({ child, mt = 0 }: StackProps) => css({
  display: 'flex',
  flexDirection: 'column',
  [`${ child } + ${ child }`]: {
    marginTop: mt
  }
})()
