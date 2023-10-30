const joi = require('joi');

const registerSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Por favor preencha o campo Nome.',
        'string.empty': 'Por favor preencha o campo Nome.',
        'string.base': 'O campo nome deve ser do tipo texto!'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'Por favor, informe um e-mail!',
        'string.empty': 'Por favor, informe um e-mail!',
        'string.email': 'O campo e-mail precisa ter um formato válido.',
        'string.base': 'O campo e-mail precisa ter um formato válido.'
    }),
    idade: joi.number().required().messages({
        'any.required': 'Por favor, informe a sua idade!',
        'number.base': 'O campo idade deve ser do tipo número.'
    }),
    tamCamisa: joi.string().required().messages({
        'any.required': 'Por favor, informe o tamanho da camiseta.',
        'string.empty': 'Por favor, informe o tamanho da camiseta',
        'string.base': 'O campo tamanho da camiseta deve ser do tipo texto!'
    }),
    categoria: joi.string().required().messages({
        'any.required': 'Por favor informe a categoria.',
        'string.empty': 'Por favor informe a categoria.',
        'string.base': 'O campo categoria deve ser do tipo texto!'
    }),
    valorDoado: joi.number().messages({
        'number.base': 'O campo valor doado deve ser do tipo número.'
    })
});

module.exports = registerSchema;
