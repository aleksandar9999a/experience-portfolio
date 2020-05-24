import constellation_config from '../../configs/constellationConfig';
import { createStar } from './ConstellationAdapter';
import Star from './Star';

export default class Constellation {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private constellation_config = constellation_config;
    private createStar = createStar;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }

    private setCanvas() {
        this.canvas.width = this.constellation_config.width;
        this.canvas.height = this.constellation_config.height;
    };

    private setContext() {
        if (!this.context) { return; }
        this.context.fillStyle = this.constellation_config.star.color;
        this.context.strokeStyle = this.constellation_config.line.color;
        this.context.lineWidth = this.constellation_config.line.width;
    };

    private setInitialPosition() {
        if (!this.constellation_config || !this.constellation_config.hasOwnProperty('position')) {
            this.constellation_config.position = {
                x: this.canvas.width * 0.5,
                y: this.canvas.height * 0.5
            };
        }
    };

    private loop(callback: any) {
        callback()
        requestAnimationFrame(this.loop.bind(this, callback));
    };

    private subscribeForResize(star: Star) {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.setContext();
            star.setWindowSize(window.innerWidth, window.innerHeight);
        })
    }
    init() {
        if (!this.context) { return; }
        this.setCanvas();
        this.setContext();
        this.setInitialPosition();
        const star = this.createStar(this.context, this.canvas.width, this.canvas.height);
        star.create();
        this.subscribeForResize(star);
        this.loop(star.animate.bind(star));
        this.loop(star.line.bind(star));
    };
}