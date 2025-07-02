import React, { Suspense, lazy, useState } from "react";

// delay forces loading delay, for demo purpose
const LazyComponent = lazy(() => delay(import("./Component.js")));

export function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={show}
          onChange={() => setShow((show) => !show)}
        />
        show lazy component
      </label>
      <hr />
      {show ? (
        <Suspense fallback={<p>loading</p>}>
          <LazyComponent />
        </Suspense>
      ) : (
        "-"
      )}
    </div>
  );
}

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(promise), 2000);
  });
}
