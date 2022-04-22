import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <header className="bg-base-200 flex justify-center">
        <h1 className={`tracking-tight underline underline-offset-4 font-medium decoration-6 decoration-accent text-3xl sm:text-6xl p-12 pb-16 ${'animate-fadeIn'}`}>
          Josh Showalter
        </h1>
      </header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
