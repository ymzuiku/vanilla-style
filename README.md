# vanilla-style

Functional modal css-in-js.

Easy set HTMLElement styles, and easy use css-in-js make like pretend class: hover, active:

> Size 2kb

## Install

```sh
$ npm install --save vanilla-style
```

## Use

```js
import style from "vanilla-style";

const styleSheet = style({
  // base style
  color: "#333",
  background: "#f55",
  $active: {
    background: "#ff0"
  },
  // like css :hover
  $hover: {
    background: "#55f"
  },
  // like display:flex; flex-direction: row; justify-content:center; align-items:center;
  $flex: "row center start"
});

const box = document.getElementById("box");

styleSheet(box);
```

## Middleware

vanilla-style built-in middlewares:

| name     | detail                             |
| -------- | ---------------------------------- |
| \$hover  | Like css:hover                     |
| \$active | Like css:active                    |
| \$flex   | Quick set flex css                 |
| \$media  | If window.innerWidth and set style |
| \$pc     | If at Desktop and set style        |
| \$mobile | if at Mobile and set style         |

We can create self middleware, \$bg:

```js
style.use('$bg', (value, element) =>{
  element.style.background = value;
  return {
    background: value;
  }
});
```

Use middleware style params:

```js
const box = document.getElementById("box");

style({
  $bg: "#f00"
})(box);
```
