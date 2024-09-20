//simple parameters
function calculate(a,b)
{
    console.log(a+b)
}
calculate(10,20)

//using default parameters
function calculate(a,b=20)
{

    console.log(a+b)
}
calculate(10);