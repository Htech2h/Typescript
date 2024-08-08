function getFullName(person) {
    return {
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age,
        getFullNames: function () {
            return "".concat(this.firstName, " ").concat(this.lastName) + (this.age ? " ".concat(this.age) : '');
        }
    };
}
var person = getFullName({
    firstName: 'January',
    lastName: 'February',
    age: 19,
    getFullNames: function () { return ''; } // placeholder, will be overridden
});
console.log(person.getFullNames());
console.log(person.age);
var Format;
function format(str, isUpperCase) {
    return isUpperCase ? str.toUpperCase() : str.toLowerCase();
}
console.log(format('HEY', false));
