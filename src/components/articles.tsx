import React from 'react';
import { IArticle } from '../store/articles/articles-store';
import {Box, Paper} from '@mui/material';
import { Masonry } from '@mui/lab';
import ArticleTile from './articleTile';
import useArticles from "../hooks/useArticles";
import Loading from "./loading";

export default function Articles() {
    const [loading, articles] = useArticles();
    const {payload} = articles;

    if (loading) return <Loading />;
    if (payload === undefined) return <h1>Error</h1>

    return (
        <Box sx={{ width: '100%'}}>
            <Masonry columns={2} spacing={2}>
                {payload.map((article: IArticle, index: number) => (
                    <ArticleTile key={index} article={article} />
                ))}
            </Masonry>
        </Box>
    )
}