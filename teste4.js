const data =  require("./fakeData");

module.exports =  function(req, res) {

    const id = Number(req.query.id);

    const index = data.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        return res.status(404).json({error: 'Usuário não encontrado'});
    }
    const updateUser = { ...data[index] , ...req.body };
    data[index] = updateUser;

    return res.status(200).json(updateUser);

};