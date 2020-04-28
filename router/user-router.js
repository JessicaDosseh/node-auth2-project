const express = require('express'); 

const Users = require('./user-model.js');

const router = express.Router(); 

// Get user master list
router.get('/', (req, res) => {
  Users.getUsers()
        .then(users => {
          if (users) {
            res.status(200).json({ UserList: users }); 
          } else {
            res.status(404).json({ message: 'Could not retrive User List.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get User List', error });
        });
});