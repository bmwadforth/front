import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, ROUTES } from '../App';
import { ICONS } from './common/icon';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../slices/articleSlice';
import moment from 'moment';

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
            <Alert
              title={data.title}
              description={
                <>
                  <p>{data.description}</p>
                  <div className="article-meta">
                    <p>{data.likes} likes</p>
                    <p>{data.comments.length} comments</p>
                    <p>Written {moment(data.createdAt).format('DD/MM/YYYY')}</p>
                  </div>
                </>
              }
              status="transparent"
              icon={ICONS.BACK}
              iconLink={ROUTES.ARTICLES}
            />
          </div>
        </div>
        {(() => {
          if (loading !== 'idle') return <h1>Loading</h1>;
          if (error)
            return (
              <Alert title="Error" description="An error occurred. Sorry :(" status="danger" icon={ICONS.DANGER} />
            );
        })()}
      </div>
    </div>
  );
}
