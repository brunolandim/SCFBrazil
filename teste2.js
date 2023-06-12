var data =  require("./fakeData");

module.exports = function(req, res){
    const {name, job,role } = req.body
    const newUser = { id: generateId(), name, job, role }
    data.push(newUser)

    return res.status(201).json(newUser);
};

const generateId = () => {
    return data.length + 1
}