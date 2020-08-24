import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles } from '../slices/articleSummarySlice';
import moment from 'moment';
import { Alert, ROUTES } from '../App';
import { ICONS } from './common/icon';

function ArticleItem({ article }) {
  return (
    <div className="article-item">
      <p>{article.title}</p>
      <p>{article.description}</p>

      <p>Likes: {article.likes}</p>
      <p>Comments: {article.comments.length}</p>
      <p>Created: {moment(article.createdAt).format('MMMM Do - YYYY')}</p>
    </div>
  );
}

export default function Articles() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.articleSummary);

  let data = [];
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="articles-container">
      <div className="articles">
        <div className="articles-title">
          <div className="articles-title-content">
            <Alert
              title="Articles"
              description="Scientia ipsa potentia est."
              status="transparent"
              icon={ICONS.BACK}
              iconLink={ROUTES.HOME}
            />
          </div>
        </div>
        {(() => {
          if (loading !== 'idle') return <h1>Loading</h1>;
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
