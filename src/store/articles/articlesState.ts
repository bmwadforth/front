import {atom, selector, selectorFamily} from 'recoil';
import {IApiResponse} from '../base';
import ArticleApiService from "../../util/articleApiService";

export interface IArticle {
    articleId: number;
    title: string;
    description: string;
    thumbnailId: string;
    contentId: string;
    createdDate: Date;
    updatedDate: Date;
    thumbnailDataUrl: string;
    contentDataUrl: string;
    content?: string;
}

export interface IArticlesState extends IApiResponse<IArticle[]> {}

export interface IArticleState extends IApiResponse<IArticle> {}

export const articlesStateSelector = selector<IArticlesState>({
    key: 'articlesStateSelector',
    get: async ({get}) => {
        try {
            const apiService = new ArticleApiService();
            return await apiService.getArticles();
        } catch (error) {
            throw error;
        }
    },
    set: ({set}, newVal) => set(articlesState, newVal as IArticlesState)
});

const articlesState = atom<IArticlesState>({
    key: 'articlesState',
    default: {message: '', payload: undefined, errors: undefined} as IArticlesState
});

export const articleStateSelector = selectorFamily<IArticleState, string>({
    key: 'articlesStateSelector',
    get: (articleId: string) => async ({get}) => {
        try {
            const apiService = new ArticleApiService();
            return await apiService.getArticle(articleId);
        } catch (error) {
            throw error;
        }
    }
});

const articleState = atom<IArticleState>({
    key: 'articleState',
    default: {message: '', payload: undefined, errors: undefined} as IArticleState
});

export default articlesState;