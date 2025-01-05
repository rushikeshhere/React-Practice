import React from "react";
import "./App.css";
import LikeButton from "./LikeButton";
import Hello from "./Hello";
import Random from "./Random";


function App() {
 return <div className="app">
  <h1 id="title">Hello world</h1>
  <LikeButton></LikeButton>
  <br />
  <Hello></Hello>
  <Random></Random>
  <Random></Random>
  <Random></Random>
  <Random></Random>
  <Random></Random>
  
 </div>
 }
 export default App;