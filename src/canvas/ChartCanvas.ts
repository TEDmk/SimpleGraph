import { Canvas, Position } from "./Canvas";
import { Chart } from "../Chart"
import { DataScale, TimeScale } from "../Scale";

export class ChartCanvas extends Canvas {
    
    constructor(private chart: Chart, private width: number, private height: number) {
        super(width, height);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawText(
            "HELLO", 
            this.realToScreenPos({
                x: 1589923542000, 
                y: 100,
            })
        );
    }

    onDrag(previousPos: Position, currentPos: Position) : any {
        let deltaX = currentPos.x-previousPos.x;
        let x = this.screenPosition.x+deltaX;
        let deltaY = currentPos.y-previousPos.y;
        let y = this.screenPosition.y+deltaY;
        this.screenPosition = {x: x, y: y};
        let currentDataScale = this.getDataScale();
        currentDataScale.pixelOffset = currentDataScale.pixelOffset + deltaY;
        this.setDataScale(currentDataScale);
        let currenTimeScale = this.getTimeScale();
        currenTimeScale.pixelOffset = currenTimeScale.pixelOffset + deltaX;
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

    realToScreenPos(realPosition: Position){
        let timeScale = this.getTimeScale();
        let dataScale = this.getDataScale();
        let screenPosition = {
            x: (realPosition.x - timeScale.startDate.getTime()) * timeScale.deltaPixel / (timeScale.deltaSecond * 1000) + timeScale.pixelOffset,
            y: (realPosition.y - dataScale.startValue) * dataScale.deltaPixel / dataScale.deltaValue + dataScale.pixelOffset,
        }
        return screenPosition;
    }
}
