const fs = require('fs/promises');

const registerEnrollment = async (request, response) => {
    try {
        const { nome, idade, email, tamCamisa, categoria, valorDoado } = request.body;

        const database = JSON.parse(await fs.readFile('./exercicios-ada/aula3/src/database/inscricoes.json'));

        const registerFound = database.some((runner) => runner.email === email);

        if (registerFound) {
            return response.status(409).json({ mensagem: 'Já existe registro para o e-mail informado!' });
        }

        database.push({
            nome,
            idade,
            email,
            tamCamisa,
            categoria,
            valorDoado
        });

        await fs.writeFile('./exercicios-ada/aula3/src/database/inscricoes.json', JSON.stringify(database, null, 2));

        return response.status(201).json({ mensagem: 'Inscrição realizada com sucesso.!' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({ mensagem: 'Erro interno do servidor! Não foi possível registrar sua inscrição' });
    }
}

module.exports = registerEnrollment;
