const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const next = require('./next');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));

//globals

global.base = path.join(__dirname + '/file-management/', '..', '.');

// connect to db
mongoose.connect(require('./config/auth.json').mongoLogin, {useNewUrlParser: true})

const start = async (port) => {
    // Couple Next.js with our express server.
    // app and handle from "next" will now be available as req.app and req.handle.
    await next(app);

    app.use(require('./middleware/res'))
    app.use(require('./middleware/jwtHandler').express)
    app.use('/', require('./controllers'));

    app.listen(port);
};

// Start the express server.
start(3001, (process.env.NODE_ENV ? "172.26.10.134" : false));
