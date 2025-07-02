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
// import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { App } from "./1.dive-react/0.update.demo";
// import { App } from "./1.useState.demo.js";
// import { App } from "./2.useEffect.demo.js";
// import { App } from "./8.bailout.js";
// import { App } from "./7.ErrorBoundary.demo.js";
// import { App } from "./3.context.demo.js";
// import { App } from "./9.suspense.demo.js";
// import { App } from "./10.offscreen.demo.js";
// import { App } from "./11.lazy.demo.js";
// import { App } from "./12.portal.demo.js";
// import { screen, fireEvent } from "@testing-library/dom";

// function A() {
//   console.log("render A");
//   return null;
// }

// function App() {
//   const [_state, setState] = useState(false);
//   console.log("render App");
//   return (
//     <div>
//       <button
//         onClick={() => {
//           console.log("click");
//           setState(true);
//         }}
//       >
//         click me
//       </button>
//       <A />
//     </div>
//   );
// }

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// setTimeout(() => fireEvent.click(screen.getByText("click me")), 100);
