/*using constructor*/
class Student{
    constructor(){
        this.id=104;
        this.name='Manasa'
    }    
    showDetails(){
        console.log(this.id+" "+this.name)
    }
}
let p=new Student();
p.showDetails();


class Student{
    constructor(){
        this.id=104;
        this.name="Manasa";
    }
    showDetails(){
        console.log(this.id+" "+this.name)
    }
    displayInfo(){
        console.log("This is displayInfo method")
    }}
let s=new Student();
s.showDetails();
s.displayInfo();

/*using constructor with parameter*/
class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    showDetails(){
        console.log(this.id+" "+this.name)
    }
    displayInfo(){
        console.log("This is displayInfo method")
    }}
let x=new Student(2004, "Manasa");
x.showDetails();
x.displayInfo();

/*with out using constructor*/
class Student{
    id=1001;
    name="Srujan Kumar";
    showDetails(){
        console.log(this.id+" "+this.name)
    }
   }
let r=new Student();
r.showDetails();

