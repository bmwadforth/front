import Articles from "../../components/articles";
import {Box, Typography} from "@mui/material";

export default function ArticlesPage() {
    return(
        <Box style={{paddingTop: '50px'}}>
            <Typography style={{marginBottom: '15px'}} variant="h3">Articles</Typography>
            <Articles />
        </Box>
    )
}