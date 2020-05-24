import { StarCoordsInterface } from "../../interfaces/StarCoordsInterface";
import constellation_config from '../../configs/constellationConfig';

export default class Star {
    private x: number;
    private y: number;
    private vx: number;
    private vy: number;
    private radius: number;
    private width: number;
    private height: number;
    private context: CanvasRenderingContext2D | null;
    private stars: StarCoordsInterface[] = [];
    private constellation_config = constellation_config;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (this.constellation_config.velocity - (Math.random() * 0.5));
        this.vy = (this.constellation_config.velocity - (Math.random() * 0.5));
        this.radius = this.constellation_config.star.randomWidth ? (Math.random() * this.constellation_config.star.width) : this.constellation_config.star.width;
    }

    private generateRandomCoords() {
        this.x = Math.random() * this.width;
        this.y = Math.random() * this.height;
        this.vx = (this.constellation_config.velocity - (Math.random() * 0.5));
        this.vy = (this.constellation_config.velocity - (Math.random() * 0.5));
    }

    create() {
        if (!this.context) { return; }
        for (let i = 0; i < this.constellation_config.length; i++) {
            this.generateRandomCoords();
            this.createCustomStar(this.x, this.y, this.radius);
            this.stars.push({
                x: this.x,
                y: this.y,
                vx: this.vx,
                vy: this.vy,
                radius: this.radius
            })
        }
    }

    private createCustomStar(x: number, y: number, r: number) {
        if (!this.context) { return; }
        this.context.beginPath();
        this.context.arc(x, y, r, 0, Math.PI * 2, false);
        this.context.fill();
    }

    animate() {
        if (!this.context) { return; }
        this.context.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            if (star.y < 0 || star.y > this.height) {
                star.vy = -star.vy;
            } else if (star.x < 0 || star.x > this.width) {
                star.vx = -star.vx;
            }
            star.x += star.vx;
            star.y += star.vy;
            this.createCustomStar(star.x, star.y, star.radius);
        }
        
    }

    line() {
        if (!this.context) { return; }
        for (let i = 0; i < this.stars.length; i++) {
            for (let j = 0; j < this.stars.length; j++) {
                let iStar = this.stars[i];
                let jStar = this.stars[j];
                
                if ((iStar.x - jStar.x) < this.constellation_config.distance && (iStar.y - jStar.y) < this.constellation_config.distance && (iStar.x - jStar.x) > -this.constellation_config.distance && (iStar.y - jStar.y) > -this.constellation_config.distance) {
                    if ((iStar.x - this.constellation_config.position.x) < this.constellation_config.radius && (iStar.y - this.constellation_config.position.y) < this.constellation_config.radius && (iStar.x - this.constellation_config.position.x) > -this.constellation_config.radius && (iStar.y - this.constellation_config.position.y) > -this.constellation_config.radius) {
                        this.context.beginPath();
                        this.context.moveTo(iStar.x, iStar.y);
                        this.context.lineTo(jStar.x, jStar.y);
                        this.context.stroke();
                        this.context.closePath();
                    }
                    if ((iStar.x - this.width * 0.5) < this.constellation_config.radius && (iStar.y - this.height * 0.5) < this.constellation_config.radius && (iStar.x - this.width * 0.5) > -this.constellation_config.radius && (iStar.y - this.height * 0.5) > -this.constellation_config.radius) {
                        this.context.lineWidth = this.constellation_config.line.width * 1.5;
                        this.context.beginPath();
                        this.context.moveTo(iStar.x, iStar.y);
                        this.context.lineTo(jStar.x, jStar.y);
                        this.context.stroke();
                        this.context.closePath();
                    }
                    this.context.lineWidth = this.constellation_config.line.width
                }
            }
        }
    }
}