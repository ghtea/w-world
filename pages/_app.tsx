import type { AppProps } from 'next/app';
import { MainGameProvider } from 'games/main';
import { GlobalStyle, ThemeProvider } from 'styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainGameProvider>
    <ThemeProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  </MainGameProvider>
)

export default MyApp;
