"use strict";



module.exports = {
    up: async (QueryInterface,sequelize) => {
        await QueryInterface.addColumn ("games","categoryId" ,
        {

            type: sequelize.INTEGER,
            allowNUll: true,
            references:{
                model:"categories",
                key: "id"

            },
            onUpdate:"CASCADE",
            onDelete: "SET NULL",


        });
    
        
    },
    down: async (QueryInterface,sequelize) => {
        await QueryInterface.addColumn ("games","categoryId");
    },

};