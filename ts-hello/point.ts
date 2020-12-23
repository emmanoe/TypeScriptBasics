export class Point { //Pascal naming, upper case P //export = module class

    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('X: ' + this.x + ', Y:' + this.y);
    }
}
