# fyndiq-component-button [![npm](https://img.shields.io/npm/v/fyndiq-component-button.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-button)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Button&selectedStory=default)

A button component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-button
```

# Usage

``` js
import React from 'react'
import Button from 'fyndiq-component-button'

// Normal usage
<Button onClick={() => console.log('clicked')}>
  My Button
</Button>

// Red button
<Button type="cancel">Cancel my task</Button>

// Bigger button
<Button size="l">My big button</Button>

// Custom className
<Button className="additional-styles">Button</Button>

// Disabled usage
<Button disabled>My disabled Button</Button>

// Render a link as a button
<Button link="#hello">My link</Button>

// Use a custom Link element
import { Link } from 'react-router-dom'

<Button link={<Link to="my/path" />}>
  My link
</Button>

// Manipulate buttons as a group
import Button, { Wrapper } from 'fyndiq-component-button'

<Wrapper>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Wrapper>

// vertical layout
<Wrapper orientation="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Wrapper>
```

# API

The component `Button` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **type** | String | One of `primary`, `cancel`, `blue`, `inverted`. Changes the color style of the button | `normal` |
| **htmlType** | String | Set the original html type for `button`. See: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | `button` |
| **className** | String | Classname of the wrapping button | `''` |
| **size** | String | One of `xs`, `s`, `l`, `xl`. Changes the size of the button | `m` |
| **disabled** | Boolean | If true, will disable the button. | `false` |
| **pressed** | Boolean | Show the button as pressed | `false` |
| **pill** | Boolean | Rounds border-radius mode | `false` |
| **link** | String or Element | Uses an `<a>` tag or a custom element to render the button | `undefined` |
| **onClick** | Function | Callback when the button is pressed | `noop => noop` |

The component `Wrapper` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **orientation** | String | One of `horizontal` or `vertical`. Changes the flex-direction of the wrapper | `horizontal` |
| **children** | Element | Content of the Wrapper | `null` |
| **className** | String | Additionnal className for the wrapper | `''` |
| **noOuterBorder** | Boolean | Removes the outer border of the button group | `false` |
