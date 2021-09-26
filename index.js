class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    get circumference(){
        return this.diameter * Math.PI;
    }

    get area(){
        return (this.radius * this.radius) * Math.PI;
    }

    set diameter(newDiameter){
      this.radius = newDiameter / 2;
    }

    set circumference(newCircumference){
      this.diameter = newCircumference / Math.PI;
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea / Math.PI);
    }
}

let circle = new Circle(6);

console.log('Radius = ' + circle.radius); //=> 6
console.log('Diameter = ' + circle.diameter); //=> 12
console.log('Circumference = ' + circle.circumference); //=> 37.68 <-> 37.71
console.log('Area = ' + circle.area); //=> 113 <-> 113.1
console.log('');

console.log(circle.diameter = 36);
console.log(circle.radius); //=> 18
console.log('');

console.log(circle.circumference = 100);
console.log(circle.radius); //=> 15 <-> 16;
console.log('');

console.log(circle.area = 200);
console.log(circle.radius); //=> 7 <-> 8;
console.log('');