const CategoryRepository = require('../../database/repositories/CategoryRepository')
class CategoryService {
    async getAll(fields = undefined) {
        return await CategoryRepository.getAll(fields)
    }

    async getOne(id) {
        return await CategoryRepository.getOne(id)
    }

    async create(Category) {
        return await CategoryRepository.create(Category)
    }

    async update(id, Category) {
        const existingCategory = await CategoryRepository.getOne(id)
        if (existingCategory) {
            return await existingCategory.update(Category);
        }
        return null;
    }

    async delete(id) {
        return await CategoryRepository.delete(id)
    }
}

module.exports = new CategoryService()