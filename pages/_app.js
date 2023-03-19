import '../styles/globals.css'
import '../fonts/stylesheet.css';
import Script from 'next/script';
import Head from 'next/head';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
let addthis ;


  return <>
  <Component {...pageProps} />
  </>
}

export default MyApp
