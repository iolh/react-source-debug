首先执行 npm install 或 yarn 安装依赖

然后 npm run build 执行 webpack 构建

之后 debug 启动

这时候调用栈中就可以看到 react 源码的包

替换成自己本地生成的 sourcemap

之后把 react 源码也加到这个 workspace 里来，就可以直接点击调用栈打开对应的源码文件了