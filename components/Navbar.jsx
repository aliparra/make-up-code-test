import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className={`${styles.Navbar} navbar navbar-light py-3 `}>
            <div className="container-fluid">
            <a className="navbar-brand px-4 py-2 d-flex align-items-center" href="/">
                <img src="../img/cepillo.png" alt=""  height="40" />
                <h2 className={`mx-4 ${styles.light__theme}`}>Make-Up-Test</h2>
            </a>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;