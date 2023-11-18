'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {}
    Category.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
             genre:{
                 type: DataTypes.STRING(50),
                 allowNull: false

             },
             company:{
                 type:DataTypes.STRING(50),
                 allowNull: false
             },
            year:{
                type:DataTypes.INTEGER,
                allowNull: false
             },
        },
        {
            sequelize,
            createdAt: false,
            modelName: 'Category'
        });
    return Category;
};