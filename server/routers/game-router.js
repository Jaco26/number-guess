const express = require('express');
const router = express.Router();

const checkGuessModule = require('../modules/3_check-guess');

router.get('/', function (req, res) {
    let guesses = checkGuessModule.getGuesses;
    res.send(checkGuessModule.getGuesses());
});

router.post('/add', function (req, res) {
    let guess = req.body.guess;
    console.log(guess);
    checkGuessModule.addGuess(guess);
    res.sendStatus(200);
});

module.exports = router;

