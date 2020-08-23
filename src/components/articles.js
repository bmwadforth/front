import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles } from '../slices/articleSummarySlice';
import moment from 'moment';
import Navigation from './navigation';

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
  const data = useSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="articles-container">
      <Navigation />
      <div className="articles-title">
        <div className="articles-title-content">
          <h1>A collection of stuff</h1>
          <p>Read my nonsense. Please.</p>
        </div>
      </div>
      <div className="articles">
        {data.map((article) => {
          return <ArticleItem key={article.id} article={article} />;
        })}
      </div>
    </div>
  );
}
