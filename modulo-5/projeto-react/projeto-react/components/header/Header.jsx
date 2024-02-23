import Logo from '../logo/Logo';
import styles from './Header.module.css'

const Header = ({ toggleFormulario }) => {
    return (
        <nav className={styles.estilo_navbar}>
            <Logo />
            <button
                className={styles.estilo_link}
                onClick={toggleFormulario}
            ></button>
        </nav>
    );
};

export default Header;