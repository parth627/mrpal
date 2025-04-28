import { ThemeProvider } from '../components/ThemeProvider';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        {/* Favicon (CSR) */}
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicons/favicon.ico" type="image/x-icon" />

        {/* Apple Touch Icons - Multiple sizes for different devices */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#111827" />

        {/* Safari Pinned Tab Icon */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          key="viewport"
        />

        {/* Resource Hints */}
        <link
          rel="preload"
          href="/favicons/favicon.svg"
          as="image"
          type="image/svg+xml"
          key="preload-favicon"
        />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}