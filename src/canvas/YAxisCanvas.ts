import { Canvas, Position } from "./Canvas";
import { DataScale } from "../Scale";
import { Chart } from "../Chart"


export class YAxisCanvas extends Canvas {
    
    constructor(private chart: Chart, private width: number, private height: number, private divisionNumber:number = 20) {
        super(width, height);
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let bar_offset = 0;
        let offset = 4; 
        let bar_height = this.height;
        let dataScale = this.getDataScale();
        let divisionNumber = Math.ceil(this.height / dataScale.deltaPixel) + 1;
        this.drawLine({x:bar_offset, y:0}, {x:bar_offset, y:bar_height})
        for(let i = -1; i <= divisionNumber; i++) {
            let pos = dataScale.pixelOffset + i * dataScale.deltaPixel;
            this.drawLine({x:bar_offset, y:pos}, {x:bar_offset + offset, y:pos})
            let value = dataScale.startValue + i * dataScale.deltaValue;
            this.drawText(value.toString(), {x:bar_offset + 2 * offset, y:pos})
        }
    }

    getDataScale() {
        return this.chart.getDataScale();
    }

    onDrag(previousPos: Position, currentPos: Position) : any {
        let zoomRatio = 0.1
        let deltaY = currentPos.y-previousPos.y;
        let scale = this.chart.getDataScale();
        let midHeight = this.height / 2;
        let newDeltaPixel = scale.deltaPixel * (1 + deltaY * zoomRatio);
        scale.pixelOffset = midHeight - (midHeight - scale.pixelOffset) / scale.deltaPixel * newDeltaPixel;
        scale.deltaPixel = newDeltaPixel;
        this.chart.setDataScale(scale);
    }
}
