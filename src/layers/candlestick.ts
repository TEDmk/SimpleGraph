import { ChartCanvas } from "../canvas/ChartCanvas"
import { Layer } from "./layer"

export class Candlestick {
    date: Date;
    deltaSecond: number;
    high: number;
    open: number;
    close: number;
    low: number;
    weightedAverage: number;
}

export class CandlestickLayer extends Layer {

    private candlestickList: Array<Candlestick>;

    constructor(candlestickList: Array<Candlestick> = new Array<Candlestick>()) {
        super();
        this.candlestickList = candlestickList;
    }

    update (candlestickList: Array<Candlestick>) {
        this.candlestickList = candlestickList;
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    add (candlestick: Candlestick) {
        this.candlestickList.push(candlestick);
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    draw(): any {
        if (!this.chartCanvas) {
            console.log("can't draw without ChartCanvas, please use setChartCanvas to set it.")
            return
        }
        for (let candlestick of this.candlestickList){
            let color = this.chartCanvas.getStyle().color;
            if(candlestick.open < candlestick.close) {
                color = this.chartCanvas.getStyle().greenColor;
            }
            if(candlestick.open > candlestick.close) {
                color = this.chartCanvas.getStyle().redColor;
            }
            this.chartCanvas.realDrawLine(
                {
                    x:candlestick.date.getTime(),
                    y:candlestick.high,
                },
                {
                    x:candlestick.date.getTime(),
                    y:candlestick.low,
                },
                color
            )
            this.chartCanvas.realDrawBox(
                {
                    x:candlestick.date.getTime() - candlestick.deltaSecond * 1000 / 2,
                    y:candlestick.open,
                },
                {
                    x:candlestick.date.getTime() + candlestick.deltaSecond * 1000 / 2,
                    y:candlestick.close,
                },
                null,
                color,
                {
                    left: 2,
                    right: 2,
                    top: 0,
                    bottom: 0,
                }
            )
        }
    }
}