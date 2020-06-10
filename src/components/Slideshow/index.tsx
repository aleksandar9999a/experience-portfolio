import React, { useEffect, useState } from 'react';
import './styles.css';
import IUploadedImage from '../../interfaces/IUploadedImage';
import ImageTile from '../ImageTile';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

function Slideshow({ images }: { images: IUploadedImage[] }) {
    const [img, setImg] = useState<IUploadedImage>(images[0]);
    const [imgTiles, setImgTiles] = useState<JSX.Element[]>([]);
    const [display, setDisplay] = useState<string>('none');
    const [state, setState] = useState<boolean>(true);

    function handleClick(id: string) {
        setState(false);
        const image = images.find(x => x._id === id);
        if (!image) { return; }
        setImg(image);
    }
    function handleZoom() { setDisplay('block'); }
    function handleClose() { setDisplay('none'); }
    function handleNext() { return handleMove('next'); }
    function handleBack() { return handleMove('back'); }
    function handleMove(type: string) {
        setState(false);
        const index = images.findIndex(x => x._id === img._id);
        if (type === 'next' && index >= images.length - 1) {
            setImg(images[0]);
            return;
        }
        if (type === 'next' && index < images.length - 1) {
            setImg(images[index + 1]);
            return;
        }
        if (type === 'back' && index > 0) {
            setImg(images[index - 1]);
            return;
        }
        if (type === 'back' && index === 0) {
            setImg(images[images.length - 1]);
            return;
        }
        return;
    }

    useEffect(() => { setState(true); }, [state])

    useEffect(() => {
        const tiles = images.map(x => <div key={x._id} id={x._id} onClick={handleClick.bind(undefined, x._id)}><ImageTile url={x.url} size="100px" /></div>);
        setImgTiles(tiles);
    }, [])

    return (
        <div className="slideshow">
            <div className="img-wrapper">
                <ArrowLeft className="slideshow-arrow img-nav" onClick={handleBack} />
                {state
                    ? <img src={img.url} className="slideshow-current-image fade-in" alt="slideshow" onClick={handleZoom} />
                    : null
                }
                <ArrowRight className="slideshow-arrow img-nav" onClick={handleNext} />
            </div>
            <div className="img-tiles-wrapper">
                <div className="img-tiles-wrapped-wrapper">
                    {imgTiles}
                </div>
            </div>
            <div className="modal" style={{ display }}>
                <span className="close" onClick={handleClose} >&times;</span>
                <div className="modal-content-wrapper">
                    <img className="modal-content" src={img.url} />
                </div>
                <div className="modal-nav">
                    <ArrowLeft className="slideshow-arrow" onClick={handleBack} />
                    <ArrowRight className="slideshow-arrow" onClick={handleNext} />
                </div>
            </div>
        </div>
    )
}

export default Slideshow;