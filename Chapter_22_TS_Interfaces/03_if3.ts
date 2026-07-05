interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 4, y: 5 };
// point.x = 33; -- readonly no updation
console.log(point);