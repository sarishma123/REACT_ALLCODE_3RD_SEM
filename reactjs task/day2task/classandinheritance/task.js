

// 1. Create class Vehicle
class Vehicle {
  // 2. Constructor
  constructor(name) {
    this.name = name;
  }

  // 3. Method drive()
  drive() {
    return `${this.name} is driving`;
  }
}

// 4. Extend class Bike
class Bike extends Vehicle {
  // 5. Override drive()
  drive() {
    return `${this.name} bike is riding`;
  }
}

// 6. Create class Student
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks; // marks property
  }

  stuDetails() {
    return `${this.name} scored ${this.marks} marks`;
  }
}

// 7. Inherit class Programmer
class Programmer extends Student {
  constructor(name, marks, language) {
    // 8. Call parent constructor using super()
    super(name, marks);
    this.language = language;
  }

  stuDetails() {
    // 9. Call parent method using super()
    return `${super.stuDetails()} and codes in ${this.language}`;
  }
}


