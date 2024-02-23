import { useState } from 'react';

const FormJogo = () => {
    const [imagem, setImagem] = useState('');
    const [titulo, setTitulo] = useState('');

    const handleImagemChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagem(reader.result);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            imagem,
            titulo,
        });

        setImagem('');
        setTitulo('');
    };

    return (
        <div className={styles.estilo_container}>
            <h2> ADICIONE UM JOGO </h2>

            <form onSubmit={handleSubmit} className={styles.estilo_formulario}>
                <div className={styles.caixa_div_formulario}>
                    <div>
                        <label htmlFor='titulo'>Título</label>
                        <input
                            type='text'
                            id='titulo'
                            value={titulo}
                            onChange={(event) => setTitulo(event.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor='imagem'>Imagem</label>
                        <input
                            type='file'
                            id='imagem'
                            accept='image/*'
                            onChange={handleImagemChange}
                        />
                        {imagem && (
                            <img
                                src={imagem}
                                alt='Folder do jogo'
                                style={{ maxWidth: '200px' }}
                            />
                        )}
                    </div>
                </div>

                <button type='submit'>Adicionar</button>
            </form>
        </div>
    );
};

export default FormJogo;