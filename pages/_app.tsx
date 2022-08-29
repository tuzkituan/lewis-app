import { ChakraProvider } from '@chakra-ui/react';
import Fonts from 'fonts/index.js';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../src/assets/scss/styles.scss';
import { store } from '../src/store';
import theme from '../themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Fonts />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
