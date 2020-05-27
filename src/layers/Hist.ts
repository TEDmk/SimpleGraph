import { Layer } from "./Layer";

export class Bar {
    x: number;
    delta: number;
    y: number;
}

export class HistogramStyle {
    color: string;
    opacity: number;
}

let histDefaultStyle: HistogramStyle = {
    color: "#fff",
    opacity: 1,
}

export class HistogramLayer extends Layer {

    constructor(private barList: Array<Bar> = new Array<Bar>(), private style = histDefaultStyle) {
        super();
        console.log(style);
    }

    update (barList: Array<Bar>) {
        this.barList = barList;
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    getMax(){
        return Math.max(...this.barList.map(x => x.y));
    }

    getMin(){
        return Math.min(...this.barList.map(x => x.y));
    }

    getFirstX() {
        return this.barList[0].x
    }

    getSecondX() {
        return this.barList[1].x
    }

    getLastX() {
        return this.barList[this.barList.length - 1].x
    }

    add (bar: Bar) {
        this.barList.push(bar);
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    draw(): any {
        if (!this.chartCanvas) {
            console.log("can't draw without ChartCanvas, please use setChartCanvas to set it.")
            return
        }
        for (let bar of this.barList)
            this.chartCanvas.realDrawBox(
                {
                    x: bar.x - bar.delta / 2,
                    y: bar.y,
                },
                {
                    x: bar.x + bar.delta / 2,
                    y: 0,
                },
                null,
                this.style.color,
                this.style.opacity
            )
    }
}