import { StarCoordsInterface } from "../../interfaces/StarCoordsInterface";
import constellation_config from '../../configs/constellationConfig';

export default class Star {
    private width: number;
    private height: number;
    private context: CanvasRenderingContext2D | null;
    private stars: StarCoordsInterface[] = [];
    private constellation_config = constellation_config;

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context;
        this.width = width;
        this.height = height;
    }

    setWindowSize(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    private generateRandomCoords() {
        const x = Math.random() * this.width;
        const y = Math.random() * this.height;
        const vx = (this.constellation_config.velocity - (Math.random() * 0.5));
        const vy = (this.constellation_config.velocity - (Math.random() * 0.5));
        const radius = this.constellation_config.star.randomWidth ? (Math.random() * this.constellation_config.star.width) : this.constellation_config.star.width;
        return { x, y, vx, vy, radius };
    }

    create() {
        if (!this.context) { return; }
        for (let i = 0; i < this.constellation_config.length; i++) {
            const star = this.generateRandomCoords();
            this.createCustomStar(star);
            this.stars.push(star)
        }
    }

    private createCustomStar({ x, y, radius }: { x: number, y: number, radius: number }) {
        if (!this.context) { return; }
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, false);
        this.context.fill();
    }

    private increaseCoords(star: StarCoordsInterface) {
        if (star.y < 0 || star.y > this.height) {
            star.vy = -star.vy;
        } else if (star.x < 0 || star.x > this.width) {
            star.vx = -star.vx;
        }
        star.x += star.vx;
        star.y += star.vy;
        return star;
    }

    animate() {
        if (!this.context) { return; }
        this.context.clearRect(0, 0, this.width, this.height);
        this.stars.map(this.increaseCoords.bind(this)).forEach(this.createCustomStar.bind(this));
    }

    private isValidDistance(iStar: StarCoordsInterface, jStar: StarCoordsInterface) {
        return (iStar.x - jStar.x) < this.constellation_config.distance && (iStar.y - jStar.y) < this.constellation_config.distance && (iStar.x - jStar.x) > -this.constellation_config.distance && (iStar.y - jStar.y) > -this.constellation_config.distance;
    }

    private isValidRadius(iStar: StarCoordsInterface, x: number, y: number) {
        return (iStar.x - x) < this.constellation_config.radius && (iStar.y - y) < this.constellation_config.radius && (iStar.x - x) > -this.constellation_config.radius && (iStar.y - y) > -this.constellation_config.radius;
    }

    private writeLine(iStar: StarCoordsInterface, jStar: StarCoordsInterface) {
        if (!this.context) { return; }
        this.context.beginPath();
        this.context.moveTo(iStar.x, iStar.y);
        this.context.lineTo(jStar.x, jStar.y);
        this.context.stroke();
        this.context.closePath();
    }

    private initWriting(starOne: StarCoordsInterface, starTwo: StarCoordsInterface) {
        if (
            this.context &&
            (
                this.isValidDistance(starOne, starTwo) &&
                (
                    this.isValidRadius(starOne, this.width * 0.1, this.height * 0.3) ||
                    this.isValidRadius(starOne, this.width * 0.8, this.height * 0.6)
                )
            )
        ) {
            this.writeLine(starOne, starTwo);
            this.context.lineWidth = this.constellation_config.line.width;
        }
    }

    line() {
        if (!this.context) { return; }
        this.stars.forEach(starOne => this.stars.forEach(starTwo => this.initWriting(starOne, starTwo)));
    }
}