# vanilla-style

> Size < 1kb

## Install

```sh
$ npm install --save vanilla-style
```

## Use

```js
import style from 'vanilla-style';

const box = document.getElementById('box');

style.css(`
  :root {
    --red: #f55;
  }
`);

style(box, {
  background: 'var(--red)',
});
```
