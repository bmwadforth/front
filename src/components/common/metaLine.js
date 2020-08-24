import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMeta } from '../../slices/metaSlice';

export default function MetaLine() {
  const location = useLocation();
  const data = useSelector(selectMeta);

  return (
    <div className="meta-line">
      <p>{`Path ${location.pathname} was not found.`}</p>
      <sub>
        <p>
          <b>Connection from:</b> {data.colo ? data.colo : 'N/A'}, {data.loc ? data.loc : 'N/A'}
        </p>
        <p>
          <b>User agent:</b> {data.uag ? data.uag : 'N/A'}
        </p>
        <p>
          <b>Internet Protocol Address:</b> {data.ip ? data.ip : 'N/A'}
        </p>
      </sub>
    </div>
  );
}
