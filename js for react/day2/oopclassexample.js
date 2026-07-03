class Car{
    // initial setup of the class car
    constructor(name,model,year,color){
        this.name=name;
        this.model=model;
        this.year=year;
        this.color=color;
    }
     move() {
        console.log(this.name+" is moving")
     }
}
 let myCar= new Car("tesla","model3","2020","red");
 myCar.move()
 console.log("color=",myCar.color);