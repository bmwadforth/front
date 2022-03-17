import React from 'react';
import { Container, Breadcrumbs, Link as MuiLink, Box } from '@mui/material';
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
  const { pathname } = useLocation();

  const isActive = (path: string): string => {
    if (pathname === path) {
      return 'text.primary'
    } else {
      return 'text.secondary'
    }
  }

  return (
    <Container sx={{ mt: '50px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <MuiLink underline="hover" color={isActive(ApplicationRoutes.INDEX)} href="#" component="span" variant='subtitle1'>
          <Link to={ApplicationRoutes.INDEX}>
            Bmwadforth<b>dot</b>com
          </Link>
        </MuiLink>
        <MuiLink underline="hover" color={isActive(ApplicationRoutes.ARTICLES)} href="#" component="span" variant='subtitle1'>
          <Link to={ApplicationRoutes.ARTICLES}>
            Articles
          </Link>
        </MuiLink>
        <MuiLink underline="hover" color={isActive(ApplicationRoutes.PROJECTS)} href="#" component="span" variant='subtitle1'>
          <Link to={ApplicationRoutes.PROJECTS}>
            Projects
          </Link>
        </MuiLink>
        <MuiLink underline="hover" color={isActive(ApplicationRoutes.ABOUT)} href="#" component="span" variant='subtitle1'>
          <Link to={ApplicationRoutes.ABOUT}>
            About
          </Link>
        </MuiLink>
      </Breadcrumbs>
      <Routes>
        <Route path={ApplicationRoutes.INDEX} element={<HomeComponent />} />
        <Route path={ApplicationRoutes.ARTICLES} element={<ArticlesPage />} />
        <Route path={ApplicationRoutes.ARTICLE} element={<ArticleViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;
