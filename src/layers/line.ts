import { Layer } from "./layer"

export class Point {
    x: number;
    y: number;
}

export class LineStyle { 
    color: string;
    thickness: number;
}

let defaultLineStyle: LineStyle = {
    color: "#FFFFFF",
    thickness: 3,
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
        console.log(this.pointList)
        for (let i = 0; i < this.pointList.length -1; i++) {
            let firstPoint = this.pointList[i];
            let secondPoint = this.pointList[i+1];
            this.chartCanvas.realDrawLine(firstPoint, secondPoint, this.lineStyle.color, this.lineStyle.thickness)
        }
    }
}
