/*using strings*/
let collegeN = new String("cdu university");
console.log(collegeN)

let collegeName ="chaitanys deemed university";
console.log(collegeName)
console.log(collegeName.length);
console.log(collegeName.toUpperCase());
console.log(collegeName.toLowerCase());
console.log(collegeName.charAt("2"));

let cName ="CDC college";
console.log(cName.startsWith('cdc'));
console.log(cName.startsWith('CDC'))

console.log(cName.endsWith('college'));
console.log(cName.endsWith('College'));

console.log(cName.includes('college'));
console.log(cName.includes('COLLEGE'));

console.log(cName.repeat('3'));

/*using backtrack*/
let CName ="CDC college";
console.log(`Hi everyone i studied in ${CName}`);