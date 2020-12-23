class Point { //Pascal naming, upper case P

    constructor(private _x?: number, private _y?: number){
    }

    draw() {
        console.log('X: ' + this._x + ', Y:' + this._y);
    }

    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0')
        this._x = value;
    }
}

let point = new Point(10,20); // instance of a class
let x = point.x;
point.x = 10;
point.draw();