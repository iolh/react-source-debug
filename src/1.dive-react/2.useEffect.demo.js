import React, {
  useState,
  useRef,
  useInsertionEffect,
  useLayoutEffect,
  useEffect,
  memo,
  createContext,
  useContext,
  Suspense,
  Component,
} from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { screen, fireEvent } from "@testing-library/dom";

// export function App() {
//   const [count, setCount] = useState(1);
//   console.log(1);

//   useEffect(() => {
//     console.log(2);

//     return () => {
//       console.log(3);
//     };
//   }, [count]);

//   useEffect(() => {
//     console.log(4);
//     setCount((count) => count + 1);
//   }, []);

//   return <Child count={count} />;
// }

// function Child({ count }) {
//   useEffect(() => {
//     console.log(5);

//     return () => {
//       console.log(6);
//     };
//   }, [count]);

//   return null;
// }

// 1 5 2 4 1 6 3 5 2

export function App() {
  const [count, setCount] = useState(1);

  useInsertionEffect(() => {
    debugger;
    console.log(count);
  }, [count]);

  return <div onClick={() => setCount((count) => count + 1)}>{count}</div>;
}
