import logo from "./logo.svg";
import "./App.css";
import Color from "./components/Color";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary"
import EnteredInfo from './components/EnteredInfo'
import { useState } from "react";

function App() {

  const [forminputs, setForminputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setForminputs({ ...forminputs, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const query = new URLSearchParams(formData).toString()
    console.log("query=>", `http://localhost:3000/?${query}`);
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>

      <BuggyCounter/>
      

      <Color/>
      
      <br />
      <br />
      <br />

      <h1>Sample form</h1>
      <form onSubmit={(e) => handleSubmit(e)} method=""> 
        <input name="fName" placeholder="First Name" onChange={(e) => handleChange(e)}/><br />
        <input name="lName" placeholder="Last Name" onChange={(e) => handleChange(e)}/><br />
        <input name="age" placeholder="Age" onChange={(e) => handleChange(e)}/><br />
        <br />
        <br />
        <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)}/>Male <br />
        <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)}/>Female <br />
        <h4>Select your destination:</h4>
        <select name="country" defaultValue="" onChange={(e) => handleChange(e)}>
          <option value="">Please choose your destination</option>
          <option value="japan">Japan</option>
          <option value="thailand">Thailand</option>
          <option value="brazil">Brazil</option>
        </select>
        <h4>Dietary restrictions</h4>
        <input type="checkbox" name="nutsFree" onChange={(e) => handleChange(e)}/>Nuts Free <br />
        <input type="checkbox" name="lactoseFree" onChange={(e) => handleChange(e)}/> Lactose Free <br />
        <input type="checkbox" name="vegan" onChange={(e) => handleChange(e)}/>Vegan <br />

        <input type="submit" value="Submit"/>

      </form>

      <EnteredInfo formData={forminputs}/>
    </div>
  );
}

export default App;
