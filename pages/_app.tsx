import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
