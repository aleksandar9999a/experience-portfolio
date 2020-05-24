import React, { useEffect, useRef } from 'react';
import { createConstellation } from './ConstellationAdapter';

function CustomConstellation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current != null) {
            createConstellation(canvasRef.current).init();
        }
    })

    return (<canvas ref={canvasRef} />);
}

export default CustomConstellation;
