import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                {/* Any SEO data, + others */}
                <meta name="description" content="A boilerplate to develop modern learning management system" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
