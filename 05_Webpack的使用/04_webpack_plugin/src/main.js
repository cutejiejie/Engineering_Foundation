import { createApp } from "vue";
import Hello from "./vue_demo/Hello";

import "./utils/abc/cba/nba/why/test";

import { sum } from "./utils/math";
// import "./component/cpns"

const message = "Hello World";

console.log(sum(20, 30));
console.log(sum(10, 12));

console.log(message.length);
console.log(sum(100, message.length));

const bar = () => {
  console.log("bar function execution~");
};

bar();
bar();

// Vue代码
createApp(Hello).mount("#app");

// 使用通过DefinePlugin注入的变量
console.log(name);
console.log(age);

// DefinePlugin默认情况下有注入过一个变量。【process.env.NODE_ENV】用来判断当前的环境到底是开发环境还是生产环境。
console.log(process.env.NODE_ENV);

console.log("aaaabbbb");
