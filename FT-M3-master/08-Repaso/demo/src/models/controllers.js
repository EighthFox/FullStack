let users = [];
let posts = [];

const getUsers = () => {
    return users;
};

const getUsersByName = (name) => {
    const result = users.filter((user) => {
        return user.name === name;
    });
    if(result.length) return result;
    return { error: "Users not found" };
};

const getUsersById = (id) => {
    const result = users.filter(user => user.id === parseInt(id));
    if(result.length) return result;
    return {error: "User not found" };
}

let id = 1;
const createUsers = ( name, surname, age, mail ) => {

    const newUser = {
        id:id++,
        name,
        surname,
        age,
        mail,
        posts: [],
    };

    users.push(newUser);
    return newUser;
}

const updateUser = (id, name, surname, age, mail) => {
    const user = users.find(user => user.id === parseInt(id));
    if (!user) return { error: "User not found" };

    user.name = name;
    user.surname = surname;
    user.age = age;
    user.mail = mail;

    return user;
};

const deleteUser = (id) => {
    const user = users.find(user => user.id === parseInt(id));
    if (!user) return { error: "User not found" };

    users = users.filter(user => user.id !== parseInt(id));
    return user;
};

let postsId = 1;
const createPost = ( title, contents, userId ) => {
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) throw new Error("User not found");
    const newPost = {
        id: postsId++,
        title,
        contents,
        userId,
    };

    posts.push(newPost);
    user.posts.push(newPost.id);
    return newPost;
}

module.exports = {
    getUsers,
    getUsersByName,
    getUsersById,
    createUsers,
    updateUser,
    deleteUser,
    createPost,
}