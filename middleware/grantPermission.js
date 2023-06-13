const jwt = require("../jwt")

module.exports = function (req, res, next) {
    const bearer = req.headers.authorization;
    
    if (!bearer) {
      return res.status(403).json({ error: 'Usuário não autenticado' });
    }
    const token = bearer.substring(7)

    const decoded = jwt.decodeToken(token)

    if (decoded.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ error: 'Acesso negado' });
    }
  };