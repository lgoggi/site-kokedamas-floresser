import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'


function App ({ Component, pageProps}: AppProps) {
    return (
    <>
        <Head> 
            <title> FloresSer </title>
            <link rel="preload" href="/fonts/Fontspring-DEMO-annuario-regular.woff" as="font" crossOrigin="" type="font/woff2" />
            <link rel="preload" href="/fonts/Glora_black.woff" as="font" crossOrigin="" type="font/woff2" />
            <link rel="preload" href="/fonts/Glora_Regular.woff" as="font" crossOrigin="" type="font/woff2" />
            <link rel="icon" href="/icon2.png"></link>
            
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
    </>
    )
}

export default App