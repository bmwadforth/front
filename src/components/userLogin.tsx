import { Box } from "@mui/system";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import { useState } from "react";
import UserApiService from "../util/userApiService";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import userState from "../store/articles/userState";
import { BoxAlignment, Group, InputType, TextField, Button, ColourType } from "@bmwadforth/armor-ui";
import '../styles/userLogin.scss';

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
            setUser({ username: form.username, isLoggedIn: true, loggedInSince: new Date() });
        } catch (e) {
            setShowAlert({ status: 'error', message: 'Failed to login' });
            setUser({ username: '', isLoggedIn: false, loggedInSince: null });
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
            <Group alignment={BoxAlignment.Row}>
                <TextField id="username" title="Username" onChange={(e: any) => onChange('username', e.target.value)} type={InputType.Text} />
                <TextField id="password" title="Password" onChange={(e: any) => onChange('password', e.target.value)} type={InputType.Text} />
            </Group>
            <Button
                color={ColourType.Primary}
                onClick={onSubmit}
                title="Submit"
            />
        </Box>
    )
}