function Component(props) {
  return (
    <div>
      Notice that for Component, <br />
      we get props as <code>{JSON.stringify(props)}</code> <br />
      which doesn't contain `ref` thought it is set
    </div>
  );
}

export function App() {
  return <Component a={1} ref={() => {}} />;
}
