import { Chart } from "../Chart"
import { ChartCanvas } from "../canvas/ChartCanvas"
import { Layer } from "./layer"

export class Candlestick {
    date: Date;
    high: number;
    open: number;
    close: number;
    low: number;
    weightedAverage: number;
}

export class CandlestickLayer extends Layer {

    constructor(private chart: Chart, private candlestickList: Array<Candlestick> = null) {
        super()
    }

    update (candlestickList: Array<Candlestick>) {
        this.candlestickList = candlestickList;
    }

    add (candlestick: Candlestick) {
        this.candlestickList.push(candlestick)
    }

    draw(chartCanvas: ChartCanvas): any {
        
    }
}