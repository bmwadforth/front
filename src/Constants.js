export const SERVER_ROUTES = {
    ARTICLES: "/api/articles",
    ARTICLE: (id) => `/api/article/${id}`
};

export const CLIENT_ROUTES = {
    HOME: "/",
    ARTICLES: "/articles",
    ARTICLE: (id) => {
        if(id){
            return `/article/${id}`
        } else {
            return `/article/:id`;
        }
    },
    PROJECTS: "/projects",
    ABOUT: "/about",
    ADMIN: "/admin"
};