import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles } from '../slices/articleSlice';

export default function Articles() {
  const dispatch = useDispatch();
  const data = useSelector(selectArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="articles">
      <h1>Articles</h1>
      {data.map((article) => {
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
          </div>
        );
      })}
    </div>
  );
}
