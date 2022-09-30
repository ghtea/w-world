import type { AppProps } from 'next/app';
import { GlobalStyle, ThemeProvider } from 'styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <GlobalStyle/>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp;
