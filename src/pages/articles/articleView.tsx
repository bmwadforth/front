import ArticleContent from "../../components/articleContent";
import {Box, Typography} from "@mui/material";

export default function ArticleViewPage() {
    return (
    <Box style={{paddingTop: '50px', overflow: 'auto'}}>
        <ArticleContent />
    </Box>
    )
}