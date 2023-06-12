module.exports = function (req, res, next) {
    const { user } = req.authorization
    console.log(`REQ`,req)
  
    if (user.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ error: 'Acesso negado' });
    }
  };