import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = (
    <div>
      <h1>samane zarini</h1>
    </div>
  );

  return (
    <div>
      {name}
      <User name="setareh" age={20} email="samane@zarini.com" />
      <User name="mona" age={25} email="mona@golii.com" />
      <User name="ali" age={30} email="ali@monfared.com" />

      <Job salery={100000000} position="web developer" compony="google" />
    </div>
  );
}
//practice
const Job = (props) => {
  return (
    <div>
      {props.salery},{props.position},{props.compony},
    </div>
  );
};

//component
const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

export default App;
