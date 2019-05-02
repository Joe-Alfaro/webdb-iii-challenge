const express = require('express');
const helmet = require('helmet');

const server = express();

const cohortsRouter = require('./cohorts/cohorts-router.js');
const studentsRouter = require('./students/students-router.js');

server.use(helmet());
server.use(express.json());

server.use('/api/cohorts', cohortsRouter);
server.use('/api/students', studentsRouter);

module.exports = server;
