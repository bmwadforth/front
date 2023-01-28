import { Box } from "@mui/system";
import { Alert, AlertColor, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import UserApiService from "../util/userApiService";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import userState from "../store/articles/userState";

export default function UserLogin() {
    const [user, setUser] = useRecoilState(userState);
    const [form, setForm] = useState({ username: '', password: '' });
    const [showAlert, setShowAlert] = useState({ status: '', message: '' });
    const navigate = useNavigate();

    const handleClose = () => setShowAlert({ status: '', message: '' });
    const onChange = (name: string, val: string) => setForm({ ...form, [name]: val });
    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const apiService = new UserApiService();
            await apiService.loginUser(form.username, form.password);

            setShowAlert({ status: 'success', message: 'Successfully Logged In' });
            setUser({username: form.username, isLoggedIn: true, loggedInSince: new Date()});
        } catch (e) {
            setShowAlert({ status: 'error', message: 'Failed to login' });
            setUser({username: '', isLoggedIn: false, loggedInSince: null});
        }
    }

    if (user.isLoggedIn) {
        navigate('/admin');
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { width: '100%', my: 2 },
            }}
            noValidate
            autoComplete="off"
        >
            {showAlert.status &&
                <Snackbar open={!!showAlert.status || false} autoHideDuration={6000} onClose={handleClose}>
                    <Alert variant="filled" severity={showAlert.status as AlertColor}>
                        {showAlert.message}
                    </Alert>
                </Snackbar>}
            <Box my='4'>
                <TextField id="username" name='username' label="Username" variant="filled" onChange={(e: any) => onChange('username', e.target.value)} />
                <TextField id="password" name='password' label="Password" variant="filled" type="password" onChange={(e: any) => onChange('password', e.target.value)} />
            </Box>
            <Button sx={{width: '100%', mt: 2}} variant="contained" type='submit' onClick={onSubmit}>
                Login
            </Button>
        </Box>
    )
}