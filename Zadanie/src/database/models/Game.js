'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Game extends Model {}
    Game.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
            price: {
                type: DataTypes.DECIMAL
            },
        },
        {
            sequelize,
            createdAt: false,
            modelName: 'Game'
        });
    return Game;
};