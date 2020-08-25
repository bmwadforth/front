import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, ROUTES } from '../App';
import { ICONS } from './common/icon';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../slices/articleSlice';
import moment from 'moment';
import Loader from './common/loader';
import Markdown from 'react-markdown';
import CodeBlock from './common/codeBlock';

export default function Article() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(fetchArticle(id));
  }, [dispatch, id]);

  return (
    <div className="article-container">
      <div className="article">
        <div className="article-title">
          <div className="article-title-content">
            {loading !== 'idle' ? (
              <Loader dot />
            ) : (
              <Alert
                title={data.title}
                description={
                  <>
                    <p>{data.description}</p>
                    <div className="article-meta">
                      {/*
                    <span>{data.likes} likes</span>
                    <span>{data.comments.length} comments</span>*/}
                      <span>Written {moment(data.createdAt).format('DD/MM/YYYY')}</span>
                    </div>
                  </>
                }
                status="transparent"
                icon={ICONS.BACK}
                iconLink={ROUTES.ARTICLES}
              />
            )}
          </div>
        </div>
        {(() => {
          if (loading !== 'idle') return <Loader />;
          if (error)
            return (
              <Alert title="Error" description="An error occurred. Sorry :(" status="danger" icon={ICONS.DANGER} />
            );

          return (
            <div className="article-body">
              <Markdown source={data.content} renderers={{ code: CodeBlock }} />
            </div>
          );
        })()}
      </div>
    </div>
  );
}
