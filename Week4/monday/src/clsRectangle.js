/*

class: Rectangle - creates instances of shape type rectangle 

The class is set to export so that it can be used in other
modules:

1) in the .html file:
  <script type="module" src="./src/main.js"></script>

2) export default class ....
  - export default is used to export a single class, function or primitive from a script file.

3) In the main.js file:
  import Rectangle from "../src/clsRectangle.js"
  - notice very carefully the (relative) path
*/

import Shape from "../src/clsShape.js";

// class Rectangle inherits from class Shape
 export default class Rectangle extends Shape{
  // allows us to follow how many rectangle objects we have instanced
  static count = 0;

  constructor(_width, _length, _name, _sides, _color){
    
    super(_name, _sides, _color)
    this.instance = ++Rectangle.count;
    this.width = _width;
    this.length = _length
    
  }

  get area(){
    return this.width * this.length
  }

  get shapeWidth () {
    return this.width
  }

  set shapeWidth(width){
    this.width = width;
  }

  get shapeLength() {
    return this.length 
  }

  set shapeLength(length){
    this.length = length;
  }

  isSquare(){
    if(this.width === this.length){
      return true
    }
    return false
  }

  //static, helper method does not rely on instance data
  static greaterArea(rect1, rect2){
    // determines which rectangle object has the greater area
    if (rect1.area === rect2.area){
      return "both rectangles have equal area"
    }else if (rect1.area > rect2.area) {
      return "rectangle 1 is bigger"
    } else {
      return "recatangle 2 is bigger"
    }
  }
}