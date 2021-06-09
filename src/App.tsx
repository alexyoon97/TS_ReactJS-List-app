import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    note?: string;
    url: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name:'Alex Yoon',
      age:24,
      url:'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
    }
  ]);
  return (
    <div className="App">
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
