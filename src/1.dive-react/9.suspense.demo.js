import React, { useState, Suspense, useEffect, useLayoutEffect } from "react";

const getResource = (data, delay = 1000) => ({
  _data: null,
  _promise: null,
  status: "pending",
  get data() {
    if (this.status === "ready") {
      return this._data;
    } else {
      if (this._promise == null) {
        this._promise = new Promise((resolve) => {
          setTimeout(() => {
            this._data = data;
            this.status = "ready";
            resolve();
          }, delay);
        });
      }
      throw this._promise;
    }
  },
});

export function App() {
  const [resource, setResource] = useState(null);
  return (
    <div className="app">
      <button
        onClick={() => {
          setResource(getResource("JSer"));
        }}
      >
        start
      </button>
      <Suspense fallback={<p>loading...</p>}>
        <Child resource={resource} />
      </Suspense>
    </div>
  );
}

function Child({ resource }) {
  console.log("render Component");
  useLayoutEffect(() => {
    console.log("render Component: layout effect in Component");
  });
  useEffect(() => {
    console.log("render Component: effect in Component");
  });
  return resource ? (
    <p>
      <input />
      {resource.data}
    </p>
  ) : null;
}
