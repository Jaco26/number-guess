const Random = require('./1_random');
const playerGuess = require('./2_player-guess');

const guessesArray = [];

function addGuess(guess) {
    guessesArray.push({ playerGuess: guess });
}

function getAll() {
    return guessesArray;
}

module.exports = {
    addGuess: addGuess,
    getGuesses: getAll
}