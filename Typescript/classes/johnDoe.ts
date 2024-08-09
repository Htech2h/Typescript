/*function Person(ssn,firstName,lastName){
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullNames = function(){
    return `${this.firstName} ${this.lastName}`;
}
let person = new Person('171-28-0926', 'htech','agen');
console.log(person.getFullNames());*/
//////////////////////////////////////

class Person{
    private ssn:any;
    private firstName: string;
    private lastName: string;
    constructor(ssn:any, firstName:string, lastName:string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullNames(){
        return `${this.ssn} ${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('98-218-12712','htech','agen');
console.log(person.getFullNames());
