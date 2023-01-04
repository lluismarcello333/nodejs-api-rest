const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        AllowNull: false
    },
    email: {
        type: Sequelize.STRING,
        AllowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        AllowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)