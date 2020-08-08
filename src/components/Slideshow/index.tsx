import React, { useState } from 'react';
import './styles.css';
import IUploadedImage from '../../interfaces/IUploadedImage';
import ImageTile from '../ImageTile';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import ISlideshow from '../../interfaces/ISlideshow';

function Slideshow({ images }: ISlideshow) {
    const [img, setImg] = useState<IUploadedImage>(images[0]);
    const [display, setDisplay] = useState<boolean>(false);

    function handleClick(id: string) {
        const image = images.find(x => x._id === id);

        if (!image) {
            return;
        }

        setImg(image);
    }

    function handleNext() {
        handleMove('next');
    }

    function handleBack() {
        handleMove('back');
    }

    function handleMove(type: string) {
        const index = images.findIndex(x => x._id === img._id);

        if (type === 'next' && index >= images.length - 1) {
            setImg(images[0]);
        } else if (type === 'next' && index < images.length - 1) {
            setImg(images[index + 1]);
        } else if (type === 'back' && index > 0) {
            setImg(images[index - 1]);
        } else if (type === 'back' && index === 0) {
            setImg(images[images.length - 1]);
        }
    }

    return (
        <div className="slideshow">
            <div className="img-wrapper">
                <ArrowLeft className="slideshow-arrow img-nav" onClick={handleBack} />
                <img
                    src={img.url}
                    className="slideshow-current-image fade-in"
                    alt="slideshow"
                    onClick={() => setDisplay(true)}
                />
                <ArrowRight className="slideshow-arrow img-nav" onClick={handleNext} />
            </div>
            <div className="img-tiles-wrapper">
                <div className="img-tiles-wrapped-wrapper">
                    {images.map(x => {
                        return <div
                            key={x._id}
                            id={x._id}
                            onClick={() => handleClick(x._id)}
                        >
                            <ImageTile id={x._id} url={x.url} size="100px" />
                        </div>
                    })}
                </div>
            </div>
            <div className="modal" style={{ display: display ? 'block' : 'none' }}>
                <span className="close" onClick={() => setDisplay(false)} >&times;</span>
                <div className="modal-content-wrapper">
                    <img className="modal-content" src={img.url} alt="modal-img" />
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