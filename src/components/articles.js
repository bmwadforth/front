import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles } from '../slices/articleSummarySlice';
import moment from 'moment';
import { Alert, ROUTES } from '../App';
import { ICONS } from './common/icon';
import { Link } from 'react-router-dom';
import Loader from './common/loader';

function ArticleItem({ article }) {
  return (
    <Link to={ROUTES.ARTICLE(article.id)}>
      <div className="article-item">
        <div className="article-title">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>

        <div className="article-body">
          <img src={article.image} alt="Article thumbnail" />
        </div>

        <div className="article-footer">
          {/*
          <span>
            <sub>{article.likes} Likes</sub>
          </span>
          <span>
            <sub>{article.comments.length} Comments</sub>
          </span>*/}
          <span>
            <sub className="created-date">{moment(article.createdAt).format('DD/MM/YYYY')}</sub>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Articles() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.articleSummary);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="articles-container">
      <div className="articles">
        <div className="articles-title">
          <div className="articles-title-content">
            <Alert title="Articles" description="📖 ✍️" status="transparent" icon={ICONS.BACK} iconLink={ROUTES.HOME} />
          </div>
        </div>
        {(() => {
          if (loading !== 'idle') return <Loader />;
          if (error)
            return (
              <Alert title="Error" description="An error occurred. Sorry :(" status="danger" icon={ICONS.DANGER} />
            );
          if (data.length === 0)
            return <Alert title="No Articles" description="Check back later" status="warning" icon={ICONS.WARNING} />;
          return (
            <div className="article-list">
              {data.map((article) => {
                return <ArticleItem key={article.id} article={article} />;
              })}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
