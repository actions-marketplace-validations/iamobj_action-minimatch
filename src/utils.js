import { getInput } from '@actions/core'

// 数组去重
export const uniqueArray = arr => [...new Set(arr)]

// 获取数组参数
export const getArrayInput = (name, required = false, unique = true) => {
  const arrayInput = getInput(name, {required}).split(/\r?\n/).reduce((acc, line) => acc.concat(line).filter(item => item).map(item => item.trim()),
    []
  )
  return unique ? uniqueArray(arrayInput) : arrayInput
}