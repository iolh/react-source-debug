import React, {
  unstable_Activity as Activity,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";

console.log(React)

function Component() {
  const [count, setCount] = useState(0);
  console.log("render Component: count => ", count);
  useLayoutEffect(() => {
    console.log("render Component: layout effect in Component");
  }, []);
  useEffect(() => {
    console.log("render Component: effect in Component");
    setCount((_) => _ + 1);
  }, []);
  return <p>{count}</p>;
}

export function App() {
  const [hidden, setHidden] = useState(true);
  console.log("render App");
  return (
    <div>
      <button onClick={() => setHidden((_) => !_)}>toggle</button>
      <Activity mode={hidden ? "hidden" : "visible"}>
        <Component />
      </Activity>
    </div>
  );
}
