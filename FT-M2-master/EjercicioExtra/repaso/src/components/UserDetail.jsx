import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserDetail } from "../redux/actions";

const UserDetail = (props) => {

    useEffect(() => {
        props.getUserDetail(props.match.params.id)
    }, [])

    return(
        <>
            <p>Nombre: {props.userDetail.name}</p>
            <p>Email: {props.userDetail.email}</p>
            <p>Username: {props.userDetail.username}</p>
            <p>Teléfono: {props.userDetail.phone}</p>
            <p>Página Web: {props.userDetail.website}</p>
        </>
    )
};

const mapStateToProps = (state) => {
    return{
        userDetail: state.userDetail
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        getUserDetail: (id) => (dispatch(getUserDetail(id)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
