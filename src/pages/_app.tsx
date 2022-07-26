import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'

function App ({ Component, pageProps}: AppProps) {
    return (
    <>
        <Head> 
            <title> LUKI302 </title>
            <link rel="manifest" href="/manifest.json"></link>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
    </>
    )
}

export default App