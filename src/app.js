const express = require('express');
const Project = require('./controllers/project.controller');

const app = express();
app.use(express.json());

app.get('/project', Project.getAll);

module.exports = app;
