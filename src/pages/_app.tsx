import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'


function App ({ Component, pageProps}: AppProps) {
    return (
    <>
        <Head> 
            <title> FloresSer </title>
            <link rel="icon" href="/icon2.png"></link>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
    </>
    )
}

export default App