var Employee = /** @class */ (function () {
    function Employee(name, lastName, title) {
        this.name = name;
        this.lastName = lastName;
        this.title = title;
        Employee.headcount++;
    }
    Employee.getCount = function () {
        return Employee.headcount;
    };
    Employee.headcount = 0;
    return Employee;
}());
var worker = new Employee('htech', 'agen', 'ceo');
var worker2 = new Employee('htech', 'agen', 'ceo');
console.log(Employee.getCount());
