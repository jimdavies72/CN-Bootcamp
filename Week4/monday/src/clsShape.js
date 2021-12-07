
//export class Shape for reuse
export default class Shape {
  
  constructor(_name, _sides, _color){
    this.name = _name;
    this.numberOfSides = _sides;
    this.color = _color;
  }

  whatShape(){
    return `Shape: ${this.name} has ${this.side} sides and is ${this.color} in color`
  }

}