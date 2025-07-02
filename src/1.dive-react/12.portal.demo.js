import React, { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  const el = document.createElement("div");
  el.appendChild(document.createElement("p"));
  el.className = "modal";
  useLayoutEffect(() => {
    document.body.append(el);
    return () => {
      el.remove();
    };
  });
  return createPortal(<div className="modal-inner">{children}</div>, el);
}

export function App() {
  const [showModal, setShowModal] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>show modal</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {showModal && (
        <Modal>
          <div>
            <p>count: {count}</p>
            <button onClick={() => setShowModal(false)}>hide modal</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
