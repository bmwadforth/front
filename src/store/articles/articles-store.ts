import { atom, selector } from 'recoil';
import axiosClient from '../apiClient';
import { IApiResponse } from '../base';
import { articlesThumbnailStateSelector } from './article-data-store';

export interface IArticle {
    articleId: number;
    title: string;
    description: string;
    thumbnailId: string;
    contentId: string;
    createdDate: Date;
    updatedDate: Date;
    thumbnailDataUrl: string;
}

export interface IArticleState extends IApiResponse<IArticle[]> { }

export const articlesStateSelector = selector<IArticleState>({
    key: 'articlesStateSelector',
    get: async ({ get }) => {
        try {
            const response = await axiosClient.get<IArticleState>('/api/v1/article');

            return response.data as IArticleState;
        } catch (error) {
            return {} as IArticleState;
        }
    },
    set: ({ set }, newVal) => set(articlesState, newVal as IArticleState)
});

const articlesState = atom<IArticleState>({
    key: 'articlesState',
    default: { } as IArticleState
});

export default articlesState;