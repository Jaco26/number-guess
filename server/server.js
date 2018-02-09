const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

const gameRouter = require('./routers/game-router');

app.use('/game', gameRouter);

const port = 5050;
app.listen(port, function () {
    console.log(`Listening on port ${port}`);

})