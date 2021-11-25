import React from "react";
import './App.css';
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules/>
    </div>
  );
};
