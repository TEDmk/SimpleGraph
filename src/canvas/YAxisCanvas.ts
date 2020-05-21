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

        this.drawLine([bar_offset, 0], [bar_offset, bar_height])
        for(let i = 0; i <= this.divisionNumber; i++) {
            let pos = this.getDataScale().pixelOffset + i * this.getDataScale().deltaPixel;
            this.drawLine([bar_offset, pos], [bar_offset + offset, pos])
            let value = this.getDataScale().startValue + i * this.getDataScale().deltaValue;
            this.drawText(value.toString(), [bar_offset + 2 * offset, pos])
        }
    }

    getDataScale(){
        return this.chart.getDataScale();
    }

}
