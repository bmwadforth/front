import React, {useState} from "react";
import WebForm from "../Utility/Form/WebForm";
import Field from "../Utility/Form/Field";

export default function Login(props) {
    const [user, setUser] = useState({username: "", password: ""});

    function loginUser(e){
        e.preventDefault();
        console.log("Logging in...");

        //dispatch action with username and password
    }

    return (
        <div className="login">
            <WebForm onSubmit={e => loginUser(e)}>
                <Field type="text" onChange={e => console.log(e)} placeholder="Username" value={user.username} />
                <Field type="password" onChange={e => console.log(e)} placeholder="Password" value={user.username} />
            </WebForm>
        </div>
    )
}