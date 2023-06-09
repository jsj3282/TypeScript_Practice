interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    constructor(public radius: number) {
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const circle: Circle = new Circle(5);
const rectangle: Rectangle = new Rectangle(2, 5);
const shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.getArea());
});


