import { Canvas, Position } from "./Canvas";
import { Chart } from "../Chart"
import { DataScale, TimeScale } from "../Scale";

export class ChartCanvas extends Canvas {
    
    constructor(private chart: Chart, private width: number, private height: number) {
        super(width, height);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.translate(this.screenPosition.x, this.screenPosition.y);
        this.drawText("CELIA", [100, 100])
        this.context.translate(-this.screenPosition.x, -this.screenPosition.y);
    }

    onDrag(previousPos: Position, currentPos: Position) : any {
        let x = this.screenPosition.x+currentPos.x-previousPos.x;
        let y = this.screenPosition.y+currentPos.y-previousPos.y;
        this.screenPosition = {x: x, y: y};
        this.mouseDownPos = currentPos;
        let currentDataScale = this.getDataScale();
        currentDataScale.pixelOffset = y;
        this.setDataScale(currentDataScale);
        let currenTimeScale = this.getTimeScale();
        currenTimeScale.pixelOffset = x;
        this.setTimeScale(currenTimeScale);
        this.chart.draw();
    }

    getDataScale(){
        return this.chart.getDataScale();
    }

    setDataScale(dataScale: DataScale){
        return this.chart.setDataScale(dataScale);
    }

    getTimeScale(){
        return this.chart.getTimeScale();
    }
    
    setTimeScale(timeScale: TimeScale){
        this.chart.setTimeScale(timeScale);
    }
}
