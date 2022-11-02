import { createUseStyles } from 'react-jss'

export const useStyle = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      fontFamily: 'sans-serif'
    }
  }
})
