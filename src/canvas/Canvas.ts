enum MouseState {
    Drag = 2,
    Up = 1,
    Down = 0,
}

export class Position {
    x: number;
    y: number;
}

export abstract class Canvas {
    protected canvas: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;

    protected boundingRect;
    protected mouseDownPos: Position;

    protected mouseState: MouseState;

    protected screenPosition: Position;

    constructor(width: number, height: number) {
        let ratio = 2;

        this.canvas = <HTMLCanvasElement>document.createElement("canvas");
        this.context = this.canvas.getContext("2d");

        this.canvas.width = ratio * width;
        this.canvas.height = ratio * height;
        this.canvas.style.width = width.toString() + "px";
        this.canvas.style.height = height.toString() + "px";
        
        this.context.scale(ratio,ratio);
        this.context.imageSmoothingEnabled = false;
        this.context.textBaseline = "middle"; 

        this.mouseState = MouseState.Up;
 
        this.boundingRect = this.canvas.getBoundingClientRect();
        this.screenPosition = {x: 0, y: 0};
        this.canvas.addEventListener("mousedown", e => {this.onMouseChangeState(MouseState.Down, e);});
        this.canvas.addEventListener("mouseup", e => {this.onMouseChangeState(MouseState.Up, e);});
        this.canvas.addEventListener("mousemove", e => {this.onMouseMove(e);});
    }
    
    abstract draw(): any;

    getCanvas(): HTMLCanvasElement {
        return this.canvas
    }

    protected drawLine(start: [number, number], end: [number, number]) {
        this.context.beginPath();
        this.context.translate(0.5, 0.5);
        this.context.moveTo(start[0], start[1]);
        this.context.lineTo(end[0], end[1]);
        this.context.stroke();
        this.context.translate(-0.5, -0.5);
    }

    protected drawText(text: string, pos: [number, number], font: string = "10px Arial"){
        this.context.font = font;
        this.context.fillText(text, pos[0], pos[1]);
    }

    private onMouseChangeState(state: MouseState, e: MouseEvent) {
        let x = e.clientX - this.boundingRect.left;
        let y = e.clientY - this.boundingRect.top;

        // Getting a Click = UP -> DOWN -> UP
        if (state == MouseState.Up && this.mouseState == MouseState.Down)
            this.onClick({x: x, y: y});
        
        // Record position of Mouse Down in case of drag
        if (state == MouseState.Up){
            this.mouseDownPos = null;
        }
        if (state == MouseState.Down){
            this.mouseDownPos = {x: x, y: y};
        }

        if (!(this.mouseState == MouseState.Drag && state == MouseState.Down)) {
            this.mouseState = state;
        }
    }

    private onMouseMove(e: MouseEvent) {
        let x = e.clientX - this.boundingRect.left;
        let y = e.clientY - this.boundingRect.top;
        if(this.mouseState == MouseState.Down || this.mouseState == MouseState.Drag){
            this.mouseState = MouseState.Drag;
            this.onDrag(this.mouseDownPos, {x:x, y:y})
        }

    }

    onDrag(previousPos: Position, currentPos: Position) : any {
        this.screenPosition = {x:this.screenPosition.x+currentPos.x-previousPos.x, y:this.screenPosition.y+currentPos.y-previousPos.y};
        console.log(this.screenPosition)
        this.mouseDownPos = currentPos;
    }

    onClick(pos: Position) : any {
        console.log("CLICK")
    }
}
