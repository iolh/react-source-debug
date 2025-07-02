// import React, { useState } from "react";

// function Link() {
//   return <a href="https://jser.dev">jser.dev</a>;
// }
// export function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>
//         <Link />
//         <br />
//         <button onClick={() => setCount((count) => count + 1)}>
//           click me - {count}
//         </button>
//       </p>
//     </div>
//   );
// }

import React, { useState } from "react";
function Link() {
  return <a href="https://jser.dev">jser.dev</a>;
}

function Component() {
  const [count, setCount] = useState(0);
  // React.useLayoutEffect(() => {
  //   console.log("render Component");
  //   return () => {
  //     debugger;
  //     console.log("unmount Component");
  //   };
  // });
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        click me - {count}
      </button>
      ({count % 2 === 0 ? <span>even</span> : <b>odd</b>})
    </div>
  );
}
export function App() {
  return (
    <div>
      <Link />
      <br />
      <Component />
    </div>
  );
}

// // trigger
// // render
// // - beginWork
// // - completeWork
// // commit
// // - beforeMutation
// // - mutation
// // - layout


// react 17 事件批处理原理 有设计缺陷 和 同步更新严格同步是和批处理有冲突的
// 同步情况 就是batchedEventUpdates 的 finally 中调用flushSyncCallbackQueue 立即刷新同步执行，
// 此时因为两次优先级一致，导致SyncCallbackQueue 只有一个performSyncWorkOnRoot，所以最后渲染一次。

// 异步情况 就是scheduleUpdateOnFiber 中因为 executionContext 为 Nocontext 
// 所以直接调用flushSyncCallbackQueue，立即同步渲染一次，然后第二个 setState，所以立即同步渲染第二次。最终连续渲染两次。

// 为什么executionContext 为 Nocontext 要直接调用 flushSyncCallbackQueue，性能优化，尽早更新。

// React 18事件批处理原理
// react 18 不会调用flushSyncCallbackQueue 立即执行更新工作并且重置优先级。
// 而是同步执行两次ensureRootIsScheduled，
// 从之前的同步的flushSyncCallbackQueue 变成异步微任务的
// scheduleMicrotask(()=>flushSyncCallbacks())
// 从而可以根据先后优先级，命中批量处理优化逻辑。
// 异步情况
