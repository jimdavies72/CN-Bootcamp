class Car{

  static count = 0;

  constructor(manufacturer, model, color){
    this._manufacturer = manufacturer;
    this._model = model;
    this._color = color;
    this._currentSpeed = 0;
    this._instance = ++Car.count;
  }

  get manufacturer(){
    return this._manufacturer;
  }

  set manufacturer(manufacturer){
    this._manufacturer = manufacturer
  }

  get model(){
    return this._model;
  }

  set model(model){
    this._model = model;
  }

  get color(){
    return this._color
  }

  set color(color){
    this._color = color;
  }

  get thisCar() {
    return `${this._manufacturer} - ${this._model}, color: ${this._color}`
  }

  get currentSpeed(){
    return this._currentSpeed
  }

  set currentSpeed(toSpeed){
    this._currentSpeed = toSpeed
  }
  
  accelerate(toSpeed) {
    const accelerate = `Accelerating from: ${this._currentSpeed}kph to ${toSpeed}kph}`
    this._currentSpeed = toSpeed;
    return accelerate;
  }

  brake() {
    if (this.currentSpeed === 0){
      return 'You are not moving, hitting the brake pedal will get you nowhere!'
    }else {
      const brake = `braking from ${this.currentSpeed}kph to 0kph`
      this.currentSpeed = 0
      return brake
    }
  }

  turn(direction){
    if (direction === "left"){
      return "indicating left"
    }
    return "indicating right"
  }

  beep() {
    return "Beep! Beep!"
  }

}

 const ford = new Car("Ford", "Focus", "Blue")
 const nissan = new Car("Nissan", "Micra", "White");
 const fiat = new Car("Fiat", "500", "White");

// console.log(`${ford.manufacturer} - ${ford.model}, color: ${ford.color}`);
// console.log(ford.thisCar)

// console.log(`${nissan.thisCar} is ${nissan.turn("left")}`);

// console.log (`${fiat.thisCar} - ${fiat.accelerate(30)}`)
// console.log(`${fiat.thisCar} - ${fiat.accelerate(60)}`);
console.log(`${fiat.thisCar} - ${fiat.brake()}`)