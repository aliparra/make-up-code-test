import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head"

//The app content is wrapped as children prop
const Layout = ({children}) => {
    return (
        <div className='content'>
            <Head>
                <title>Makeup code test</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../img/cepillo.png" />
            </Head>
            <Navbar/>
            {children}
            <Footer/>

        </div>
    );
};

export default Layout;