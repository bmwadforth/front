import React from 'react';
import { Container, Breadcrumbs, Link as MuiLink, Typography, Box, ButtonGroup, Button } from '@mui/material';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Articles from './components/articles';
import ArticleContent from './components/articleContent';
import ArticlesPage from "./pages/articles/articles";
import ArticleViewPage from "./pages/articles/articleView";

function HomeComponent() {
  return (
    <Box>
      <h1>Home</h1>
    </Box>
  )
}

function App() {
  return (
    <Container sx={{ mt: '50px' }}>
      <Router>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink underline="hover" color="inherit" href="#" component="span">
            <Link to='/'>
              Home
            </Link>
          </MuiLink>
          <MuiLink underline="hover" color="inherit" href="#" component="span">
            <Link to='/articles'>
              Articles
            </Link>
          </MuiLink>
          <MuiLink underline="hover" color="inherit" href="#" component="span">
            <Link to='/projects'>
              Projects
            </Link>
          </MuiLink>
          <MuiLink underline="hover" color="inherit" href="#" component="span">
            <Link to='/about'>
              About
            </Link>
          </MuiLink>
        </Breadcrumbs>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/articles' element={<ArticlesPage />} />
          <Route path='/article/:articleId' element={<ArticleViewPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
