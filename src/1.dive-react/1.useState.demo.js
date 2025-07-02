import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { screen, fireEvent } from "@testing-library/dom";

function A() {
  console.log(2);
  return null;
}
export function App() {
  const [_state, setState] = useState(false);
  console.log(1);
  console.log("========render========")
  return (
    <>
      <button
        onClick={() => {
          console.log("click");
          setState(true);
        }}
        data-testid="action"
      >
        click me
      </button>
      {/* <A /> */}
    </>
  );
}

function wait(duration = 100) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// (async function () {
//   const action = await screen.findByTestId("action");
//   fireEvent.click(action);
//   await wait(100);
//   fireEvent.click(action);
//   await wait(100);
//   fireEvent.click(action);
// })();
