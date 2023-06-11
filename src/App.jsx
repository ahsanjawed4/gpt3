import React, { useState, useEffect } from "react";
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
import { crypto, url } from "./api";
const App = () => {
  const [abc, setAbc] = useState([]);
  useEffect(() => {
    const callCrypto = async () => {
      const response = await crypto(`${url}/daily`);
      /*response.forEach((val, index) => {
        console.log(val.name);
      });*/
      setAbc(response);
    };
    callCrypto();
  }, []);
  return (
    <div className="App">
      {/*
      <div>
        {abc.map((val) => {
          return (
            <div key={(val.name % 2 == 34, 526 ? "end" : val.name)}>
              <h1 style={{ color: "white", textAlign: "center" }}>
                {val.name}
              </h1>
            </div>
          );
        })}
      </div>*/}
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
