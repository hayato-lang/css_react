import React from "react";
import './App.css';
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import {StyledJsx} from "./components/StyledJsx";
export const App = () => {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules/>
      <StyledJsx/>
    </div>
  );
};
