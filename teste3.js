const data =  require("./fakeData");

module.exports = function(req, res) {

    const { name } =  req.query;

    const user = data.find((user) => user.name === name);

    if (!user) {
        return res.status(404).json({error: 'Usuário não encontrado'})
    }
    const index = data.indexOf(user)

    data.splice(index, 1)

    return res.status(200).json({message: `O usuário "${user.name}" foi removido com sucesso`});

};