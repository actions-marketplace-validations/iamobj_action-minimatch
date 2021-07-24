const core = require('@actions/core')
const minimatch = require('minimatch')
const { getArrayInput, getRawInput } = require('./utils')

const run = async() => {
  try {
    // 必填参数就设置 required，没有填就会自动抛错出去
    const rawStrings = core.getInput('strings', { required: true })
    const separator = getRawInput('separator')
    let strings = rawStrings
    if (!Array.isArray(strings)) {
      // 就支持数组和有分隔符的字符串，不是数组，就转换成数组
      strings = strings.split(separator)
    }

    core.startGroup('解析出的 string：')
    strings.forEach(str => {
      core.info(str)
    })
    core.endGroup()

    const patterns = getArrayInput('patterns', true)
    core.startGroup('解析出的 pattern：')
    patterns.forEach(pattern => {
      core.info(pattern)
    })
    core.endGroup()

    const matcStrings = [] // 用来存储匹配的字符

    core.startGroup('查找过程：')
    strings.forEach(str => {
      patterns.forEach(pattern => {
        core.info(`${str} 对比 ${pattern}`)
        if (minimatch(str, pattern)) matcStrings.push(str)
      })
    })
    core.endGroup()

    if (matcStrings.length) {
      core.startGroup('匹配到的 string：')
      matcStrings.forEach(str => {
        core.info(str)
      })
      core.endGroup()

      if (Array.isArray(rawStrings)) {
        core.setOutput('files', matcStrings)
      } else {
        core.setOutput('files', matcStrings.join(separator))
      }
    } else {
      core.info('没有匹配的文件')
      core.setOutput('files', false)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()