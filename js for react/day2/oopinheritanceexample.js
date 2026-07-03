// parent class
class vehicle{
    constructor(vName){
        this.name=vName;
    }

    move(){
        console.log(this.name+" is moving");

    }

    stop(){
        console.log(this.name+" is stopped");
    }
}

//child class:inherit from parent class:vehicle using extends keyword
 class bike extends vehicle{
    constructor(bikeName){
        // calling parent class constructor
        super(bikeName);
        
    }

 }
let mt15=new bike("MT15");
mt15.move();
mt15.stop();