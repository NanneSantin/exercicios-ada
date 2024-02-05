const Saudacao = () => {
    const name = 'Nanne';
    const curso = 'React';

    const hour = new Date().getHours();
    let saudacao = 'Boa noite';

    if (hour <= 12) {
        saudacao = 'Bom dia';
    } else if (hour <= 18) {
        saudacao = 'Boa tarde';
    }

    return (
        <div>
            <h2>{saudacao}, {name}!</h2>
            <h3>Você logou no curso de {curso}</h3>
        </div>
    );
}

export default Saudacao;