import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Aktivite from "./components/Aktivite";
import Katman from "./components/Katman";
import Comment from "./components/Comment";
import Contact from "./components/Contant";
import Map from "./components/Map"



function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Aktivite />
      <Katman/>
      <Comment/>
      <Contact/> 
      <Map/>
    </div>
  );
}

export default App;
