import React from 'react';
import './styles.css';

function ImageTile({ url, size }: { url: string, size?: string }) {
    const style = {
        container: {
            width: size,
            height: size
        },
        image: {
            width: size,
            height: size
        }
    }
    return (
        <div className="img-tile" style={style.container}>
            <img src={url} className="tile-preview-img" style={style.image} alt="preview" />
        </div>
    )
}

export default ImageTile;
