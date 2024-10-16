
//import './App.css'

/*import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Login from './Login';
import About from './About';
import Signup from './Signup';

function Header(){
  return(
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/">About</Link></li>
      <li><Link to="/">Signup</Link></li> 
    </ul>
  )
}
function App(){
  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App




//import Test from  './test'

/*function App() {
  
  return (
    <div>
      <h2>Welcome to functional component</h2>
     <h3 style={{color:'red'}}>This is inline stylesheet mechanism</h3>
    </div>
  )
}

import { Component } from "react";
class App extends Component{
  render(){
    return(
      <div>
        <h2>This is Class component</h2>
        <Test/>
      </div>
    )
  }

}
class Test extends Component{
  render(){
    return(
      <div>
        <h2>This is Test class component</h2>
      </div>
    )
  }
}


import './App.css'
function App(){
  return(
    <div>
     <button type="button" className="btn btn-primary">Primary</button>
     <button type="button" className="btn btn-warning">Warning</button>
    </div>
  )
}

function App(){
  return(
  <div>
    <img src={"img1.jpeg"} height={200} width={200}/>
    <br/>
    <br/>
    <img src={"src/assets/img1.jpeg"} height={200} width={200}/>
  </div>
  )
}
export default App;

import Test from './components/Test';
function App(){
  return(
    <div>
     <Test name="Ajayreddy" role="Trainer"/>
    </div>
  )
}
export default App;

import Test from './components/Test'

function App(){
  return(
    <div>
     <Test name="Ajayreddy" role="Trainer"/>
     <Test salary="150000"/>
    </div>
  )
}
export default App;


const App = () => {
  return (
    <div>
      <h2>This is Jsx code with arrow function</h2>
    </div>
  )
}

export default App


import Test from "./components/Test"
const App = () => {
  return (
    <div>
      <Test/>
    </div>
  )
}

export default App

import {useState} from 'react'
const App = () => {
  const[name,setName]=useState("Manasa.Mateti")
  return (
    <div>
      <center>
        <h1>{name}</h1>
        <br/>
        <button onClick={()=>setName("Manasa.Mateti")}>useState</button>
      </center>
    </div>
  )
}

export default App*/


import {useState} from 'react'

const App = () => {
  const [count,setCount]=useState(4);
  return (
    <div>
      <center>
        <h1>{count}</h1>
        <br/>
        <button onClick={()=>setCount(count+1)}>useState</button>
      </center>
    </div>
  )
}

export default App