import { ThemeProvider } from '../components/ThemeProvider';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        {/* Favicon (CSR) */}
        <link rel="icon" href="/mrpal/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/mrpal/favicons/favicon.ico" type="image/x-icon" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/mrpal/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/mrpal/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/mrpal/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/mrpal/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/mrpal/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/mrpal/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/mrpal/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/mrpal/favicons/apple-touch-icon.png" />
        <link rel="mask-icon" href="/mrpal/favicons/safari-pinned-tab.svg" color="#111827" />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          key="viewport"
        />

        <link
          rel="preload"
          href="/mrpal/favicons/favicon.svg"
          as="image"
          type="image/svg+xml"
          key="preload-favicon"
        />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}