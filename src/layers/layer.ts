import { ChartCanvas } from "../canvas/ChartCanvas"

export abstract class Layer {

    protected chartCanvas: ChartCanvas;

    abstract draw(): any;

    abstract getMax(): any;
    abstract getMin(): any;

    abstract getFirstX(): any;
    abstract getSecondX(): any;
    abstract getLastX(): any;

    setChartCanvas(chart: ChartCanvas) {
        this.chartCanvas = chart;
    }
}