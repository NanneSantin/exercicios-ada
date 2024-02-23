const CardJogo = ({ titulo, linkImg }) => {
    return (
        <div className={styles.estilo_card}>
            <h3> {titulo} </h3>
            <div className={styles.container_img}>
                <img className={styles.estilo_img} src={linkImg} alt="Folder do Jogo" />
            </div>
        </div>
    )
}

export default CardJogo;