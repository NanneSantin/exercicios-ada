import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <nav>
            {/* inseri de propósito, para direcionar ao erro */}
            <Link to={`/error`}>
                <img className={styles.estilo_logo} src='./logo.png' />
            </Link>
        </nav>
    );
};

export default Logo;
