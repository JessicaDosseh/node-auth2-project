const db = require('../data/db-config.js');

module.exports = {
  getUsers,
  getUsersById,
  addUsers,
  updateUsers,
  removeUsers,
}


// GET /api/users - return a list of all users in the database.
function getUsers() {
  return db('users'); 
}

// GET /api/users/:id - get a specific user
function getUsersById(id) {
  return db('users')
        .where({id})
        .first(); 
} 

// POST /api/users - add a new user
function addUsers(user) {
  return db('users')
        .insert(user); 
}

// PUT /api/users/:id - updates a user
function updateUsers(changes, id) {
  return db('users')
        .where({id})
        .update(changes);
}

// DELETE /api/users/:id - remove a given user
function removeUsers(id) {
  return db('users')
        .where({id})
        .del();
}