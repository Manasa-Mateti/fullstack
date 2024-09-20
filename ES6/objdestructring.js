//this is an example of object literal concept
let person={
    firstName : "Manasa",
    lastName : "Mateti",
    job : "learner"
}
console.log(person);
console.log(person.firstName);

//using new keyword
let Person=new Object();
Person.id=1004;
Person.name="Manasa";

console.log(Person.id+" "+Person.name);

//object destructuring
let Person={
    firstName:"Manasa",
    lastName:"Mateti"}
    const{firstName,lastName}=Person;
    console.log(firstName)
