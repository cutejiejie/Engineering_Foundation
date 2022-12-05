const UTIL_NAME = "util_name_jiejie"

function formatCount() {
  return "200万"
}

function formatDate() {
  return "2022-10-10"
}

console.log(exports) // {}

exports.UTIL_NAME = UTIL_NAME
exports.formatCount = formatCount
exports.formatDate = formatDate

console.log(exports)
/* {
  UTIL_NAME: 'util_name_jiejie',
  formatCount: [Function: formatCount],
  formatDate: [Function: formatDate]
} */