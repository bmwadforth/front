import { Box, Paper } from "@mui/material";
import {useRecoilValue} from "recoil";
import {userStateSelector} from "../store/articles/userState";
import {Navigate} from "react-router-dom";

export default function AdminPage() {
    const user = useRecoilValue(userStateSelector);

    if (!user.isLoggedIn) return <Navigate to='/login' />;

    return (
        <Box>
            <Paper>
                <h1>ADMIN!</h1>
            </Paper>
        </Box>
    )
}