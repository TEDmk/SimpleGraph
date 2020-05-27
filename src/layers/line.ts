import { Layer } from "./Layer"

export class Point {
    x: number;
    y: number;
}

export class LineStyle { 
    color: string;
    thickness: number;
    opacity: number;
}

let defaultLineStyle: LineStyle = {
    color: "#FFFFFF",
    thickness: 3,
    opacity: 1,
}

export class LineLayer extends Layer {

    constructor(private pointList: Array<Point> = new Array<Point>(), private lineStyle: LineStyle = defaultLineStyle) {
        super();
    }

    update (pointList: Array<Point>) {
        this.pointList = pointList;
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    getMax(){
        return Math.max(...this.pointList.map(x => x.y));
    }

    getMin(){
        return Math.min(...this.pointList.map(x => x.y));
    }

    getFirstX() {
        return this.pointList[0].x
    }

    getSecondX() {
        return this.pointList[1].x
    }

    getLastX() {
        return this.pointList[this.pointList.length - 1].x
    }

    add (point: Point) {
        this.pointList.push(point);
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    draw(): any {
        if (!this.chartCanvas) {
            console.log("can't draw without ChartCanvas, please use setChartCanvas to set it.")
            return
        }
        this.chartCanvas.realDrawLine(this.pointList, this.lineStyle.color, this.lineStyle.opacity, this.lineStyle.thickness)
    }
}
