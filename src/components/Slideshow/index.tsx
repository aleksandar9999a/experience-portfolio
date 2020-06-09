import React, { useEffect, useState } from 'react';
import './styles.css';
import IUploadedImage from '../../interfaces/IUploadedImage';
import ImageTile from '../ImageTile';

function Slideshow({ images }: { images: IUploadedImage[] }) {
    const [img, setImg] = useState<string>(images[0].url);
    const [imgTiles, setImgTiles] = useState<JSX.Element[]>([]);
    const [display, setDisplay] = useState<string>('none');

    function handleClick(e: any) { setImg(e.target.src); }
    function handleZoom() { setDisplay('block'); }
    function handleClose() { setDisplay('none'); }

    useEffect(() => {
        const tiles = images.map(x => <div key={x._id} id={x._id} onClick={handleClick}><ImageTile url={x.url} size="100px" /></div>);
        setImgTiles(tiles);
    }, [])

    return (
        <div className="slideshow">
            <div className="img-wrapper">
                <img src={img} className="slideshow-current-image" alt="slideshow" onClick={handleZoom} />
            </div>
            <div className="img-tiles-wrapper">
                <div className="img-tiles-wrapped-wrapper">
                    {imgTiles}
                </div>
            </div>
            <div className="modal" style={{ display }}>
                <span className="close" onClick={handleClose} >&times;</span>
                <img className="modal-content" src={img} />
            </div>
        </div>
    )
}

export default Slideshow;