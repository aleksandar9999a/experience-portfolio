import React from 'react';
import './styles.css';

function ImageTile({ url }: { url: string }) {
    return (
        <div className="img-tile">
            <img src={url} className="tile-preview-img" alt="preview" />
        </div>
    )
}

export default ImageTile;
