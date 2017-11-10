# fyndiq-component-dropdown [![npm](https://img.shields.io/npm/v/fyndiq-component-dropdown.svg?maxAge=3600)](https://www.npmjs.com/package/fyndiq-component-dropdown)

[Preview](http://developers.fyndiq.com/fyndiq-ui/?selectedKind=Dropdown&selectedStory=default)

A dropdown component for Fyndiq

# Installation

The component can be installed through NPM:

``` bash
npm i -S fyndiq-component-dropdown
```

# Usage

``` js
import React from 'react'
import Dropdown from 'fyndiq-component-dropdown'

// Normal usage
<Dropdown button="Open dropdown">
  Dropdown content
</Dropdown>

// No arrow pointing downwards
<Dropdown button="Open dropdown" noArrow>
  Dropdown content
</Dropdown>

// Custom button
import Button from 'fyndiq-component-button'
<Dropdown button={(
  <Button type="primary">
    Open Dropdown
  </Button>
)}>
  Dropdown content
</Dropdown>

// Open dropdown on hover
<Dropdown button="Hover me" hoverMode>
  Dropdown content
</Dropdown>

// Change the position of the dropdown
<Dropdown button="Top right" position="tr">
  Dropdown content
</Dropdown>

// Custom class names
<Dropdown
  button="Open"
  className="className"
  wrapperClassName="wrapperClassName"
>
  Content
</Dropdown>

// Programatically close the dropdown from inside
<Dropdown button="button">
  {({ onClose }) => (
    <button onClick={onClose}>Click on me to close me</button>
  )}
</Dropdown>

// Add handlers on dropdown open and close actions
<Dropdown
  button="button"
  onOpen={this.handleDropdownOpen}
  onClose={this.handleDropdownClose}
>
  Content
</Dropdown>
```

See also : [`fyndiq-component-button`](/fyndiq/labday-fyndiq-ui/tree/master/packages/fyndiq-component-button)

# API

The component `Dropdown` has the following customizable props:

| Name | Type | Description | Default value |
|---|---|---|---|
| **button** | String or Component | The inside of the dropdown's button. If a String is passed, a `<Button>` will be shown. | (required) |
| **children** | Component or Function | Content of the dropdown. If a function is passed, it will be passed a `onClose` handler. | (required) |
| **size** | String | Size of the button if **button** is used in String mode. For values, see [`Button`'s API](../fyndiq-component-button#API) | Button's default |
| **position** | String | Position of the dropdown, relatively to the button. One of `bl`, `bc`, `br`, `tl`, `tc`, `tr` | `bl` |
| **margin** | Number | Distance from the dropdown to the button | `5` |
| **className** | String | Class name to give to the root element | `` |
| **wrapperClassName** | String | Class name to give to the wrapper | `` |
| **disabled** | Boolean | If true, disables the dropdown | `false` |
| **noArrow** | Boolean | If **button** is used in String mode, hides the downwards arrow | `false` |
| **noWrapperStyle** | Boolean | Remove cosmetic styles for the wrapper | `false` |
| **opened** | Boolean | Allows to externally control the dropdown | `false` |
| **hoverMode** | Boolean | Opens the dropdown on hover rather than on click | `false` |
| **noPropagateClickEvent** | Boolean | Stop the propagation of the click event | `false` |
| **onOpen** | Function | Handler method when the dropdown is opened | |
| **onClose** | Function | Handler method when the dropdown is closed | |
