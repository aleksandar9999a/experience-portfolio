/**
 * External dependencies.
 */
import React, { useEffect, useRef } from 'react';

/**
 * Internal dependencies.
 */
import { createConstellation } from './ConstellationAdapter';

function Constellation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current != null) {
            createConstellation(canvasRef.current).init();
        }
    })

    return (<canvas ref={canvasRef} />);
}

export default Constellation;
