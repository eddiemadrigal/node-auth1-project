const express = require('express')
const server = express()

const RegisterRouter = require('./users/register-router')
const UserRouter = require('./users/users-router')

server.use('/api/register', RegisterRouter);
server.use('/api/users', UserRouter)

server.get('/', (req, res) => {
  res.send({ message: 'API up ...' })
})

module.exports = server;