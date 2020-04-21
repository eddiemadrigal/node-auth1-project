const express = require('express');
const Users = require('./register-model');
const router = express.Router();

router.post('/', (req, res) => {
    const postData = req.body;
    Users.registerUser(postData)
    .then(users => {
      res.status(201).json({ message: 'User created'})
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to create user' })
    })
})

module.exports = router;