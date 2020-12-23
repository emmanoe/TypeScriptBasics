class Point { //Pascal naming, upper case P
    x: number;
    y: number;

    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y:' + this.y);
    }
}

let point = new Point(10,20); // instance of a class
point.draw();