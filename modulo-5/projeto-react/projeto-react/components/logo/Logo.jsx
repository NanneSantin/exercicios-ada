import styles from './Logo.module.css'

const Logo = () => {
    return (
        <nav>
            <img className={styles.estilo_logo} src='./logo.png' />
        </nav>
    );
};

export default Logo;
