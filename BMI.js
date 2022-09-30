//creating class
class BMI {
    //initialising data in class
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    //Creating BMI method
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
// running code in cmd
let myBMI = new BMI(2,100);
console.log(myBMI.calculateBMI());