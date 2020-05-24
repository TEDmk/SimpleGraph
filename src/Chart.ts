import { ChartCanvas } from "./canvas/ChartCanvas";
import { YAxisCanvas } from "./canvas/YAxisCanvas";
import { XAxisCanvas } from "./canvas/xAxisCanvas";
import { ChartContainer } from "./ChartContainer";
import { DataScale, TimeScale, normalizeDataScale } from "./Scale";

export class Chart {
    
    private chartCanvas: ChartCanvas;
    private yAxisCanvas: YAxisCanvas;
    private dataScale: DataScale;

    constructor(private chartContainer: ChartContainer, private xAxisCanvas: XAxisCanvas, private width: number, private height: number, private axisThickness: number) {
        this.dataScale = {
            startValue: 0,
            pixelOffset: 0,
            deltaPixel: 100,
            deltaValue: 100,
            baseDeltaPixel: 100,
        }
        this.chartCanvas = new ChartCanvas(this, width, height);
        this.yAxisCanvas = new YAxisCanvas(this, axisThickness, height);
        this.draw();
    }

    getYAxisCanvas() {
        return this.yAxisCanvas;
    }

    getChartCanvas() {
        return this.chartCanvas;
    }

    getDataScale() {
        return this.dataScale;
    }

    setDataScale(dataScale: DataScale) {
        this.dataScale = normalizeDataScale(dataScale);
        this.draw();
    }

    getTimeScale() {
        return this.chartContainer.getTimeScale();
    }

    setTimeScale(timeScale: TimeScale) {
        this.chartContainer.setTimeScale(timeScale);
    }

    draw() {
        this.chartCanvas.draw();
        this.yAxisCanvas.draw();
    }
}
