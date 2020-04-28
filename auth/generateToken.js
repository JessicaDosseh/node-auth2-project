const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.eports = (user) => {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: '60'
  };
  return jwt.sign(payload, secret, options); 
}