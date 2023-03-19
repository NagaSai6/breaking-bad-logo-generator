import '../styles/globals.css'
import '../fonts/stylesheet.css';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {

  <Script id="github" src='https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60d18767dd9759e5'>

  </Script>
  return <Component {...pageProps} />
}

export default MyApp
