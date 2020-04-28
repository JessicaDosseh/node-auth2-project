const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;
  
  if(token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        // bad token 
        res.status(401).json({ message: 'Invalid Token' })
      }
      else {
        req.decodedToken = decodedToken
        next(); 
      }
    })
  }
  else {
    res.status(400).json({ message: "Token Required" }); 
  }
}