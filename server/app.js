const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const projectsRouter = require('./router/projects');

const app = express();
const API_PORT = process.env.port || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../build')));
app.use('/api/projects', projectsRouter);
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build', 'index.html')));

app.listen(API_PORT, () => console.log(`App started at http://localhost:${API_PORT}`));

// TODO: made TypeScrip set up to be able to use common stuff
