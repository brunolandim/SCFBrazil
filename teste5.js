const data =  require("./fakeData");

module.exports = function(req, res){

    const { name } = req.query;
    const user = data.find((user) => user.name === name)

    if (!user) {
        return res.status(404).json({error: 'Usuário não encontrado'});
    }

    return res.status(200).json({message: `Usuário ${name} foi lido ${user.counter || 0 } vezes`});

}; 