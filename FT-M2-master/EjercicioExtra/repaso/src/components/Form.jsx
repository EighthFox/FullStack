import { useState } from "react";
import { connect } from "react-redux";
import { createUser } from "../redux/actions";

const Form = (props) => {

    const [input, setInput] = useState({
        name:"",
        username:"",
        email:"",
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInput({
            ...input,
            [property]: value,
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.createUser(input)
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={input.name} onChange={changeHandler}></input>

                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={input.username}onChange={changeHandler}></input>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={input.email}onChange={changeHandler}></input>

                <button type="submit">ENVIAR</button>
            </form>
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return{
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Form);