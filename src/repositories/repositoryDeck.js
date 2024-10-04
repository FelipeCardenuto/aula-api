const authenticateToken = require('../middleware/auth');
const Deck = require('../models/deck')

class RepositoryDeck{
    [authenticateToken]
    async createDeck(Deck){
        return await Deck.create(Deck);
    }

    async findAll(){
        return await Deck.findAll({
            where: {
                deleted: false
            }
        });
    }
}

module.exports = new RepositoryDeck();