let name = "bar_jiejie"

exports.name = name

// 1.2s之后修改
// setTimeout(() => {
//   // name = "why"
//   exports.name = "bar_修改后"
// }, 2000)

// 2.4s之后获取
setTimeout(() => {
  console.log(exports.name)
}, 4000)