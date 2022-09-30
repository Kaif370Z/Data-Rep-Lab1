//creating class
class Vehicle{
    //initialising data in class
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //Creating Car method
    information(){
        console.log(`Make: ${this.make}. Hello World`);
        console.log(`Model: ${this.model}. `);
        console.log(`Year: ${this.year}. `);
        
    }
}

//gathering the information from extend and super from parent
class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make,model,year);
        this.doors = doors;
    }
    //grabs information from parent above using super 
    information(){
        super.information();
        console.log(`Doors: ${this.doors}.`);
    }
}
//doors now should be in console too
let myCar = new Car(`VW`, `Golf`, 2010,5);
myCar.information();

// let myVehicle = new Vehicle(`VW`,`Jetta`,`2022`);
// myVehicle.information();