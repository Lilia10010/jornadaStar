import StyleGlobal from "../styles/global";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <StyleGlobal />
        <Component {...pageProps} />
        </>
  )
  
}

export default MyApp
