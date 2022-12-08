class person{
    constructor(name, height, age){
        this.name = name;
        this.height = height;
        this.age = age;
    }
    presentation(){
        return`Hello my name is ${this.name} i'm ${this.age} year old`
    }
    goToWork(){
        return` I'm going to work`
    }
    goToGym(){
        return`Work out every weekend`
    }


}
class PostalWorker extends person {

    constructor(name, height, age,job ){
        super(name,height,age);
        this.job = job;
    }
    Presnt(){
        console.log(`Hello my name is ${this.name} my work is ${this.job}`);
    }


}
class Chef extends person{
    constructor(name, height, age,job){
        super(name, height, age);
        this.job=job
    }
    hello (){
        console.log( `Hello my name is ${this.name} my job is ${this.job}`)
    }
}
let PostalWorker1 = new PostalWorker("mike",180,25,"Mail carrier");
let PostalWorker2 = new PostalWorker("Devid", 145, 31,"Mail handler");
let Chef1 = new Chef("Morris", 101, 29 , "Executive chef");
let chef2 = new Chef("Mark", 109,45,"Personal Chef");
console.log(PostalWorker1)
PostalWorker1.Presnt();
chef2.hello();