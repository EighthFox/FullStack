const redux = require("redux"); //importamos redux

const initialState = { 
    //propiedades del estado global
    num: 0,
    visibility: true,
    name: "",
    amigos: [],
}

const reducer = (state = initialState, action) => { //recibe el estado global y una acción
    switch(action.type) {
        // case "AUMENTAR":
        //     return{
        //         ...state,
        //         num: state.num + 1,
        //     };
        // case "DECREMENTAR":
        //     return{
        //         ...state,
        //         num: state.num - 1,
        //     };
        case "CAMBIAR_NOMBRE":
            return{
                ...state,
                name: action.payload,
            };
        case "ADD_FRIEND":
            return{
                ...state,
                amigos: [...state.amigos, action.payload],
            }
        case "DELETE_FRIEND":
            return{
                ...state,
                amigos: state.amigos.filter((amigo) => amigo.id !== action.payload),
            }
        default:
            return {...state};
    }
}; 

const store = redux.createStore(reducer) //creación del store

// const action = {
//     type: "AUMENTAR",
// };

// const action2 = {
//     type: "DECREMENTAR",
// };

// const action3 = {
//     type: "CAMBIAR_NOMBRE",
//     payload: "Emiliano",
// };

//creador de acciones

const cambiarNombre = (name) => {
    return { type: "CAMBIAR_NOMBRE", payload: name};
}

const addFriend = (friendName, id) => {
    return { type: "ADD_FRIEND", payload: { name:friendName, id:id } };
}

const deleteFriend = (id) => {
    return { type: "DELETE_FRIEND", payload: id}
}

console.log(store.getState());
store.dispatch(addFriend("Martin", 1));
console.log(store.getState());
store.dispatch(addFriend("Nino", 2));
console.log(store.getState());
store.dispatch(deleteFriend(2));
console.log(store.getState());