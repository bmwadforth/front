import React from "react";
import {useSelector} from "react-redux";
import Login from "./Login";

export default function Admin(props) {
    //Select from redux state, whether the user is logged in
    //if logged in, return admin panel, else return login form
    const {authenticated} = useSelector(store => store.Admin.Authentication);

    return (
        <>
            {authenticated ?
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