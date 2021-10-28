import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                {/* Any SEO data, + others */}
                <meta name="description" content="A boilerplate to develop modern learning management system" />
            </Head>
            <ReduxProvider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ReduxProvider>
        </>
    )
}

export default MyApp
