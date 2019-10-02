import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Login from "./Login";
import {ACTION_TYPES} from "../../Actions/Types";
import Alert from "../Utility/Alert";

export default function Admin(props) {
    const {authenticated, loading} = useSelector(store => store.Admin.Authentication);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: ACTION_TYPES.ADMIN.AUTHENTICATION.CHECK});
    }, [dispatch]);

    return (
        <>
            {loading && <Alert title="Loading" status="warning"/>}
            {(authenticated) ?
                <div className="admin">
                    <h1>The Control Centre</h1>

                    <h2>New Article</h2>
                    {/*New Article Component*/}
                    <h2>Modify Articles</h2>
                    {/*Modify Article Component*/}
                    <h2>Article Statistics</h2>
                    {/*Article Statistics Component*/}
                </div> :
                <Login/>}
        </>
    )
}