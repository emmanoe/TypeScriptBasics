class Point { //Pascal naming, upper case P

    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('X: ' + this.x + ', Y:' + this.y);
    }
}

let point = new Point(10,20); // instance of a class
point.draw();