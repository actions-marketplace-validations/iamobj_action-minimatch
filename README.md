# action-minimatch
参数和输出查看 [action.yml](https://github.com/iamobj/action-minimatch/blob/main/action.yml)

[版本发布参照官方说明](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md#recommendations)，发布新版本 tag，将主要版本（比如v1）移动到最新版本，就可以让用户自动使用最新的

## 示例用法

```yaml
- uses: iamobj/action-minimatch@v1
  id: minimatch
  with:
    strings: 'a.js,b.js,src/c.js,src/a.js'
    separator: ','
    patterns: |
    	src/**
- run: |
    # 输出 "src/c.js,src/a.js"
    echo "${{steps.minimatch.outputs.files}}"
```

