import React from 'react';

function Error({ title, error }: { title:string, error: string }) {
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
