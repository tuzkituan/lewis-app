// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'
import colors from './colors'

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
}

export default extendTheme(overrides)