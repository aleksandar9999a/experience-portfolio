import React from 'react';
import IErrorPage from '../../interfaces/IErrorPage';

function Error({ title, error }: IErrorPage) {
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="headline">
        <p className="headline-error">{error}</p>
      </div>
    </div>
  );
}

export default Error;
