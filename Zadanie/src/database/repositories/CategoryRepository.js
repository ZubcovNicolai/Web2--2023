const Category = require('../models').Category

class CategoryRepository {
    async getAll(fields = undefined) {
        return await Category.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Category.findByPk(id)
    }

    async create(category) {
        return await Category.create(category)
    }

    async update(id, category) {
        const existingCategory = await Category.findByPk(id)
        if (existingCategory) {
            return await existingCategory.update(category);
        }
        return null;
    }

    async delete(id) {
        return await Category.destroy({
            where: { id: id }
        })
    }
}

module.exports = new CategoryRepository()