import CardJogo from '../cards/CardJogo';
import jogos from '../../database/jogos';
import styles from './ListaDeJogo.module.css'

const ListaDeJogos = () => {
    return (
        <div className={styles.lista_de_jogos}>
            {jogos.map((jogo, index) => (
                <CardJogo key={index} titulo={jogo.titulo} linkImg={jogo.linkImg} />
            ))}
        </div>
    );
};

export default ListaDeJogos;