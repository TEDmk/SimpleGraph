import { ChartCanvas } from "../canvas/ChartCanvas"

export abstract class Layer {


    abstract draw(chartCanvas: ChartCanvas): any;

}