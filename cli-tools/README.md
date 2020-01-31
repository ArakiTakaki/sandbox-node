
memfs

- fsの拡張
- JSON型で記述できる


```js
import { fs, vol } from 'memfs';

// 保存部
const json = {
  './README.md': '1',
  './src/index.js': '2',
  './node_modules/debug/index.js': '3',
};
vol.fromJSON(json, '/app');

// 読み出し部
fs.readFileSync('/app/README.md', 'utf8'); // 1
vol.readFileSync('/app/src/index.js', 'utf8'); // 2
```

