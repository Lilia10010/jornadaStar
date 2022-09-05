import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeLayout } from '../src/components/layouts/home';

const Home: NextPage = () => {
  return (
    <div>
        <Head>
        <title>Star Wars</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4285f4" />
        <meta name="title" content="Lília" />
        <meta
          name="description"
          content="aplicativo para calcular paradas das naves"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        <meta property="og:title" content="Lília" />
        <meta
          property="og:description"
           content="aplicativo para calcular paradas das naves"
        />
        
      </Head>  

   <HomeLayout />
    </div>
  )
}

export default Home
