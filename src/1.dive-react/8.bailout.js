import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { screen, fireEvent } from "@testing-library/dom";

function B({ children }) {
  console.log("render component B");
  return (
    <div className="component" data-name="B">
      {children}
    </div>
  );
}
function C({ children }) {
  console.log("render component C");
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => setCount((count) => count + 1), []);
  return (
    <div className="component" data-name="C">
      <button onClick={increment}>{count}</button>
    </div>
  );
}

function D({ children }) {
  console.log("render component D");
  return (
    <div className="component" data-name="D">
      {children}
    </div>
  );
}

function E({ children }) {
  console.log("render component E");
  return (
    <div className="component" data-name="E">
      {children}
    </div>
  );
}

function F({ children }) {
  console.log("render component F");
  return (
    <div className="component" data-name="F">
      {children}
    </div>
  );
}

export function App() {
  console.log("render component A");
  return (
    <div className="component" data-name="A">
      <B>
        <C>
          <D />
        </C>
      </B>
      <E>
        <F />
      </E>
    </div>
  );
}
