class Governor{
    constructor(name , age , state){
        this.name = name;
        this.age = age;
        this.state = state;
    }
     hello(){
        console.log(`Hello world my name is ${this.name} I'm a governor of ${this.state}.`);
    }
     GoToWork(){
        console.log( `Start wprk at 9 AM`);
    }
     goBackHome(){
        console.log("Go back Home at 5 PM");
    }
    
}
let Gover = new Governor("John",52,"NY")
console.log(Gover.name);
Gover.hello();
Gover.goBackHome();
Gover.GoToWork();


