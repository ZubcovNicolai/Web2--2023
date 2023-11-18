const GamesService = require('../services/GamesService')

class GamesController{
    async getAll(request, response){
        try{
            return await response.status(200).json(await GamesService.getAll([
                'id',
                'name',
                'price'
            ]))
        } catch(error){
            return await response.status(500).json(JSON.stringify(error))
        }
    }

    async getOne(request, response){
        try{
            const Games = await GamesService.getOne(request.params.id)
            if(Games){
                return response.status(200).json(Games)
            }
            return response.status(404).json()
        } catch(error){
            return response.status(500).json(JSON.stringify(error))
        }
    }

    async create(request, response){
        try{
            return response.status(200).json(await GamesService.create(request.body));
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async update(request, response){
        try{
            const existingGames = await GamesService.getOne(request.params.id)
            if(existingGames){
                return response.status(200).json(await existingGames.update(request.body));
            }
            return response.status(404).json();
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    }

    async delete(request, response){
        try{
            return response.status(200).json(await GamesService.delete(request.params.id))
        } catch(error){
            return response.status(400).json(JSON.stringify(error))
        }
    } 
}

module.exports = new GamesController()