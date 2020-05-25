import { Canvas, Position } from "./Canvas";
import { Chart } from "../Chart"
import { DataScale, TimeScale } from "../Scale";

class Margin {
    top: number = 0;
    bottom: number = 0;
    left: number = 0;
    right: number = 0;
}

export class ChartCanvas extends Canvas {
    
    constructor(private chart: Chart, private width: number, private height: number) {
        super(width, height);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw() {
        let timeScale = this.getTimeScale();
        let dataScale = this.getDataScale();
        for(let i=0; i < Math.ceil(this.height/dataScale.deltaPixel)+1; i++) {
            this.drawLine({x:0, y: dataScale.pixelOffset + i * dataScale.deltaPixel}, {x: this.width, y: dataScale.pixelOffset + i * dataScale.deltaPixel}, this.getStyle().color, 0.2)
        }
        for(let i=0; i < Math.ceil(this.width/timeScale.deltaPixel)+1; i++) {
            this.drawLine({x:timeScale.pixelOffset + i * timeScale.deltaPixel, y: 0}, {x: timeScale.pixelOffset + i * timeScale.deltaPixel, y: this.height}, this.getStyle().color, 0.2)
        }
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

    getDataScale() {
        return this.chart.getDataScale();
    }

    setDataScale(dataScale: DataScale) {
        return this.chart.setDataScale(dataScale);
    }

    getTimeScale() {
        return this.chart.getTimeScale();
    }
    
    setTimeScale(timeScale: TimeScale) {
        this.chart.setTimeScale(timeScale);
    }

    realToScreenPos(realPosition: Position) {
        let timeScale = this.getTimeScale();
        let dataScale = this.getDataScale();
        let screenPosition = {
            x: (realPosition.x - timeScale.startDate.getTime()) * timeScale.deltaPixel / (timeScale.deltaSecond * 1000) + timeScale.pixelOffset,
            y: (realPosition.y - dataScale.startValue) * dataScale.deltaPixel / dataScale.deltaValue + dataScale.pixelOffset,
        }
        return screenPosition;
    }

    realDrawLine(start: Position, end: Position, color: string = this.getStyle().color) {
        let screenStart = this.realToScreenPos(start);
        let screenEnd = this.realToScreenPos(end);
        return super.drawLine(
            screenStart,
            screenEnd,
            color,
        )
    }

    realDrawText(text: string, pos: Position, font: string = "10px Arial") {
        let screenPos = this.realToScreenPos(pos);
        return super.drawText(
            text,
            screenPos,
            font,
        )
    }

    realDrawBox(topLeft: Position, bottomRight: Position, strokeColor: string = null, backgroundColor: string = null, margin: Margin = new Margin()) {
        let screenTopLeft = this.realToScreenPos(topLeft);
        let screenBottomRight = this.realToScreenPos(bottomRight);
        screenTopLeft.x += margin.left;
        screenTopLeft.y += margin.top;
        screenBottomRight.x -= margin.right;
        screenBottomRight.y -= margin.bottom;
        return this.drawBox(screenTopLeft, screenBottomRight, strokeColor, backgroundColor)
    }
}
