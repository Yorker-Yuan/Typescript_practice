var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Cole', lastName: 'Gerrit' };
console.log(greeter(user));
var student = new Student("Cole", "M. ", "User");
console.log(student);
document.body.innerHTML = JSON.stringify(student);
