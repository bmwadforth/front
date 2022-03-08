import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { articlesStateSelector, IArticle } from '../store/articles/articles-store';
import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';
import ArticleTile from './articleTile';

export interface IArticleTileProps {
    article: IArticle;
}

export default function Articles() {
    const articles = useRecoilValueLoadable(articlesStateSelector);

    if (articles.state === "loading") return <h1>Loading</h1>

    const {payload} = articles.contents;

    return (
        <Box sx={{ width: 500, minHeight: 829, marginTop: '50px'}}>
            <Masonry columns={2} spacing={2}>
                {payload.map((article: IArticle, index: number) => (
                    <ArticleTile key={index} article={article} />
                ))}
            </Masonry>
        </Box>
    )
}