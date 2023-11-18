const GamesRepository = require('../../database/repositories/GamesRepository')
class GamesService {
    async getAll(fields = undefined) {
        return await GamesRepository.getAll(fields)
    }

    async getOne(id) {
        return await GamesRepository.getOne(id)
    }

    async create(Games) {
        return await GamesRepository.create(Games)
    }

    async update(id, Games) {
        const existingGames = await GamesRepository.getOne(id)
        if (existingGames) {
            return await existingGames.update(Games);
        }
        return null;
    }

    async delete(id) {
        return await GamesRepository.delete(id)
    }

    async getRegions(GamesId, fields) {
        return await RegionsRepository.getAllOfGames(GamesId, fields);
    }

    async getLocations(GamesId, fields) {
        return await LocationsRepository.getAllOfGames(GamesId, fields);
    }
}

module.exports = new GamesService()