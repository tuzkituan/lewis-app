// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import colors from './colors'
import styles from './styles'

// Foundational style overrides
// import borders from './foundations/borders'

// Component style overrides
import Button from './components/button'

const overrides = {
  styles,
  // Other foundational style overrides go here
  components: {
    Button,
  },

  // color variables
  colors,
  fonts: {
    heading: `'Noto Sans', sans-serif`,
    body: `'Noto Sans', sans-serif`,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
}

export default extendTheme(overrides)