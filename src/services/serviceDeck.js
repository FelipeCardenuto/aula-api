const { v4: UUIDV4 } = require('uuid');
const repositoryDeck = require('../repositories/repositoryDeck');

class ServiceDeck{
    async getDeck(){
        return repositoryDeck.findAll();
    }

    
}

module.exports = new ServiceDeck();