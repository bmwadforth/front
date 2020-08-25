import React from 'react';

export default function Loader({ dot }) {
  return <div className={dot ? 'loader-dot' : 'loader'} />;
}
