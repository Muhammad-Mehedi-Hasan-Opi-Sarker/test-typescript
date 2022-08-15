import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name: string = "Opi Sarker";
  const list: number[] = [4, 5, 6, 67, 7, 78];

  interface Person {
    firstName:string,
    lastName:string,
    age:number
  }

  const all:Person = {
    firstName: "Opi",
    lastName: "Sarker",
    age: 34,

  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
