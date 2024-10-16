import { useState } from "react";
import Actor from "./actor";
import "./App.css";
import Singers from "./Singers";
import Todo from "./Todo";

function App() {
  const actors = [
    "Sakib Khan",
    "Shoriful Raj",
    "Jasim",
    "Rubel",
    "Salman Shah",
  ];

  const singers = [
    { name: "Barik Siddiq", age: 68 },
    { name: "Jems", age: 60 },
    { name: "Asif Akbor", age: 57 },
    { name: "Tashrif Khan", age: 27 },
  ];

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>React Core Concept Part-1</h1>

      <button onClick={handleClick}>Clicked {count} times</button>

      {actors.map((actorName, index) => (
        <Actor name={actorName} key={index}></Actor>
      ))}

      {singers.map((singer, index) => (
        <Singers singer={singer} key={index}></Singers>
      ))}

      {/* <Todo task="Learn React"></Todo>
      <Todo task="Core Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* 
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="29500"></Device>
      <Person></Person>
      <Student grade="7" score="60"></Student>
      <Student></Student>
      <Student grade="8" score="70"></Student>
      <Student></Student>
      <Student grade="10" score="40"></Student>
      <Developer></Developer> */}
    </>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "Yasin Arafat", age: 21 };
  return (
    <h3>
      I am {person.name} person with age: {person.age}
    </h3>
  );
}

function Student({ grade, score }) {
  return (
    <div className="student">
      <h3>This is student</h3>
      <p>Class: {grade || "N/A"}</p>
      <p>Score: {score || "N/A"}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h3>Devo devo</h3>
      <p>Codding:</p>
    </div>
  );
}

function Device({ name, price }) {
  return (
    <h2>
      This Device: {name}, Price: {price}
    </h2>
  );
}

export default App;
