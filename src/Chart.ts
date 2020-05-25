import { ChartCanvas } from "./canvas/ChartCanvas";
import { YAxisCanvas } from "./canvas/YAxisCanvas";
import { XAxisCanvas } from "./canvas/xAxisCanvas";
import { ChartContainer } from "./ChartContainer";
import { DataScale, TimeScale, normalizeDataScale } from "./Scale";
import { Layer } from "./layers/layer"


export class Chart {
    
    private chartCanvas: ChartCanvas;
    private yAxisCanvas: YAxisCanvas;
    private dataScale: DataScale;
    private layerList: Array<Layer>;


    constructor(private chartContainer: ChartContainer, private xAxisCanvas: XAxisCanvas, private width: number, private height: number, private axisThickness: number) {
        this.chartCanvas = new ChartCanvas(this, width, height);
        this.yAxisCanvas = new YAxisCanvas(this, axisThickness, height);
        this.layerList = new Array<Layer>();
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

    setTimeScale(timeScale: TimeScale, draw: boolean = true) {
        this.chartContainer.setTimeScale(timeScale);
        if(draw)
            this.draw();
    }

    addLayer(layer: Layer) {
        layer.setChartCanvas(this.chartCanvas);
        this.layerList.push(layer);
        this.draw()
    }

    draw() {
        this.chartCanvas.clear();
        this.chartCanvas.draw();
        this.yAxisCanvas.draw();
        for(let layer of this.layerList) {
            layer.draw();
        }
    }
}
