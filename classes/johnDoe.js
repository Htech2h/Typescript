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
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullNames = function () {
        return "".concat(this.ssn, " ").concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('98-218-12712', 'htech', 'agen');
console.log(person.getFullNames());
