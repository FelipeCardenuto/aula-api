const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Deck', {
    id: {
        type: DataTypes.INT,
        primaryKey: true
    },
    user: {
        type: DataTypes.INT,
        allowNull: false
    },
    deck:{
        type: DataTypes.STRING,
        allowNull: false,
        length:60
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false,
        length:300
    
    }
});

module.exports = Deck;