class Point { //Pascal naming, upper case P
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y:' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point(); // instance of a class
point.x = 1;
point.y = 2;
point.draw();