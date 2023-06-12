const data =  require("./fakeData");

module.exports = function(req, res){

    const { name } = req.query;
    const user = data.find((user) => user.name === name)
    console.log(user)

    if (!user) {
        return res.status(404).json({error: 'Usuário não encontrado'});
    }
    
    req.user = user
    console.log('userNologin',req.user)

    return res.status(200).json({message: "login efetuado com sucesso"});

}; 