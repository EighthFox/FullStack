const { User, Post } = require('../db');
const axios = require('axios');

const cleanArray = (arr) => 
    arr.map( elem => {
        return{
            id: elem.id,
            name: elem.name,
            email: elem.email,
            phone: elem.phone,
            created: false,
        };
    });

const getAllUsers = async () => {
    const dbUsers = await User.findAll();
    const apiUsersRaw = (
        await axios.get("https://jsonplaceholder.typicode.com/users")
    ).data;

    const apiUsers = cleanArray(apiUsersRaw);

    return [...dbUsers, ...apiUsers];
}

const getUserById = async (id, source) => {
    const user = 
        source === "api" 
        ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
            .data
        : await User.findByPk(id,{
            include:{
                model: Post,
                attributes: ["title", "body"],
            },
        });

    return user;
};

const createUser = async (name, email, phone) => await User.create({name, email, phone});

const searchUserByName = async (name) => {
    const dbUsers = await User.findAll({ where: { name: name } });
    const apiUsersRaw = (
        await axios.get("https://jsonplaceholder.typicode.com/users")
    ).data;

    const apiUsers = cleanArray(apiUsersRaw);
    const filteredApi = apiUsers.filter((user) => user.name === name);

    return [...dbUsers, ...filteredApi];
};

module.exports = { createUser, getUserById, getAllUsers, searchUserByName };