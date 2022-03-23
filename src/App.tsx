import React from 'react';
import {
    Container,
    Breadcrumbs,
    Link as MuiLink,
    Box,
    createTheme,
    ThemeProvider,
    useMediaQuery, Paper
} from '@mui/material';
import {
    Route,
    Routes,
    Link, useLocation
} from "react-router-dom";
import ArticlesPage from "./pages/articles/articles";
import ArticleViewPage from "./pages/articles/articleView";
import NotFoundPage from "./pages/notFoundPage";

export const ApplicationRoutes = {
    INDEX: '/',
    ARTICLES: '/articles',
    ARTICLE: '/article/:articleId',
    PROJECTS: 'projects',
    ABOUT: '/about'
}

function HomeComponent() {
    return (
        <Box>
            <h1>Home</h1>
        </Box>
    )
}


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    //mode: prefersDarkMode ? 'dark' : 'light',
                    mode: 'light'
                },
            }),
        [prefersDarkMode],
    );
    const {pathname} = useLocation();

    const isActive = (path: string): string => {
        if (pathname === path) {
            return 'text.primary';
        } else {
            return 'text.secondary';
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box height="100vh" display="flex" flexDirection="column">
                <Container>
                    <Breadcrumbs aria-label="breadcrumb">
                            <MuiLink underline="hover" color={isActive(ApplicationRoutes.INDEX)} href="#"
                                     component="span"
                                     variant='subtitle1'>
                                <Link to={ApplicationRoutes.INDEX}>
                                    Bmwadforth<b>dot</b>com
                                </Link>
                            </MuiLink>
                            <MuiLink underline="hover" color={isActive(ApplicationRoutes.ABOUT)} href="#"
                                     component="span"
                                     variant='subtitle1'>
                                <Link to={ApplicationRoutes.ABOUT}>
                                    About
                                </Link>
                            </MuiLink>
                        </Breadcrumbs>
                    <Routes>
                        <Route path={ApplicationRoutes.INDEX} element={<ArticlesPage/>}/>
                        <Route path={ApplicationRoutes.ARTICLES} element={<ArticlesPage/>}/>
                        <Route path={ApplicationRoutes.ARTICLE} element={<ArticleViewPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
