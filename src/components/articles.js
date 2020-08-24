import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles } from '../slices/articleSummarySlice';
import moment from 'moment';
import NavigationLine from './common/navigationLine';
import { Alert } from '../App';
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
  //const data = useSelector(selectArticles);
  const data = [];

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="articles-container">
      <NavigationLine />
      <div className="articles">
        <div className="articles-title">
          <div className="articles-title-content">
            <h1>Articles</h1>
            <p>Scientia ipsa potentia est.</p>
          </div>
        </div>
        {data.length === 0 ? (
          <Alert title="No Articles" description="Check back later" status="warning" icon={ICONS.WARNING} />
        ) : (
          <div className="article-list">
            {data.map((article) => {
              return <ArticleItem key={article.id} article={article} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
