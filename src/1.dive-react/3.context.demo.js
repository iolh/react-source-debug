import React, { createContext } from "react";

const Context = createContext("123");

function Component1() {
  return <Component2 />;
}

function Component2() {
  return <Context.Consumer>{(value) => value}</Context.Consumer>;
}

export function App() {
  return (
    <Context.Provider value="JSer">
      <Component1 />
    </Context.Provider>
  );
}
