import Constellation from "./Constellation";
import Star from "./Star";


function createConstellation(canvas: HTMLCanvasElement) {
    return new Constellation(canvas);
}

function createStar(context: CanvasRenderingContext2D, width: number, height: number) {
    return new Star(context, width, height);
}

export {
    createConstellation,
    createStar
}