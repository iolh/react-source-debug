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

// ==================dive-react demo==================
// import { App } from "./1.dive-react/0.update.demo";

// ==================dive-state demo==================
import { App } from "./2.dive-state/1.context/2.context.jsx";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
