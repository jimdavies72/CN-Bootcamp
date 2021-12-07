// let bunny = {
//   name: "sherlock",
//   age: 4,

//   birthday() {
//     this.age++;
//   },
// };


// this becomes this ==>


class Bunny {
  static count = 0

  constructor(_name, _age){
    this.name = _name;
    this.age = _age;
    this.instance = ++Bunny.count;
  }

  birthday = () =>{
    return this.age++
  }
}

const myBunny = new Bunny("sherlock", 4)
console.log(myBunny.birthday())