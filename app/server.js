require('dotenv').config();
const express = require('express'); 
const helmet = require('helmet'); 
const cors = require('cors'); 

const server = express(); 

// Import Routers
const authRouter = require('../auth/auth-router.js');
const authenticator = require('../auth/authenticator.js');
const userRouter = require('../router/user-router.js');

server.use(helmet());
server.use(cors());
server.use(express.json()); 

// Import api endpoints, router files
server.use('/api/auth', authRouter); 
// server.use('/api/users', authenticator, userRouter); 

server.get('/', (req, res, next) => {
  res.json({ message: "Welcom to Node Auth2 Project!" });
})

module.exports = server; 