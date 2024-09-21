//executes all statements without waiting for another block or another console.log statement.
console.log("Hiiiiiiiiiiii");
setTimeout=(()=>{
    console.log("this is aynchronous statement")
},4000)
console.log("helloooo");
console.log("Welcome to javascript");




async function displayInfo()
{
    let x=10+20;
    return x;
}
let Result=displayInfo();
result.then((data)=>
{
    console.log("result is: "+data)
})



async function displayInfo()
{
    let x=30,y=20;
    if(x<y){
        return "y value is biggest";
    }
    else{
        throw new Error;
    }    
}
let RESULT=displayInfo();
result.then((data)=>{
    console.log("result: "+data);
})
result.catch((data) =>
{
    console.log("data")
}
)


async function displayInfo()
{
    let x=await 10+20;
    return x;
}
let result=displayInfo();
result.then((data)=>{
    console.log("result is="+data);
})
result.catch((data)=>{
    console.log(data);
})