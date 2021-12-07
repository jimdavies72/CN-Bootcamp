class Pet {

  
}


class Bunny {
  static count = 0
  constructor(_name, _age, _color){
    this.name = _name;
    this.age = _age;
    this.color = _color;
    this.instance = ++Bunny.count;
  }

  get bunnyName () {
    return `name: ${this.name}`
  }
  
  set bunnyName (_name) {
    this.name = _name
  }

  displayBunny = () => {
    return `Bunny ${this.instance}: ${this.name} is ${this.age} years old and is ${this.color} in color`
  }

  increaseAge = () =>{
    this.age++
  }
}

// const bunny = []
// bunny[0] = new Bunny("John", 3, "brown")
// bunny[1] = new Bunny("Sarah", 2, "white");
// bunny[2] = new Bunny("Francis", 4, "black");

// for(let i = 0; i < bunny.length; i++){
//   console.log(bunny[i].displayBunny())
// }

// console.log(`number of bunny instances: ${Bunny.count}`)

const myBunny = new Bunny("Jim", 3, "Green")
myBunny.bunnyName = "fred"
console.log(myBunny.bunnyName)

