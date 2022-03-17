import React from 'react';
import { IArticle } from '../store/articles/articles-store';
import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';
import ArticleTile from './articleTile';
import useArticles from "../hooks/useArticles";

export default function Articles() {
    const [loading, articles] = useArticles();
    const {payload} = articles;

    if (loading) return <h1>Loading</h1>
    if (payload === undefined) return <h1>Error</h1>

    return (
        <Box sx={{ width: '100%', minHeight: 829, marginTop: '50px'}}>
            <Masonry columns={4} spacing={2}>
                {payload.map((article: IArticle, index: number) => (
                    <ArticleTile key={index} article={article} />
                ))}
            </Masonry>
        </Box>
    )
}