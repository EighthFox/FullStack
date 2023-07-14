const getUsersHandler = (req, res) => {
    res.status(200).send("Estoy en users");
};

const getUserHandler = (req, res) => {
    const { id } = req.params;
    

};

const createUserHandler = (req, res) => {

};

module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler
}