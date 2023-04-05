class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get diameter() {
    return 2 * this._radius;
  }

  area() {
    return Math.PI * this._radius ** 2;
  }

  circumference() {
    return 2 * Math.PI * this._radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.radius); // Output: 5
console.log(myCircle.diameter); // Output: 10
console.log(myCircle.area()); // Output: 78.53981633974483
console.log(myCircle.circumference()); // Output: 31.41592653589793

myCircle.radius = 10;
console.log(myCircle.radius); // Output: 10
console.log(myCircle.diameter); // Output: 20
console.log(myCircle.area()); // Output: 314.1592653589793
console.log(myCircle.circumference()); // Output: 62.83185307179586


class Marker {
  constructor(color, inkLevel) {
    this._color = color;
    this._inkLevel = inkLevel;
  }

  inputText(text) {
    let output = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        if (this._inkLevel >= 0.5) {
          output += `<span style="color:${this._color}">${text[i]}</span>`;
          this._inkLevel -= 0.5;
        } else {
          output += text[i];
        }
      } else {
        output += " ";
      }
    }
    return output;
  }
}

const myMarker = new Marker("blue", 50);
console.log(myMarker.inputText("Hello, world!")); // Output: <span style="color:blue">H</span><span style="color:blue">e</span><span style="color:blue">l</span><span style="color:blue">l</span><span style="color:blue">o</span>, <span style="color:blue">w</span><span style="color:blue">o</span><span style="color:blue">r</span><span style="color:blue">l</span><span style="color:blue">d</span><span style="color:blue">!</span>
console.log(myMarker._inkLevel); // Output: 25.5


class RefillableMarker extends Marker {
  refill() {
    this._inkLevel = 100;
  }
}

const myRefillableMarker = new RefillableMarker("red", 10);
console.log(myRefillableMarker.inputText("JavaScript is fun!")); // Output: <span style="color:red">J</span><span style="color:red">a</span><span style="color:red">v</span><span style="color:red">a</span><span style="color:red">S</span><span style="color:red">c</span><span style="color:red">r</span><span style="color:red">i</span><span style="color:red">p</span><span style="color:red">t</span> <span style="color:red">i



class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  
  getHtmlRow() {
    return `<tr><td>${this.name}</td><td>${this.position}</td><td>${this.salary}</td></tr>`;
  }
}


const employees = [
  new Employee('John Doe', 'Manager', 50000),
  new Employee('Jane Smith', 'Teller', 25000),
  new Employee('Bob Johnson', 'Loan Officer', 40000)
];
