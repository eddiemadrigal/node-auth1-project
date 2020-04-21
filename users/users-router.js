const express = require('express');
const Users = require('./users-model');
const router = express.Router();

router.get('/', (req, res) => {
   Users.getUser()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get a list of users ...' })
    })
})

module.exports = router;