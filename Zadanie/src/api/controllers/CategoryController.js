const CategoryService = require('../services/CategoryService')

class CategoryController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await CategoryService.getAll([
                'id',
                'name',
                "genre",
                "company",
                "year",
                
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const Category = await CategoryService.getOne(request.params.id)
            if(Category){
                return response.status(200).json(Category)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await CategoryService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingCategory = await CategoryService.getOne(request.params.id)
            if(existingCategory){
                return response.status(200).json(await existingCategory.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await CategoryService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    } 
}

module.exports = new CategoryController()