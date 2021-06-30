import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className={`${styles.Navbar} navbar navbar-light py-3 `}>
            <div className="container-fluid d-flex align-items-left justify-content-start">
            <Link className="navbar-brand px-4 py-2 " href="/">
                <a><Image src="/img/cepillo.png" alt="makeup logo"  width={40} height={40} /></a>
            </Link>
            <Link className="navbar-brand px-4 py-2 " href="/">
                <a className="link__override"><h2 className={`mx-4 ${styles.light__theme}`}>Make-Up-Test</h2></a>
            </Link>
            
            </div>
            </nav>
        </div>
    );
};

export default Navbar;