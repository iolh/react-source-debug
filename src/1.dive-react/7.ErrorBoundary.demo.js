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

function renderWithError() {
  throw new Error("error");
}

function A() {
  renderWithError();
  return <ErrorBoundary name="boundary-2">{renderWithError()}</ErrorBoundary>;
}

export function App() {
  return (
    <ErrorBoundary name="boundary-1">
      <A />
    </ErrorBoundary>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    console.log(this.props.name);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
