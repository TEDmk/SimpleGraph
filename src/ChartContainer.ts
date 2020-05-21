import { Chart } from "./Chart";
import { XAxisCanvas } from "./canvas/xAxisCanvas";
import { Canvas } from "./canvas/Canvas";
import { TimeScale } from "./Scale";



export class ChartContainer {

    private charts: Array<Chart>;
    private containerElement: HTMLElement;
    private xAxisCanvas: XAxisCanvas;
    private mainTable: HTMLTableElement;
    private xAxisRow: HTMLElement;
    private timeScale: TimeScale;

    constructor(public divID: string, private width: number, private axisThickness: number){
        this.setTimeScale(
            {
                startDate: new Date(1589923542000), 
                pixelOffset: 20, 
                deltaPixel: 100, 
                deltaSecond: 60*30,
            }
        )
        this.charts = new Array<Chart>();
        this.containerElement = <HTMLElement>document.getElementById(divID);
        this.xAxisCanvas = new XAxisCanvas(this, width, axisThickness);
        this.mainTable = <HTMLTableElement>document.createElement('table');
        this.mainTable.id = `${divID}-table`;
        this.containerElement.appendChild(this.mainTable)
        this.addXAxis()
    }

    newChart(height: number) {
        let chart = new Chart(this, this.xAxisCanvas, this.width, height, this.axisThickness);
        this.charts.push(chart);
        this.update();
    }

    update() {
        this.mainTable.innerHTML = ""
        for (let chart of this.charts) {
            let chartRow = this.mainTable.insertRow();
            chartRow.appendChild(
                this.getCanvasInCell(chart.getChartCanvas())
            );
            chartRow.appendChild(
                this.getCanvasInCell(chart.getYAxisCanvas())
            );
        }
        this.addXAxis()
    }

    draw(){
        for (let chart of this.charts) 
            chart.draw();
        this.xAxisCanvas.draw();
    }

    private addXAxis() {
        let xAxisRow = this.mainTable.insertRow();
        let uselessCanvas = new XAxisCanvas(this, this.axisThickness, this.axisThickness)
        xAxisRow.appendChild(
            this.getCanvasInCell(this.xAxisCanvas)
        );
        xAxisRow.appendChild(
            this.getCanvasInCell(uselessCanvas)
        );
        this.xAxisCanvas.draw();
    }

    setTimeScale(timeScale: TimeScale){
        this.timeScale = timeScale;
    }

    getTimeScale(){
        return this.timeScale;
    }

    getCanvasInCell(canvas: Canvas) {
        let cell = document.createElement("td");
        cell.appendChild(canvas.getCanvas());
        return cell;
    }
}