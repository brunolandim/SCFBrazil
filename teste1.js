const data =  require("./fakeData");

const getUser = ( req, res ) => {
    const { name } = req.query
    const user = data.find((user) => user.name === name)
    if (!user) {
        return res.status(404).json({error: 'Usuário não encontrado'});
    }

    user.counter ? user.counter += 1 : user.counter = 1;

    return res.status(200).json(user);
};

const getUsers = ( req, res ) => res.status(200).json(data);


module.exports = {
    getUser,
    getUsers
};