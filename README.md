# action-minimatch
参数和输出查看 [action.yml](https://github.com/iamobj/action-minimatch/blob/main/action.yml)

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

