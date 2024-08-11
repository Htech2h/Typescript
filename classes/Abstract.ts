abstract class Employees {
    constructor(private firstName: string, private lastName: string) {

    }
    abstract getSalary(): number;
    getName():string{
        return `${this.firstName} ${this.lastName}`;
    }
}

class FullTimeEmployee extends Employees{
    constructor(firstName: string,lastName: string,private salary:number){
        super(firstName,lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

let htech = new FullTimeEmployee('htech','agen', 1000000);
console.log(htech.getSalary());
console.log(htech.getName());