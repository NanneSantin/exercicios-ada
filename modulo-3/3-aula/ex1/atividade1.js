class SistemaDeLogin {
    constructor() {
        this.usuarios = []
    }

    cadastrarUsuario(nome, senha) {
        try {
            const usuarioExiste = this.usuarios.findIndex((usuario) => usuario.nome === nome);

            if (usuarioExiste >= 0) {
                throw new Error('Usuário já cadastrado!');
            }

            return this.usuarios.push({ nome, senha });
        } catch (error) {
            console.log(error.message);
        }
    }

    realizarLogin(nome, senha) {
        try {
            const usuarioEncontrado = this.usuarios.find((usuario) => usuario.nome === nome);

            if (!usuarioEncontrado) {
                throw new Error('Usuário não encontrado!');
            }

            if (usuarioEncontrado.senha !== senha) {
                throw new Error('Senha inválida!');
            }

            return usuarioEncontrado;
        } catch (error) {
            console.log(error.message);
        }
    }

    exibirMensagemPersonalizada(usuario) {
        if (usuario) {
            return `Bem-vindo(a), ${usuario.nome}!`;
        } else {
            return '';
        }
    }
}

const sistemaLogin = new SistemaDeLogin();

sistemaLogin.cadastrarUsuario('Elaine', '1234');
const usuarioLogado = sistemaLogin.realizarLogin('Elaine', '1234')

console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
