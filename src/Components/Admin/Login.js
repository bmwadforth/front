import React, {useState} from "react";
import WebForm from "../Utility/Form/WebForm";
import Field from "../Utility/Form/Field";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPES} from "../../Actions/Types";
import Alert from "../Utility/Alert";

export default function Login(props) {
    const [user, setUser] = useState({username: "", password: ""});
    const dispatch = useDispatch();

    const {error, loading} = useSelector(store => store.Admin.Authentication);

    function loginUser(e){
        e.preventDefault();
        dispatch({type: ACTION_TYPES.ADMIN.AUTHENTICATION.START, payload: user});
    }

    return (
        <div className="login">
            {loading && <Alert title="Loading" status="warning"/>}
            {error && <Alert title={error} status="danger"/>}
            <h1>Login To Admin Console</h1>
            <WebForm onSubmit={e => loginUser(e)}>
                <Field type="text" onChange={e => setUser({...user, username: e.target.value})} placeholder="Username" value={user.username} />
                <Field type="password" onChange={e => setUser({...user, password: e.target.value})} placeholder="Password" value={user.password} />
            </WebForm>
        </div>
    )
}