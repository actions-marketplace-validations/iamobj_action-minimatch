const { getInput } = require('@actions/core')

// 数组去重
const uniqueArray = arr => [...new Set(arr)]

// 获取数组参数
const getArrayInput = (name, required = false, unique = true) => {
  const arrayInput = getInput(name, {required}).split(/\r?\n/).reduce((acc, line) => acc.concat(line).filter(item => item).map(item => item.trim()),
    []
  )
  return unique ? uniqueArray(arrayInput) : arrayInput
}

module.exports = {
  uniqueArray,
  getArrayInput
}