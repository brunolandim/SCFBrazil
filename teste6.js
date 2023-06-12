const data =  require("./fakeData");
const jwt = require("./jwt") 


module.exports = function(req, res){

    const { name } = req.query;
    const user = data.find((user) => user.name === name)

    if (!user) {
        return res.status(404).json({error: 'Usuário não encontrado'});
    }
    const token = jwt.generateToken(user)

    return res.status(200).json({accessToken: token });

}; 