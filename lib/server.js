import express from 'express';
import config from './config';
 

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index',{ answer: 40});
});

app.listen(config.port, function listenHandler() {
    console.info('Running on ' + config.port);
});

//"dev": "pm2 start lib/server.js --watch --interpreter babel-node" mac
