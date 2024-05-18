import React from "react";
import "./App.css";
import ListComponent from "./Week1/List Component/ListComponent"; 
import { Routes, Route, Link } from "react-router-dom";  


export default function App() {
  return (
    <> 
    <div className="App">
      <h1> Course Solution:</h1>
      <div> 
        <h2>Week 1</h2>
        <h3> <Link to ="/list-component">List Component</Link> </h3>
      </div>
      
    </div>      
      <Routes>
        <Route path="*" element={<App />}/>
        <Route path="list-component" element={<ListComponent/>} />
      </Routes>
    </>   
  );
}

