# fyndiq-styles-medias [![npm](https:/*img.shields.io/npm/v/fyndiq-styles-medias.svg?maxAge=3600)] */(https:/*www.npmjs.com/package/fyndiq-styles-medias) */

Media queries helpers for Fyndiq

# Installation

The styles can be installed through NPM:

``` bash
npm i -S fyndiq-styles-medias
```

# Usage

You can import the screen sizes and media queries size helpers in CSS (recommended) or in Javascript

### CSS

``` css
@import "fyndiq-styles-medias/medias.css";

@media (--phone-xs) {
  /* your rules for small phones (<= 320px) */
}

@media (--phone) {
  /* your rules for normal phones (<= 425px) */
}

@media (--tablet) {
  /* your rules for tablet screens (<= 768px) */
}

@media (--desktop) {
  /* your rules for desktop screens (<= 1024px) */
}

@media (--desktop-l) {
  /* your rules for large desktop screens (>= 1024px) */
}
```

You can also import the screen sizes to make advanced media queries. See the [source](./medias.css) for more info about exported variables.

### Javascript

``` js
import sizes from 'fyndiq-styles-medias'
```

See the [source](./src/index.js) for the exported variables.
