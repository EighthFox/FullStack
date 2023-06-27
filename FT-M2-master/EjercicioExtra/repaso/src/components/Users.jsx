import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/actions";
import User from "./User";

class Users extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        return(
            <>
                <h2>Soy el componente Users</h2>
                {
                    this.props.users.map(
                        (user) => <User
                        name = {user.name}
                        username= {user.username}
                        email = {user.email} 
                        key = {user.id}
                        id = {user.id}
                        />
                    )
                }
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        users: state.users
    }

};

const mapDispatchToProps = (dispatch) => {
    return{
        getUsers: () => dispatch(getUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);