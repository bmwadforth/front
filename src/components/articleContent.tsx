import React from 'react';
import { IArticle } from '../store/articles/articles-store';

export interface IArticleTileProps {
    article: IArticle;
}

export default function ArticleContent() {
    

    return (
        <h1>Article Page</h1>
    )
}