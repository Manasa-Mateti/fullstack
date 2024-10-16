/*function Test(Props){
    return(
        <div>
            Hello {Props.name} your working as {Props.role}
        </div>
    )
}
export default Test;


function Test(Props){
    return(
        <div>
            Hello {Props.name} your working as {Props.role}
            My Salary is{Props.salary}
        </div>
    )
}
export default Test;*/

const Test = () => {
    function display(){
        alert("This is one of the event in ReactJS")
    }
  return (
    <div>
        <button onClick={display}>Click here</button>
    </div>
  )
}
export default Test