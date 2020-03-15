# vanilla-style

Functional modal css-in-js.

Easy set HTMLElement styles, and easy use css-in-js make like pretend class: hover, active:

> Size 300b

## Install

```sh
$ npm install --save vanilla-style
```

## Use

```js
import style from 'vanilla-style';

const styleSheet = style({
  // base style
  color:'#333',
  background: '#f55',
  // like css :active
  active: {
    background: '#ff0',
  },
  // like css :hover
  hover: {
    background: '#55f'
  }
});

const box = document.getElementById('box');

styleSheet(box);
```
