import { ChartCanvas } from "../canvas/ChartCanvas"

export abstract class Layer {

    protected chartCanvas: ChartCanvas;

    abstract draw(): any;

    setChartCanvas(chart: ChartCanvas) {
        this.chartCanvas = chart;
    }
}