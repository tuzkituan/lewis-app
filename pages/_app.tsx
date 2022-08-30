import { ChakraProvider } from '@chakra-ui/react';
import PageLoading from 'components/PageLoading';
import { login, logout } from 'features/userSlice';
import Fonts from 'fonts/index.js';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { auth, onAuthStateChanged } from 'services/firebase';
import { usePageLoading } from 'utils/loading';
import '../src/assets/scss/styles.scss';
import { store } from '../src/store';
import theme from '../themes';
import NextNProgress from 'nextjs-progressbar';

const App = ({ Component, pageProps }: AppProps) => {
  // const user = useSelector(selectUser);
  const { isPageLoading } = usePageLoading();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
        auth.signOut();
      }
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#ff5414"
        showOnShallow={true}
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

const AppWrapper = (props: any) => {
  return (
    <Provider store={store}>
      <Fonts />
      <App {...props} />
    </Provider>
  );
};

export default AppWrapper;
