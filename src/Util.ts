import { CandlestickLayer } from "./layers/Candlestick";
import { TimeScale } from "./Scale";
import { Chart } from "./Chart";
import { Layer } from "./layers/Layer";

export enum Location {
    START = 1,
    END = 2,
}

export class Util {

    static getDataScaleFromLayer(chart: Chart, layer: Layer, tickNumber: number = 10) {
        let max = layer.getMax();
        let min = layer.getMin();
        let height = chart.getHeight();
        return {
            startValue: max,
            pixelOffset: 0,
            deltaValue: (min - max) / tickNumber,
            deltaPixel: height / tickNumber,
            baseDeltaPixel: height / tickNumber,
        };
    }

    static getTimeScaleFromLayer(chart: Chart, layer: Layer, location: Location = Location.END, numberOfValuePerMeasure: number = 1, tickNumber: number = 20) {
        let first = layer.getFirstX();
        let second = layer.getSecondX();
        let last = layer.getLastX();
        let width = chart.getWidth();
        let startDate: number;
        let deltaSecond = (second - first) / 1000 * numberOfValuePerMeasure
        if(location == Location.START){
            startDate = first;
        }
        else if(location == Location.END) {
            startDate = last - deltaSecond * (tickNumber - 1) * 1000;
        }
        return {
            startDate: new Date(startDate),
            pixelOffset: 0,
            deltaSecond: deltaSecond,
            deltaPixel: width / tickNumber,
            baseDeltaPixel: width / tickNumber,
        };
    }
}