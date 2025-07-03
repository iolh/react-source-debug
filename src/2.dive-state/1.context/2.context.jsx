// context 跨级传值
import React, { memo, useMemo } from "react";
import { useContext, createContext, useState } from "react";

// 简言之，context provider 惰性传播
// 有 memoized 组件才会开始传播，所谓传播就是向上找到所有变化的 context provider
// 向下去匹配所有的 consumer，然后标记子组件更新
// 标记子组件更新就是更新 lanes 和 childLanes
// consumer

// create store -> context
// subscribe -> consumer
// observe -> lazily propagateParentContextChanges
// dispatch -> propagateContextChange

// mark update lanes

// 1.创建 context
const Context = createContext(null);

// props 没变，schedule update 计算后也没变化，context 变化标记本身存在更新
function DeepChild() {
  console.log("DeepChild Rendered");
  console.log("==================");
  const { count, setCount } = useContext(Context);
  return <div onClick={() => setCount(count + 1)}>{count}</div>;
}

// beginWork 提前 bailout
// 因为子组件使用了 context，所以只能 bailout 自身，子组件继续 render
function GrandChild() {
  console.log("GrandChild Rendered");
  return <DeepChild />;
}

// 优化组件渲染，memo 组件可以复用子组件的 props，帮助子组件 bailout
// updateMemoFunction beginWork 阶段惰性传播上下文改变，从下往上（包含自己）找到所有变化的 context providers
// 传播上下文改变，从subtree子组件往下找到 consumer，consumer lanes添加 renderLanes
// 从下往上标记 childLanes，表明存在子组件更新
const Child = memo(() => {
  console.log("Child Rendered");
  return <GrandChild />;
});

// 正常组件
// const Child = () => {
//   console.log("Child Rendered");
//   return <GrandChild />;
// };

export function App() {
  console.log("App Rendered");
  const [count, setCount] = useState(0);

  // useMemo 优化子组件渲染
  const child = useMemo(() => <Child />, []);
  console.dir(child);

  return (
    <Context
      value={{
        count,
        setCount,
      }}
    >
      <Child />
    </Context>
  );
}

// 因为子组件采用 context 依赖注入，没有改变 props 的情况下不会重新渲染
// 对未依赖 context 的子组件进行性能优化
