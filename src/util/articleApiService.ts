import BaseApiService from "./baseApiService";
import {IArticlesState, IArticleState} from "../store/articles/articlesState";

export default class ArticleApiService extends BaseApiService {
    public async getArticles(): Promise<IArticlesState> {
        const response = await this.client.get<IArticlesState>('/article');

        return response.data as IArticlesState;
    }

    public async getArticle(id: string): Promise<IArticleState> {
        const response = await this.client.get<IArticleState>(`/article/${id}`);

        const { payload } = response.data;
        const contentUrl = payload?.contentDataUrl;
        if (contentUrl) {
            const contentResponse = await this.client.get(contentUrl);
            payload!.content = contentResponse.data;
        }

        return response.data as IArticleState;
    }
}