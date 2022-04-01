import React from "react";
import {
  Blog,
  Header,
  Footer,
  Possibility,
  WhatGPT3,
  Features,
} from "./containers";
import { Article, Brand, Cta, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="Gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
