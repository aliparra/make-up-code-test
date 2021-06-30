import Head from 'next/head'
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Makeup code test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../img/cepillo.png" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
