const express = require('express');
const DeckService = require('../services/serviceDeck');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

router.post('/register', authenticateToken, async(req, res) =>{
    try{
        const { id,user,deck,descricao } = req.body;
        const Deck = serviceDeck.createDeck({ id,user,deck,descricao });
        res.json(Deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/deck', authenticateToken, async(req, res) =>{
    try{
        const deck = await DeckService.getDeck();
        res.json(deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

module.exports = router;