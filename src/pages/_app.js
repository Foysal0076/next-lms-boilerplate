import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                {/* Any SEO data, + others */}
                <meta name="description" content="A boilerplate to develop modern learning management system" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
