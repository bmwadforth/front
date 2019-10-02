export const ACTION_TYPES = {
    ARTICLE :{
        FETCH: {
            START: "ARTICLE_FETCH_START",
            SUCCESS: "ARTICLE_FETCH_SUCCESS",
            FAILED: "ARTICLE_FETCH_FAILED"
        }
    },
    ARTICLES :{
        FETCH: {
            START: "ARTICLES_FETCH_START",
            SUCCESS: "ARTICLES_FETCH_SUCCESS",
            FAILED: "ARTICLES_FETCH_FAILED"
        },
        SEARCH: {
            START: "ARTICLES_SEARCH_START",
            FINISH: "ARTICLES_SEARCH_FINISH"
        }
    },
    ADMIN: {
        AUTHENTICATION: {
            START: "ADMIN_AUTH_START",
            CHECK: "ADMIN_AUTH_CHECK",
            SUCCESS: "ADMIN_AUTH_SUCCESS",
            FAILED: "ADMIN_AUTH_FAILED"
        },
        MODIFY_ARTICLE: {
            START: "MODIFY_ARTICLE_START",
            SUCCESS: "MODIFY_ARTICLE_SUCCESS",
            FAILED: "MODIFY_ARTICLE_FAILED"
        },
        NEW_ARTICLE: {
            START: "NEW_ARTICLE_START",
            SUCCESS: "NEW_ARTICLE_SUCCESS",
            FAILED: "NEW_ARTICLE_FAILED"
        }
    }
};