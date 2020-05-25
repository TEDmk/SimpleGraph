import { Canvas, Position } from "./Canvas";
import { TimeScale } from "../Scale";
import { ChartContainer } from "../ChartContainer"

export class XAxisCanvas extends Canvas {

    private timeScale: TimeScale;

    constructor(private chartContainer: ChartContainer, private width: number, private height: number, private divisionNumber:number = 20) {
        super(width, height);
    }

    setScale(scale: TimeScale) {
        this.timeScale = scale;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let show = "hours";
        let bar_offset = 0;
        let offset = 5;
        let bar_width = this.width;
        let timeScale = this.getTimeScale()
        let divisionNumber = Math.ceil(this.width / timeScale.deltaPixel) + 1;
        this.drawLine({x:0, y:bar_offset}, {x:bar_width, y:bar_offset})
        for(let i = -1; i <= divisionNumber; i++) {
            let pos = timeScale.pixelOffset + i * timeScale.deltaPixel;
            this.drawLine({x:pos, y:bar_offset}, {x:pos, y:bar_offset + offset})
            let date = new Date(timeScale.startDate.getTime() + 1000 * i * timeScale.deltaSecond);
            this.drawText(this._dateToHours(date), {x:pos, y:3 * offset + 10}, "10px Arial" ,"center")
            this.drawText(this._dateToDate(date), {x:pos, y:3 * offset}, "10px Arial" ,"center")
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
    onDrag(previousPos: Position, currentPos: Position) : any {
        let deltaX = currentPos.x-previousPos.x;
        this.chartContainer.scaleTime(deltaX);
        
    }
}
