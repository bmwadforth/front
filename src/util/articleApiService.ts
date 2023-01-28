import BaseApiService from "./baseApiService";
import {IArticlesState, IArticleState} from "../store/articles/articlesState";
import {IApiResponse} from "../store/base";

export default class ArticleApiService extends BaseApiService {
    public async getArticles(): Promise<IArticlesState> {
        const response = await this.client.get<IArticlesState>('/article');

        return response.data as IArticlesState;
    }

    public async getArticle(id: string): Promise<IArticleState> {
        const response = await this.client.get<IArticleState>(`/article/${id}`);

        const {payload} = response.data;
        const contentUrl = payload?.contentDataUrl;
        if (contentUrl) {
            const contentResponse = await this.client.get(contentUrl);
            payload!.content = contentResponse.data;
        }

        return response.data as IArticleState;
    }

    public async createArticle(title: string, description: string): Promise<IApiResponse<number>> {
        const response = await this.client.post<IApiResponse<number>>(`/article`, {
            Title: title,
            Description: description
        }, {withCredentials: true});
        return response.data as IApiResponse<number>;
    }

    public async uploadArticleContent(id: string, file: File, type: string): Promise<IApiResponse<number>> {
        const response = await this.client.post<IApiResponse<number>>(`/article/content/${id}`, file, {
            withCredentials: true, headers: {
                'Content-Type': type || 'application/octet-stream'
            }
        });
        return response.data as IApiResponse<number>;
    }

    public async uploadArticleThumbnail(id: string, file: File, type: string): Promise<IApiResponse<number>> {
        const response = await this.client.post<IApiResponse<number>>(`/article/thumbnail/${id}`, file, {
            withCredentials: true, headers: {
                'Content-Type': type || 'application/octet-stream'
            }
        });
        return response.data as IApiResponse<number>;
    }
}