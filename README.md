# get-keyword-baidu

## install

```sh
npm i get-keyword-baidu
# or
yarn add get-keyword-baidu
```

## use in webpack

```sh
import { getKeywordBaidu } from 'get-keyword-baidu';

const query = getKeywordBaidu();
console.log(query.wd);
```

## use in javascript

```html
<script src="./dist/index.min.js"></script>

<script>
  var query = getKeywordBaidu();
  console.log(query.wd);
</script>
```
