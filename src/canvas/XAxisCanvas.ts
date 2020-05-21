import { Canvas, Position } from "./Canvas";
import { TimeScale } from "../Scale";
import { ChartContainer } from "../ChartContainer"

export class XAxisCanvas extends Canvas {

    private timeScale: TimeScale;

    constructor(private chartContainer: ChartContainer, private width: number, private height: number, private divisionNumber:number = 20) {
        super(width, height);
    }

    setScale(scale: TimeScale){
        this.timeScale = scale;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let show = "hours";
        let bar_offset = 0;
        let offset = 5;
        let bar_width = this.width;

        this.drawLine([0, bar_offset], [bar_width, bar_offset])
        for(let i = 0; i <= this.divisionNumber; i++) {
            let pos = this.getTimeScale().pixelOffset + i * this.getTimeScale().deltaPixel;
            this.drawLine([pos, bar_offset], [pos, bar_offset + offset])
            let date = new Date(this.getTimeScale().startDate.getTime() + 1000 * i * this.getTimeScale().deltaSecond);
            if(show=="hours")
                this.drawText(this._dateToHours(date), [pos, 3 * offset])
            if(show=="day")
                this.drawText(this._dateToDate(date), [pos, 3 * offset])
        }
    }

    getTimeScale() {
        return this.chartContainer.getTimeScale();
    }

    private _dateToHours(date: Date) {
        function addZero(i: number) {
            return (i < 10) ? "0" + i : i;
        }
        return addZero(date.getHours()) + ":" + addZero(date.getMinutes())
    }

    private _dateToDate(date: Date) {
        function addZero(i: number) {
            return (i < 10) ? "0" + i : i;
        }
        return addZero(date.getDate()) + "/" + addZero(date.getMonth()+1) + "/" + addZero(date.getFullYear());
    }
    
}
