import React, { SyntheticEvent } from 'react';
import './styles.css';

function ImageTile({ url, size, isEditable = false, handleRemove, id }: { id: string, url: string, size?: string, isEditable?: boolean, handleRemove?: Function }) {
    const style = {
        container: {
            width: size,
            height: size
        },
        image: {
            width: size,
            height: size
        },
        actions: {
            width: size,
            height: size
        }
    }

    function handleDelete(e: SyntheticEvent) {
        e.preventDefault();
        if (!isEditable || !handleRemove) { return; }
        handleRemove(id);
    }

    return (
        <div className="img-tile" style={style.container}>
            <img src={url} className="tile-preview-img" style={style.image} alt="preview" />
            {isEditable
                ? <div className="img-tile-actions" style={style.actions}>
                    <button className="custom-btn" onClick={handleDelete}>Delete</button>
                </div>
                : null
            }
        </div>
    )
}

export default ImageTile;
