import css from '@styled-system/css'

// html {
//   height: 100%;
// }
// body {
//   min-height: 100%;
// }

export const stickyFooter = () => css({
  display: 'grid',
  minHeight: '100%',
  gridTemplateRows: '1fr auto',
})()
