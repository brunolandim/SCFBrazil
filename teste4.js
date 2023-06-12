const data =  require("./fakeData");

module.exports =  function(req, res) {

    const id = Number(req.query.id);
    const { name, job } = req.body;

    const index = data.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        return res.status(404).json({error: 'Usuário não encontrado'});
    }
    const updateUser = { id, name ,job };
    data[index] = updateUser;

    return res.status(200).json(updateUser);

};