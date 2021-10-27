import Document, { Head, Html, Main, NextScript } from 'next/document'
const APP_NAME = 'Next LMS Boiler Plate'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" type="image/png" href="/images/app-icon.png"></link>
                    <meta name='application-name' content={APP_NAME} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                    <meta name='theme-color' content='#FFFFFF' />

                    <link rel='apple-touch-icon' sizes='180x180' href='/icons/app-icon.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='shortcut icon' href='/images/app-icon.png' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument