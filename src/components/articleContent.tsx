import React from 'react';
import ReactMarkdown from 'react-markdown'
import {IArticle} from '../store/articles/articles-store';
import useArticle from "../hooks/useArticle";
import {useNavigate, useParams} from "react-router-dom";
import {Stack, Divider, Grid, Paper, Typography, IconButton} from "@mui/material";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import moment from 'moment';
import Loading from "./loading";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {ApplicationRoutes} from "../App";

export interface IArticleTileProps {
    article: IArticle;
}

export default function ArticleContent() {
    const navigate = useNavigate();
    let {articleId} = useParams();
    const [loading, article] = useArticle(articleId as string);
    const {payload} = article;
    if (loading) return <Loading/>;
    if (payload?.content === undefined) return <h1>Error</h1>;


    return (
        <Grid container style={{padding: '1em', margin: '25px 0', height: '100%'}}>
            <Grid item xs={12}>
                <Stack direction="row" display='flex' alignItems={'center'} spacing={2}>
                    <Typography
                        variant="subtitle1">
                        <IconButton aria-label="delete" onClick={() => navigate(ApplicationRoutes.ARTICLES)}>
                            <ArrowBackIcon />
                        </IconButton>
                    </Typography>
                    <Typography
                        variant="subtitle1">{`${payload.title} - ${moment(payload.createdDate).format('LLL')}`}</Typography>
                </Stack>
            </Grid>
            <Divider/>
            <Grid item xs={12}>
                <ReactMarkdown children={payload.content} components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={vscDarkPlus}
                                language={match[1]}
                                showLineNumbers={true}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}/>
            </Grid>
        </Grid>
    )
}