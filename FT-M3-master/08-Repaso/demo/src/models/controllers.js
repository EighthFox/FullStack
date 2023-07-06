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

const getPosts = () => {
    return posts;
};

const getPostsByUserId = (userId) => {
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) throw new Error("User not found");
    const result = posts.filter((posts) => {
        return posts.userId === parseInt(userId);
    });
    if(result.length) return result;
    return new Error("Posts not found");
};

const getPostsById = (id) => {
    const result = posts.filter(post => post.id === parseInt(id));
    if(result.length) return result;
    else throw new Error("Post not found");
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
};

const updatePost = ( userId, title, contents, id ) => {
    const post = posts.find(post => post.id === parseInt(id));
    if (!post) throw new Error("Posts not found");
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) throw new Error("User not found");

    post.userId = userId;
    post.title = title;
    post.contents = contents;

    return post;
}

const deletePost = (id) => {
    const post = posts.find(post => post.id === parseInt(id))
    if(!post) throw new Error("Post not found")

    posts = posts.filter(post => post.id !== parseInt(id))
    return post;
}

module.exports = {
    getUsers,
    getUsersByName,
    getUsersById,
    createUsers,
    updateUser,
    deleteUser,
    getPosts,
    getPostsById,
    getPostsByUserId,
    createPost,
    updatePost,
    deletePost,
}