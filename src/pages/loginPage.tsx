import { Box, Paper } from "@mui/material";
import UserLoginForm from "../components/userLogin";
import {useRecoilValue} from "recoil";
import {userStateSelector} from "../store/articles/userState";
import {Navigate} from "react-router-dom";

export default function LoginPage() {
    const user = useRecoilValue(userStateSelector);

    if (user.isLoggedIn) return <Navigate to='/admin' />;

    return (
        <Box sx={{ mx: 'auto', width: 350}}>
            <Paper sx={{p: 4}}>
                <UserLoginForm />
            </Paper>
        </Box>
    )
}