import { useRouteError } from "react-router-dom";
import styles from './Error.module.css';
import Header from "../header/Header";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <div className={styles.estilo_erro}>
                <h1 className={styles.estilo_h1}>Oops!</h1>
                <p className={styles.estilo_p}>Tivemos um erro ... já chamei o Técnico .</p>
                <p>
                    <i className={styles.estilo_i}>{error.statusText || error.message}</i>
                </p>
            </div>
            <div className={styles.estilo_div}>
                <img className={styles.estilo_img} src='./gato.jpg' alt='Erro de Página Não Encontrada' />
            </div>
        </>
    );
}