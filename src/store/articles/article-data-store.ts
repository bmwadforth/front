import { atom, selectorFamily } from 'recoil';
import axiosClient from '../apiClient';

export interface IArticleThumbnailState extends File {}

export const articlesThumbnailStateSelector = selectorFamily<IArticleThumbnailState, number>({
    key: 'articlesThumbnailStateSelector',
    get: (articleId) => async ({ get }) => {
        try {
            const response = await axiosClient.get(`/api/v1/article/thumbnail/${articleId}`);

            return new File([response.data], `article-${articleId}`, {
                type: response.headers["Content-Type"],
              });
        } catch (error) {
            return {} as IArticleThumbnailState;
        }
    },
});

const articlesThumbnailState = atom<IArticleThumbnailState>({
    key: 'articlesThumbnailState',
    default: {} as IArticleThumbnailState
});

export default articlesThumbnailState;