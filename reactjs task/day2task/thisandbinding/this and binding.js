//1. Create object with name and object using this
const user = {
    name: "sarishma",
    greet() {
        console.log("Hello, " + this.name);
    }
};
user.greet(); // Output: Hello, sarishma

//2. Call method from another variable and see undefined
const obj = {
    name: "Alina",
    sayName() {
        console.log(this.name);
    }
};
// const fn = obj.sayName;
// fn(); // undefined (commented out to avoid error)

//3. Fix with bind
const fn = obj.sayName.bind(obj);
fn(); // Alina

//4. Create two objects and use same method with bind()
const person = {
    sayName() {
        console.log(this.name);
    }
};

const person1 = { name: "aditya" };
const person2 = { name: "rana" };

const p1Say = person.sayName.bind(person1);
const p2Say = person.sayName.bind(person2);

p1Say(); 
p2Say();
//5. Use this inside a click handler
const personObj = { 
    name: "ram",
    handleClick() {
        alert(this.name);  
    }
};

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
button1.addEventListener("click", personObj.handleClick.bind(person1)); 
button2.addEventListener("click", personObj.handleClick.bind(person2)); 