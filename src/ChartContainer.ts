import { Chart } from "./Chart";
import { XAxisCanvas } from "./canvas/XAxisCanvas";
import { Canvas } from "./canvas/Canvas";
import { TimeScale, normalizeTimeScale } from "./Scale";


export class ChartContainer {

    private charts: Array<Chart>;
    private containerElement: HTMLElement;
    private xAxisCanvas: XAxisCanvas;
    private mainTable: HTMLTableElement;
    private xAxisRow: HTMLElement;
    private timeScale: TimeScale;

    constructor(public divID: string, private width: number, private axisThickness: number) {
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
        return chart
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

    draw() {
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
    }

    setTimeScale(timeScale: TimeScale, draw: boolean = true) {
        this.timeScale = normalizeTimeScale(timeScale);
        if(draw)
            this.draw();
    }

    getTimeScale() {
        return this.timeScale;
    }

    getCanvasInCell(canvas: Canvas) {
        let cell = document.createElement("td");
        cell.appendChild(canvas.getCanvas());
        return cell;
    }
}