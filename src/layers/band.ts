import { Layer } from "./Layer";
import { LineStyle } from "./Line";
import { Position } from "../canvas/Canvas";

export class BandStep {
    x: number;
    top: number;
    bottom: number;
}

export class BandStyle { 
    color: string;
    opacity: number;
}

export let defaultBandStyle = {
    color: "#FF0000",
    opacity: 0.5,
}

export class BandLayer extends Layer {

    constructor(private stepList: Array<BandStep> = new Array<BandStep>(), private bandStyle: BandStyle = defaultBandStyle) {
        super();
    }

    update (stepList: Array<BandStep>) {
        this.stepList = stepList;
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    add (step: BandStep) {
        this.stepList.push(step);
        if(this.chartCanvas)
            this.chartCanvas.draw();
    }

    getMax(){
        return Math.max(...this.stepList.map(x => x.top));
    }

    getMin(){
        return Math.min(...this.stepList.map(x => x.bottom));
    }

    getFirstX() {
        return this.stepList[0].x
    }

    getSecondX() {
        return this.stepList[1].x
    }

    getLastX() {
        return this.stepList[this.stepList.length - 1].x
    }

    draw(): any {
        if (!this.chartCanvas) {
            console.log("can't draw without ChartCanvas, please use setChartCanvas to set it.")
            return
        }
        for (let i=0; i < this.stepList.length - 1; i++){
            let firstStep = this.stepList[i];
            let secondStep = this.stepList[i+1];
            let posList = this.bandStepToPositionArray(firstStep, secondStep);
            this.chartCanvas.realDrawPolygon(posList, this.bandStyle.color, this.bandStyle.opacity)
        }
    } 

    private bandStepToPositionArray(firstStep: BandStep, secondStep: BandStep): Array<Position> {
        return [
            {
                x: firstStep.x,
                y: firstStep.top
            },
            {
                x: secondStep.x,
                y: secondStep.top
            },
            {
                x: secondStep.x,
                y: secondStep.bottom
            },
            {
                x: firstStep.x,
                y: firstStep.bottom
            },
        ]
    }
}