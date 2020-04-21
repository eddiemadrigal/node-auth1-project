const express = require('express');
const Users = require('./user-model');
const router = express.Router();

router.get('/', (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users)
    })
})

module.exports = router;