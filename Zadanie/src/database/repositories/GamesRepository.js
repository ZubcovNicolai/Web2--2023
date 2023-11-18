const Games = require('../models').Game

class GamesRepository {
    async getAll(fields = undefined) {
        return await Games.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Games.findByPk(id)
    }

    async create(games) {
        return await Games.create(games)
    }

    async update(id, games) {
        const existingGames = await Games.findByPk(id)
        if (existingGames) {
            return await existingGames.update(games);
        }
        return null;
    }

    async delete(id) {
        return await Games.destroy({
            where: { id: id }
        })
    }
}

module.exports = new GamesRepository()