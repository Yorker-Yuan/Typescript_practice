interface Person{
  firstName:string,
  lastName:string,
}

class Student{
  fullName:string;
  constructor(public firstName,public middleInitial,public lastName){
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

function greeter(person:Person){
  return `Hello, ${person.firstName} ${person.lastName}`;
}
let user = {firstName:'Cole',lastName:'Gerrit'};
console.log(greeter(user));

let student = new Student("Cole","M. ","User");
console.log(student);

// document.body.innerHTML = JSON.stringify(student);