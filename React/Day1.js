import React from "react";

//task 1
function Hello() {
  return <h1>Hello React</h1>;
}

//task 2
function Welcome() {
  return <h1>Welcome to React Class</h1>;
}

//task 3
function Header() {
  return <h1>Header</h1>;
}

//task 4
function AppText() {
  return <h1>App</h1>;
}

//task 5
const name = "Sreeni";
function Display() {
  return <h1>Hello {name}</h1>;
}

//task 6
function Snow() {
  return <h1>My name is</h1>;
}

//task 7
const a = 10;
const b = 20;
function Sum() {
  return <h1>{a + b}</h1>;
}

//task 8
const admin = "Sreeni";
function Pass() {
  if (admin) {
    return <h1>Admin User</h1>;
  }
  return <h1>Guest</h1>;
}

//task 9
function Reign(props) {
  return <h1>User Name: {props.name}</h1>;
}

//task 10
function Lord(props) {
  return <div>{props.name} {props.age}</div>;
}

//task 11
function Rome(props) {
  return <h1>{props.name}</h1>;
}

//task 12
function Action(props) {
  return <button>{props.name}</button>;
}

//task 13
function Cond(props) {
  return props.name ? <h1>Logged In</h1> : <h1>Logged Out</h1>;
}

//task 14
function Fed(props) {
  return <div>{props.user.name} {props.user.age}</div>;
}

function App() {
  const user = { name: "Sreeni", age: 21 };

  return (
    <div>
      <Hello />
      <Welcome />
      <Header />
      <AppText />
      <Display />
      <Snow />
      <h1>{name}</h1>
      <Sum />
      <Pass />
      <Reign name="Sreeni" />
      <Lord name="Sreeni" age={90} />
      <Rome name="Sreeni" />
      <Action name="Add" />
      <Action name="Delete" />
      <Action name="Merge" />
      <Cond name={true} />
      <Fed user={user} />
    </div>
  );
}

export default App;
