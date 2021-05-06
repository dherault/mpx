# mpxx

A set of spacing CSS classes compatible with Material ui standards.

## How it works

```
- Pick a spacing operator: m: margin or p: padding
- Pick a spacing modifier: t: top, b: bottom, l: left, r: right, x: horizontal, y: vertical
- Pick a spacing value in half rem: auto, 0, 0h: 0.5, 1, 1h: 1.5, 2, 3, ..., 12
- (optionnal) Apply a mobile screens suffix: m
- Combime them into a CSS class:
```
```html
<div class="mx-auto">
  <div>Horizontal margins auto</div>
</div>
<div class="p-2">
  <div>Padding 1rem</div>
</div>
<div class="py-4-m">
  <div>Vertical padding 2rem on mobile screens</div>
</div>
```

## Installation

#### JavaScript

`npm install mpxx --save`

Inject CSS:
```js
import 'mpxx/mpxx.min.css'
```

Or use with inline styles:
```jsx
import mpxx from 'mpxx'

const Menu = () => (
  <div style={mpxx('pt-2')}>
    Padding top 1rem
  </div>
)
```

#### HTML

Download the [CSS file](https://raw.githubusercontent.com/dherault/mpxx/main/mpxx.css).

Or use a CDN:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mpxx@3.0.0/mpxx.min.css">
```

## Contributing

Yes, thank you.
