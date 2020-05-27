import { ChartCanvas } from "../canvas/ChartCanvas"
import { Layer } from "./Layer"

export class Candlestick {
    date: Date;
    deltaSecond: number;
    high: number;
    open: number;
    close: number;
    low: number;
    weightedAverage: number;
}

export class CandlestickStyle {
    neutralColor: string; 
    greenColor: string;
    redColor: string;
    opacity: number;
    shadowThickness: number;
}

export let defaultCandlestickStyle: CandlestickStyle = {
    neutralColor: "#D0D0D0",
    greenColor: "#038C3E",
    redColor: "#BF452A",
    opacity: 1,
    shadowThickness: 1,
}

export class CandlestickLayer extends Layer {

    private candlestickList: Array<Candlestick>;

    constructor(candlestickList: Array<Candlestick> = new Array<Candlestick>(), private candlestickStyle: CandlestickStyle = defaultCandlestickStyle) {
        super();
        this.candlestickList = candlestickList;
    }

    getMax() {
        return Math.max(...this.candlestickList.map(x => x.high));
    }

    getMin() {
        return Math.min(...this.candlestickList.map(x => x.low));
    }

    getFirstX() {
        return this.candlestickList[0].date.getTime()
    }

    getSecondX() {
        return this.candlestickList[1].date.getTime()
    }

    getLastX() {
        return this.candlestickList[this.candlestickList.length - 1].date.getTime()
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
            let color = this.candlestickStyle.neutralColor;
            if(candlestick.open < candlestick.close) {
                color = this.candlestickStyle.greenColor;
            }
            if(candlestick.open > candlestick.close) {
                color = this.candlestickStyle.redColor;
            }
            this.chartCanvas.realDrawLine(
                [{
                    x:candlestick.date.getTime(),
                    y:candlestick.high,
                },
                {
                    x:candlestick.date.getTime(),
                    y:candlestick.low,
                }],
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
                this.candlestickStyle.opacity,
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